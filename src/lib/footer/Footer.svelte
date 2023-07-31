<script>
	import Instagram from "$lib/icons/Instagram.svelte";
	import Facebook from "$lib/icons/Facebook.svelte";
	import LinkedIn from "$lib/icons/LinkedIn.svelte";
	import Email from "$lib/icons/Email.svelte";
	import Twitter from "$lib/icons/Twitter.svelte";
</script>

<footer
	class="bg-primary w-full p-8 h-footer text-center items-center flex flex-col bg-gradient-conic"
>
	<h1 class="text-r5xl font-bold brightness-90">ASBBS</h1>
	<!-- TODO: better font -->
	<h2 class="text-r3xl brightness-75">
		American Society of Business and Behavioral Sciences
	</h2>
	<ul class="flex flex-row gap-12 my-4 fill-current">
		<li>
			<a
				href="https://instagram.com/asbbs_Mondal"
				class="hover:fill-rose-500"
			>
				<Instagram />
			</a>
		</li>
		<li>
			<a
				href="https://www.facebook.com/pages/American-Society-of-Business-and-Behavioral-Sciences-ASBBS/1442323816069697?ref=aymt_homepage_panel"
				class="hover:fill-blue-600"
			>
				<Facebook />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/company/asbbs"
				class="hover:fill-blue-400"
			>
				<LinkedIn />
			</a>
		</li>
		<li>
			<a href="mailto:mondal@asbbs.org"><Email /></a>
		</li>
		<li>
			<a
				href="https://twitter.com/ASBBS_Mondal"
				class="hover:fill-sky-400"><Twitter /></a
			>
		</li>
	</ul>
</footer>

<style lang="postcss">
	li {
		@apply h-12;
	}
	a {
		@apply hover:no-underline brightness-50 hover:brightness-100;
	}
</style>
