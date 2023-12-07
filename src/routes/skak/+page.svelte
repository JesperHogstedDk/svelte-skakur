<script>
	import Skakur from './skakur.svelte';

	/** * @type {Skakur}  */
	let skakur1;
	/** * @type {Skakur}  */
	let skakur2;

	let playerName1 = 'Hvid spiller';
	let playerName2 = 'Sort spiller';
</script>

<h1>Skakur</h1>
<p>
	<label
		>Hvid's navn:
		<input bind:value={playerName1} placeholder="skriv hvid spiller's navn her" />
	</label>
	<label
		>Sort's navn:
		<input bind:value={playerName2} placeholder="skriv sort spiller's navn her" />
	</label>
</p>

<div class="versus">
	<h1>{playerName1}</h1>
	<span>versus</span>
	<h1>{playerName2}</h1>
</div>

<div class="outer">
	<div class="ur">
		<button class="nulstil" on:click={() => {skakur1.nulstil();skakur2.nulstil();}} >Nulstil</button>
		<Skakur bind:this={skakur1} playerName={playerName1} />
		<Skakur bind:this={skakur2} playerName={playerName2} />
		<div>
			<button
				class="button1"
				on:click={() => {
					skakur1.stopUr();
					skakur2.startUr();
				}}
			>
				Stop <strong>{playerName1}</strong> og start {playerName2}!
			</button>
		</div>
		<div>
			<button
				class="button2"
				on:click={() => {
					skakur2.stopUr();
					skakur1.startUr();
				}}
			>
				Stop <strong>{playerName2}</strong> og start {playerName1}!
			</button>
		</div>
	</div>
</div>

<p>Her kommer der et brædt</p>

<style>
	.versus h1 {
		color: aqua;
		display: inline;
		/* position: sticky; */
	}

	.outer {
		padding: 10px;
		background-color: chartreuse;
		border: 1em;
		color: aqua;
		display: inline-block;
	}

	.ur {
		color: red;
		border-color: blueviolet;
		/* border-spacing: 10rem; */
		/* display: inline-block; */
	}

	.nulstil {
		position: relative;
		left: 5em;
		margin-bottom: 1em;
		width: 70%;
	}

	.button1 {
		position: relative;
		top: 1em;
		left: 2em;
		height: 2.8em;
		max-width: 14em;
		overflow: hidden;
	}
	.button2 {
		position: relative;
		left: 23em;
		bottom: 2em;
		height: 2.8em;
		max-width: 14em;
		overflow: hidden;
	}
</style>
