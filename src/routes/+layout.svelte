<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import LayoutWrapper from '$lib/components/wrappers/LayoutWrapper.svelte';
	import { onMount } from 'svelte';
	import { notAtTheVeryTop, updateScroll } from '$lib/ts/stores/scroll';

	onMount(() => {
    window.addEventListener('scroll', updateScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  });
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
</svelte:head>

<LayoutWrapper>
	<Navbar />
	<main>
		{@render children()}
	</main>
</LayoutWrapper>
