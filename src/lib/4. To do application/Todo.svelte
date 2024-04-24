<script>
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';

	export let title;
	export let isCompleted;

	const dispatch = createEventDispatcher();
</script>

<li class="pb-3 flex justify-between" transition:scale>
	<span class="pr-20" class:line-through={isCompleted} class:text-neutral-400={isCompleted}>
		{title}
	</span>
	<button class="size-8 inline p-1" on:click={() => dispatch('toggle')}>
		<img src={isCompleted ? 'face-happy.svg' : 'face-neutral.svg'} alt="check" />
	</button>
</li>
