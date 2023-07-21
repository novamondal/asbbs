<script lang="ts">
	export let href: string;
	export let accent = false;
</script>

<a
	{href}
	class={`p-4 w-fit rounded-md ${
		accent ? "bg-rose-400" : "bg-zinc-700"
	} whitespace-nowrap`}
>
	<slot />
</a>
