<script lang="ts">
	import { notAtTheVeryTop } from '$lib/ts/stores/scroll';
</script>

<nav
	class="sticky top-0 rounded-b-2xl transition-all
       {$notAtTheVeryTop
		? 'bg-zinc-900 shadow-lg border-b-2 border-zinc-700/50'
		: 'bg-zinc-900/0 border-transparent'}"
>
	<div class="flex items-center justify-between gap-8 px-3 py-4">
		<div class="flex flex-1">
			<a href="/">
				<h1 class="font-[Nunito] text-5xl font-bold text-white/90">Disc DB</h1>
			</a>
		</div>
		<div class="flex gap-4">
			<a class="text-white/75" href="/discs">Discs</a>
			<a class="text-white/75" href="/empty">Dummy</a>
		</div>
		<div class="flex flex-1 justify-end">Searchbar</div>
	</div>
</nav>
