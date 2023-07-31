<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/navigation/Navbar.svelte";
	import Footer from "$lib/footer/Footer.svelte";
</script>

<Navbar />
<main class="px-4">
	<slot />
</main>
<Footer />
