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
			console.log(radius);

			let ct = skakCanvas.getContext('2d');
			if (ct !== null) {
				ct.translate(radius, radius);
				context = ct;
				radius = radius * 0.90
			}
			this.drawClock();
		},
		drawClock: function () {
			console.log({ playerName }.playerName + ' drawClock med timeoutId=' + timeoutId);
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
			console.log(timeoutId);
			clearInterval(/*** @type number | NodeJS.Timeout} */ timeoutId);
		},
		startUret: function () {
			clearInterval(/*** @type number | NodeJS.Timeout} */ timeoutId);
			timeoutId = setInterval(() => ur.drawClock(), 1000);
			console.log(`Ny timeoutId=` + timeoutId);
		}
	};

	export function stopUr() {
		console.log({ playerName }.playerName + ' stopper uret med timeoutId=' + timeoutId);
		ur.stopUret();
	}

	export function startUr() {
		console.log({ playerName }.playerName + ' stopper uret med timeotId=' + timeoutId);
		ur.startUret();
		console.log(`Ny timeoutId=` + timeoutId);
	}
</script>

<style>
</style>

<h1>Spiller: {playerName}</h1>
<canvas bind:this={skakCanvas} width="400" height="400" style="background-color:#333" />

