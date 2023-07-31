<div class="relative group flex">
	<slot name="trigger" />
	<div class="hidden group-hover:flex flex-col top-full w-fit py-2 absolute">
		<ul class="bg-zinc-700 rounded-md px-4 text-start animate-fadeInUp-100">
			<slot />
		</ul>
	</div>
</div>

<style lang="postcss">
	ul :global(*) {
		margin-top: 1rem;
		margin-bottom: 1rem;
		white-space: nowrap;
	}
</style>
