<script>
	import Skakur from './skakur.svelte';

	/** * @type {Skakur}  */
	let skakur1;
	/** * @type {Skakur}  */
	let skakur2;

	let playerName1 = '1';
	let playerName2 = '2';
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


<div class="ur">
		<button
			on:click={() => {
				skakur1.stopUr();
				skakur2.startUr();
			}}
		>
			Stop {playerName1} og start {playerName2}!
		</button>

	<Skakur bind:this={skakur1} playerName={playerName1} />

	<button
		on:click={() => {
			skakur2.stopUr();
			skakur1.startUr();
		}}
	>
		Stop {playerName2} og start {playerName1}!
	</button>

	<Skakur bind:this={skakur2} playerName={playerName2} />
</div>

<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>
<p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p><p>hr wh iowoifoif woi foi foi  åoi fon s oi oi oi  fwn</p>


<style>
	.versus h1 {
		color: aqua;
		display: inline;
		/* position: sticky; */
	}

	.ur {
		color: red;
		display: inline-flex; 

	}
</style>
