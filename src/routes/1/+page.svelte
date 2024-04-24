<script>
	const buttons = ['Animation', 'Branding', 'Illustration'];
	const SLIDER_WIDTH = 80;

	let active = 'Branding';
	let sliderLeft = 0;

	let buttonRefs = [];

	$: if (buttonRefs.length === buttons.length) {
		const activeButtonIndex = buttonRefs.findIndex((button) => button.textContent === active);
		const offset = buttonRefs
			.slice(0, activeButtonIndex)
			.reduce((acc, button) => acc + button.clientWidth, 0);
		sliderLeft = offset + buttonRefs[activeButtonIndex].clientWidth / 2 - SLIDER_WIDTH / 2;
	}
</script>

<main class="h-screen bg-radient-circle-b from-blue-950 to-black">
	<div class="h-full grid place-content-center">
		<section class="flex flex-row text-gray-500 relative">
			{#each buttons as button}
				<button
					bind:this={buttonRefs[buttons.indexOf(button)]}
					class="lg:text-4xl font-semibold p-4 mb-6 transition-colors"
					class:text-white={active === button}
					on:click={() => (active = button)}
				>
					{button}
				</button>
			{/each}
			<div
				class="absolute bottom-0 h-2 w-20 rounded bg-white transition-all duration-200"
				style="left: {sliderLeft}px; width: {SLIDER_WIDTH}px;"
			/>
		</section>
	</div>
</main>
