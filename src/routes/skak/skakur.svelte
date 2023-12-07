<script>
	// https://www.w3schools.com/graphics/canvas_clock.asp
	import { onMount } from 'svelte';

	/** * @type {string} */
	export let playerName;

	/** * @type {HTMLCanvasElement}  */
	let skakCanvas;

	/** * @type {CanvasRenderingContext2D} | null */
	let context;

	/** * @type {number} */
	let radius;

	/** * @type NodeJS.Timeout} */
	let timeoutId;

	let stopped = { hour: 0, minute: 0, second: 0 };

	onMount(() => {
		ur.init();
	});

	const ur = {
		init: function () {
			radius = skakCanvas.height / 2;
			console.log(`Radius: ${radius}`);

			let ct = skakCanvas.getContext('2d');
			if (ct !== null) {
				ct.translate(radius, radius);
				context = ct;
				radius = radius * 0.9;
			}
			console.log(`Radius: ${radius}`);
			this.drawClock();
		},
		drawClock: function () {
			console.log(`${playerName} kalder drawClock med timeoutId=${timeoutId}`);
			this.drawFace();
			this.drawNumbers();
			this.drawTime();
		},
		drawFace: function () {
			if (context !== null) {
				const grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
				grad.addColorStop(0, '#333');
				grad.addColorStop(0.5, 'white');
				grad.addColorStop(1, '#333');

				context.beginPath();
				context.arc(0, 0, radius, 0, 2 * Math.PI);
				context.fillStyle = 'white';
				context.fill();

				context.strokeStyle = grad;
				context.lineWidth = radius * 0.1;
				context.stroke();

				context.beginPath();
				context.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
				context.fillStyle = '#333';
				context.fill();
			}
		},
		drawNumbers: function () {
			context.font = radius * 0.15 + 'px arial';
			context.textBaseline = 'middle';
			context.textAlign = 'center';
			for (let num = 1; num < 13; num++) {
				let ang = (num * Math.PI) / 6;
				context.rotate(ang);
				context.translate(0, -radius * 0.85);
				context.rotate(-ang);
				context.fillText(num.toString(), 0, 0);
				context.rotate(ang);
				context.translate(0, radius * 0.85);
				context.rotate(-ang);
			}
		},
		drawTime: function () {
			let hour = stopped.hour,
				minute = stopped.minute,
				second = stopped.second;
			stopped.second = stopped.second + 1;
			if (second === 60) {
				stopped.minute = stopped.minute + 1;
				stopped.second = 0;
			}
			if (minute === 60) {
				stopped.hour = stopped.hour + 1;
				stopped.minute = 0;
			}
			if (hour === 12) {
				stopped.hour = 0;
			}

			hour = hour % 12;
			hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
			this.drawHand(hour, radius * 0.5, radius * 0.07);
			//minute
			minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
			this.drawHand(minute, radius * 0.8, radius * 0.07);
			// second
			second = (second * Math.PI) / 30;
			this.drawHand(second, radius * 0.9, radius * 0.02);
		},
		drawHand: function (
			/**@type {number}*/ pos,
			/**@type {number}*/ length,
			/**@type {number}*/ width
		) {
			context.beginPath();
			context.lineWidth = width;
			context.lineCap = 'round';
			context.moveTo(0, 0);
			context.rotate(pos);
			context.lineTo(0, -length);
			context.stroke();
			context.rotate(-pos);
		},
		stopUret: function () {
			//console.log(timeoutId);
			clearInterval(/*** @type number | NodeJS.Timeout} */ timeoutId);
		},
		startUret: function () {
			if (timeoutId !== undefined) {
				clearInterval(/*** @type number | NodeJS.Timeout} */ timeoutId);
			}
			timeoutId = setInterval(() => ur.drawClock(), 1000);
			//console.log(`Ny timeoutId=` + timeoutId);
		},
		nulstil: function () {
			// console.log(`stopped=${stopped}`);
			console.log({stopped});
			this.stopUret();
			clearInterval(/*** @type number | NodeJS.Timeout} */ timeoutId);
			stopped = { hour: 0, minute: 0, second: 0 };
			console.log({stopped});
			this.drawClock()
		}
	};

	export function stopUr() {
		console.log({ playerName }.playerName + ' stopper uret med timeoutId=' + timeoutId);
		ur.stopUret();
		console.log(`Player ${playerName} Ny timeoutId=${timeoutId}`);
	}

	export function startUr() {
		console.log({ playerName }.playerName + ' stopper uret med timeoutId=' + timeoutId);
		ur.startUret();
		console.log(`Ny timeoutId=` + timeoutId);
	}

	export function nulstil() {
		console.log(`Stopper og nulstiller ${playerName}'s ur!'`);
		ur.nulstil();
	}
	//$: dispatchEvent('click', playerName);
</script>

<div class="uret">
	<div class="h1">{playerName}</div>
	<!-- <button class="right" on:click={() => ur.startUret}>START</button> -->
	<!-- <div class="right">
		<input type="radio" name="StartStop" />
		<input type="radio" name="StartStop" />
	</div> -->
	<canvas bind:this={skakCanvas} width="260" height="260" />
</div>

<style>
	.uret {
		background-color: #313;
		/* margin: 1em; */
		display: inline-block;
		/* inline-size: 260; */
		/* max-width: 270; */
		/* overflow: hidden; */
		/* position: absolute;
		right: auto;		 */
	}
	/* .right {
		position: relative;
		left: 4.8em;
	} */
	div.h1 {
		background-color: #999;
		font-size: 2em;
		text-align: center;
		max-height: 1em;
		width: 260px;
		/* max-width: 12; */
		overflow: hidden;
	}
	canvas {
		background-color: #333;
	}
</style>
