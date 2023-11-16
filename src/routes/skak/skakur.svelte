<script>
	// https://www.w3schools.com/graphics/canvas_clock.asp
	import { onMount } from 'svelte';

	/**
	 * @type {string}
	 */
	export let playerName;

	/**
	 * @type {boolean}
	 */
	export let start = true;

	//export let isRunning = true;

	/**
	 * @type {HTMLCanvasElement}
	 */
	let skakCanvas;

	/**
	 * @type NodeJS.Timeout}
	 */
	let timeoutId;

	onMount(() => {
		ur.init();
	});

	const ur = {
		init: function () {
			this.setRadius((0.9 * skakCanvas.height) / 2);
			console.log(this.radius);

			let ct = skakCanvas.getContext('2d');
			ct?.translate(this.radius, this.radius);

			//this.drawClock();
			console.log(playerName + ' kalder init med start=' + start);
			if (start) {
				timeoutId = setInterval(this.drawClock, 4000);
				console.log(timeoutId);
			}
		},
		stopUret: function () {
			console.log(timeoutId);
			clearInterval(/*** @type number | NodeJS.Timeout} */ timeoutId);
			//timeOut = {};
		},
		startUret: function () {
			timeoutId = setInterval(this.drawClock, 4000);
			console.log(`Ny timeoutId=` + timeoutId);
		},
		radius: 0,
		setRadius: function (/** @type {number} */ radius) {
			this.radius = radius;
		},
		drawClock: function () {
			console.log({ playerName }.playerName + ' draw med timeoutId=' + timeoutId);
			//let ct = skakCanvas.getContext('2d');
			//drawFace(this.ctx, radius);
			//drawNumbers(ctx, radius);
			//drawTime(ctx, radius, new Date());
		}
	};

	export function stopUr() {
		console.log({ playerName }.playerName + ' stopper uret med timeotId=' + timeoutId);
		ur.stopUret();
	}

	export function startUr() {
		console.log({ playerName }.playerName + ' stopper uret med timeotId=' + timeoutId);
		ur.startUret();
	}
</script>

<h1>Spiller: {playerName}</h1>
<span>
	<canvas bind:this={skakCanvas} width="400" height="400" style="background-color:#333" />
</span>

<style>
</style>
