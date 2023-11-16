<script>
	import Skakur from './skakur.svelte';

	/**
	 * @type {Skakur}
	 */
	let skakur1;
	/**
	 * @type {Skakur}
	 */
	let skakur2;

	let playerName1 = 'Jesper';
	let playerName2 = 'Kurt';
</script>

<h1>Skakur</h1>
<span>
	<Skakur bind:this={skakur1} start={true} playerName={playerName1} />
	<button
		on:click={() => {
			skakur1.stopUr();
			skakur2.startUr();
		}}
	>
		Stop {playerName1} og start {playerName2}!
	</button>

	<Skakur bind:this={skakur2} start={false} playerName={playerName2} />
	<button
		on:click={() => {
			skakur2.startUr();
			skakur1.stopUr();
		}}
	>
		Stop {playerName2} og start {playerName1}!
	</button>
</span>
