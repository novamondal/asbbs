<script lang="ts">
    import NavLink from "./NavLink.svelte";
</script>

<nav class="w-screen flex flex-row justify-between gap-8 p-4">
    <a href="/" class="w-fit">ASBBS LOGO</a>
    <!-- TODO!! -->
    <div class="hidden md:flex flex-row justify-end text-center gap-8">
        <NavLink href="/call-for-paper" accent>Call for Paper</NavLink>
        <div class="relative group flex">
            <NavLink href="/journals">Journals ⌄</NavLink>
            <div class="hidden group-hover:flex flex-col top-full w-[250%] py-2 absolute">
                <ul class="bg-zinc-700 rounded-md p-4 text-start">
                    <li>
                        <a href="/journals/business-behavioral-science">Behavioral Science</a>
                    </li>
                    <li>
                        <a href="/journals/accounting">Accounting</a>
                    </li>
                    <li>
                        <a href="/journals/educational-leadership">Educational Leadership</a>
                    </li>
                    <li>
                        <a href="/journal/ejournal">e-Journal</a>
                    </li>
                </ul>
            </div>
        </div>
        <NavLink href="/fellows">Fellows</NavLink>
        <NavLink href="/program">Program</NavLink>
        <NavLink href="/proceedings">Proceedings</NavLink>
    </div>
</nav>

<style>
    li {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>
