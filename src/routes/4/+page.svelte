<script>
	import Todo from '$lib/4. To do application/Todo.svelte';
	import { format } from 'date-fns';
	import { afterUpdate } from 'svelte';

	const today = new Date();

	export let data;

	let todoInput = null;
	let scrollContainer = null;
	let isQueueScrollUpdate = false;

	const addTodo = (title) => {
		if (title) {
			const newTask = {
				id: data.tasks.length + 1,
				title: title.trim(),
				isCompleted: false
			};
			data.tasks = [...data.tasks, newTask];
			isQueueScrollUpdate = true;
		}
	};

	const toggleTodo = (id) => {
		data.tasks = data.tasks.map((task) => {
			if (task.id === id) task.isCompleted = !task.isCompleted;
			return task;
		});
	};

	afterUpdate(() => {
		if (isQueueScrollUpdate) {
			scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
			isQueueScrollUpdate = false;
		}
	});

	const handleClickAdd = () => {
		if (!todoInput.value) {
			todoInput.focus();
			return;
		}
		addTodo(todoInput.value);
		todoInput.value = '';
	};

	const handkeKeyUpInput = (event) => {
		if (event.key === 'Enter') {
			addTodo(event.target.value);
			event.target.value = '';
		}
	};
</script>

<main class="h-screen bg-amber-50">
	<div class="h-full grid place-content-center">
		<div class="max-w-sm shadow-md bg-white relative">
			<section class="text-center p-6">
				<div class="font-bold text-4xl text-gray-500 mb-4">{format(today, 'MMMM')}</div>
				<div class="font-bold text-md text-gray-400">{format(today, 'EEEE, MMMM M')}</div>
			</section>
			<hr />
			<ul bind:this={scrollContainer} class="px-4 pt-8 max-h-96 overflow-auto">
				{#each data.tasks as { id, title, isCompleted } (id)}
					<Todo {title} {isCompleted} on:toggle={toggleTodo(id)} />
				{/each}
			</ul>
			<div class="flex m-4 mb-12">
				<input
					bind:this={todoInput}
					type="text"
					class="w-full border p-3 border-gray-300"
					placeholder="Add Task"
					on:keyup={handkeKeyUpInput}
				/>
			</div>
			<button
				class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 px-9 py-1.5 rounded-full text-xl font-semibold text-white
				hover:bg-green-500 hover:scale-105 active:bg-green-600 active:scale-95 shadow-md transition-transform"
				on:click={handleClickAdd}
			>
				Add
			</button>
		</div>
	</div>
</main>
