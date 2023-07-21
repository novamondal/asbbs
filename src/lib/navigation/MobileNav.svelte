<script lang="ts">
	let dialog: HTMLDialogElement;
	let open = false;
	function show() {
		open = true;
		dialog?.show();
	}
	function close() {
		open = false;
		window.setTimeout(() => dialog?.close(), 300);
	}
</script>

<button
	on:click={dialog?.open ? close : show}
	class="bg-rose-400 p-4 rounded-md flex flex-col ham gap-1.5 text-white w-min md:hidden fadeIn"
	class:cross={open}
>
	<div class="bg-current text-inherit" />
</button>

<dialog
	bind:this={dialog}
	class="top-full w-screen bg-zinc-800 p-4 transition-all duration-300 ease-in-out md:hidden"
	class:fadeOut={!open}
	class:fadeIn={open}
>
	<ul class="bg-zinc-700 p-4 rounded-md">
		<li>
			<a href="/call-for-paper">Call for Paper</a>
			<div class="ml-4 brightness-75">
				<a href="/call-for-paper/national"> - National</a>
				<a href="/call-for-paper/international"> - International</a>
			</div>
		</li>
		<li>
			<a href="/journals">Journals</a>
			<div class="ml-4 brightness-75">
				<a href="/journals/business-behavioral-science">
					- Behavioral Science
				</a>
				<a href="/journals/accounting">- Accounting</a>
				<a href="/journals/educational-leadership">
					- Educational Leadership
				</a>
				<a href="/journal/ejournal">- e-Journal</a>
			</div>
		</li>
		<li>
			<a href="/fellows">Fellows</a>
		</li>
		<li>
			<a href="/program">Program</a>
		</li>
		<li>
			<a href="/proceedings">Proceedings</a>
		</li>
	</ul>
</dialog>

<style>
	.fadeOut {
		opacity: 0;
		translate: 0 10%;
	}
	div > a {
		display: block;
		width: fit-content;
	}
	li {
		margin: 0.75rem 0;
	}
	li > a {
		@apply text-lg;
	}
	.ham::before,
	.ham::after,
	.ham > div {
		content: "";
		width: 2rem;
		height: 0.25rem;
		background-color: currentColor;
		border-radius: 0.25rem;
		transition: all 300ms ease-in-out;
		transform-origin: center;
	}
	.cross::after {
		transform: rotate(45deg);
		translate: 0 calc(-1 * (0.25rem + 0.375rem));
	}
	.cross::before {
		transform: rotate(-45deg);
		translate: 0 calc((0.25rem + 0.375rem));
	}
	.cross > div {
		opacity: 0;
	}
</style>
