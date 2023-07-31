<script lang="ts">
	export let href: string;

	const Variants = {
		"NORMAL": "bg-zinc-700",
		"ACCENT": "bg-accent",
		"PRIMARY": "bg-primary",
		"SECONDARY": "bg-secondary",
	} as const;

	export let variant: keyof typeof Variants = "NORMAL";

	const color = Variants[variant];
</script>

<a {href} class={`p-4 w-fit rounded-md ${color} whitespace-nowrap`}>
	<slot />
</a>
