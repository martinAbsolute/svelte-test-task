<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	const LANGUAGES = [
		{ label: 'ENG', isEnabled: true },
		{ label: 'FR', isEnabled: false }
	];
	const SOCIALS = [
		{ label: 'FB', href: 'https://google.com' },
		{ label: 'PIN', href: 'https://google.com' },
		{ label: 'IG', href: 'https://google.com' }
	];

	let ready = false;
	onMount(() => (ready = true));
</script>

<main class="h-screen bg-amber-50 flex">
	<section class="h-full w-full md:w-3/5 bg-black relative">
		{#if ready}
			<img
				src="model.jpg"
				alt="Model 1"
				class="absolute size-full object-cover"
				transition:fade={{ duration: 3000 }}
			/>
		{/if}
		<div class="relative z-10 h-1/3 w-full">
			<div class="flex text-white p-12 pl-16">
				<img src="menu.svg" alt="Menu Button" height="20" width="20" class="mr-8" />
				<span class="font-semibold text-2xl">Menu</span>
			</div>
		</div>
		<div class="relative z-10 h-2/3 text-white ml-16">
			<div class="flex flex-wrap gap-16 justify-between mb-24">
				<h4 class="text-md font-semibold">Summer<br />Collection<br />2020</h4>
				{#if ready}
					<div
						class="flex items-center mr-16 text-md font-semibold"
						transition:fade={{ duration: 3000 }}
					>
						Next
						<span class="w-28 h-0.5 bg-white mx-8"></span>
						Previous
					</div>
				{/if}
			</div>
			<h1 class="text-8xl md:text-9xl font-forum">Summer<br />2020</h1>
		</div>
		<div class="absolute bottom-16 left-16">
			{#each SOCIALS as { label, href }}
				<a {href} target="_blank" class="text-white font-semibold mr-8">{label}</a>
			{/each}
		</div>
		{#if ready}
			<div class="absolute bottom-16 right-16 gap-32 text-white text-8xl hidden md:flex">
				<button class="opacity-50" transition:fly={{ x: -600, duration: 1800 }}>.</button>
				<button class="opacity-50" transition:fly={{ x: -400, duration: 1200 }}>.</button>
				<button transition:fly={{ x: -200, duration: 600 }}>.</button>
			</div>
		{/if}
	</section>

	<section class="h-full w-2/5 relative hidden md:block">
		<div class="text-right mr-8 mt-4">
			{#each LANGUAGES as { label, isEnabled }}
				<button class="font-bold p-6 mb-6 transition-colors" class:text-gray-300={!isEnabled}>
					{label}
				</button>
			{/each}
		</div>
		{#if ready}
			<img
				src="model2.jpg"
				alt="Model 2"
				class="absolute w-1/3 lg:w-1/3 top-1/4 right-1/4"
				transition:fly={{ y: -400, duration: 1000 }}
			/>
			<img
				src="model3.jpg"
				alt="Model 3"
				class="absolute h-1/3 bottom-16 left-14"
				transition:fly={{ x: -200, duration: 2000 }}
			/>
		{/if}
		<div class="absolute flex rotate-90 font-bold -right-40 top-1/2 items-center">
			Ref. 6687/787
			<span class="w-28 h-0.5 bg-black mx-16"></span>
			White loose dress
		</div>
		{#if ready}
			<button
				class="absolute bottom-16 bg-amber-50 right-16 uppercase font-bold border border-black px-16 py-4
				transition-colors duration-200 ease-in-out hover:bg-black hover:text-white text-nowrap"
				transition:fade={{ duration: 1000 }}
			>
				Shop Now
			</button>
		{/if}
	</section>
</main>
