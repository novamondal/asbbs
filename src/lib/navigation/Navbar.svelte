<script lang="ts">
	import NavLink from "./NavLink.svelte";
	import HoverMenu from "../HoverMenu.svelte";
	import MobileNav from "./MobileNav.svelte";
</script>

<header
	class="w-screen flex flex-row justify-between p-4 h-header items-center relative"
>
	<!--TODO!!-->
	<a href="/" class="w-fit">ASBBS LOGO</a>
	<!--TODO!!-->
	<nav
		class="hidden md:flex flex-row justify-end text-center gap-responsive animate-fadeInUp-300"
	>
		<HoverMenu>
			<NavLink href="/call-for-paper" variant="ACCENT" slot="trigger">
				Call for Paper ⌄
			</NavLink>
			<li>
				<a href="/call-for-paper/national">National</a>
			</li>
			<li>
				<a href="/call-for-paper/international">International</a>
			</li>
		</HoverMenu>
		<HoverMenu>
			<NavLink href="/journals" slot="trigger">Journals ⌄</NavLink>
			<li>
				<a href="/journals/business-behavioral-science">
					Behavioral Science
				</a>
			</li>
			<li>
				<a href="/journals/accounting">Accounting</a>
			</li>
			<li>
				<a href="/journals/educational-leadership">
					Educational Leadership
				</a>
			</li>
			<li>
				<a href="/journal/ejournal">e-Journal</a>
			</li>
		</HoverMenu>
		<NavLink href="/fellows">Fellows</NavLink>
		<NavLink href="/program">Program</NavLink>
		<NavLink href="/proceedings">Proceedings</NavLink>
	</nav>
	<MobileNav />
</header>

<style>
	.gap-responsive {
		gap: clamp(0.5rem, 2vw, 2rem);
	}
	nav * {
		height: fit-content;
	}
</style>
