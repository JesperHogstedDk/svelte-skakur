<script>
	// https://www.w3schools.com/graphics/canvas_clock.asp
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLCanvasElement}
	 */
	let skakCanvas;
	
	onMount(() => {
		const context = skakCanvas.getContext('2d');
		let radius = skakCanvas.height / 2;
		if (context !==  null) {
			context.translate(radius, radius);
		}
		radius = radius * 0.9;
		drawClock();

		function drawClock() {
			drawFace(context, radius);
			drawNumbers(context, radius);
			drawTime(context, radius);
		}

		/**
		 * @param {CanvasRenderingContext2D | null} ctx
		 * @param {number} radius
		 */
		function drawFace(ctx, radius) {
			if (ctx !== null) {
				const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
				grad.addColorStop(0, '#333');
				grad.addColorStop(0.5, 'white');
				grad.addColorStop(1, '#333');

				ctx.beginPath();
				ctx.arc(0, 0, radius, 0, 2 * Math.PI);
				ctx.fillStyle = 'white';
				ctx.fill();

				ctx.strokeStyle = grad;
				ctx.lineWidth = radius * 0.1;
				ctx.stroke();

				ctx.beginPath();
				ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
				ctx.fillStyle = '#333';
				ctx.fill();
			}
		}

		/**
		 * @param {CanvasRenderingContext2D | null} ctx
		 * @param {number} radius
		 */
		function drawNumbers(ctx, radius) {
			if (ctx !== null) {
				ctx.font = radius * 0.15 + 'px arial';
				ctx.textBaseline = 'middle';
				ctx.textAlign = 'center';
				for (let num = 1; num < 13; num++) {
					let ang = (num * Math.PI) / 6;
					ctx.rotate(ang);
					ctx.translate(0, -radius * 0.85);
					ctx.rotate(-ang);
					ctx.fillText(num.toString(), 0, 0);
					ctx.rotate(ang);
					ctx.translate(0, radius * 0.85);
					ctx.rotate(-ang);
				}
			}
		}

		/**
		 * @param {CanvasRenderingContext2D | null} ctx
		 * @param {number} radius
		 */
		function drawTime(ctx, radius) {
			const now = new Date();
			let hour = now.getHours();
			let minute = now.getMinutes();
			let second = now.getSeconds();
			//hour
			hour = hour % 12;
			hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);

			if (ctx !== null) {
				drawHand(ctx, hour, radius * 0.5, radius * 0.07);
				//minute
				minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
				drawHand(ctx, minute, radius * 0.8, radius * 0.07);
				// second
				second = (second * Math.PI) / 30;
				drawHand(ctx, second, radius * 0.9, radius * 0.02);
			}
		}

		/**
		 * @param {{ beginPath: () => void; lineWidth: any; lineCap: string; moveTo: (arg0: number, arg1: number) => void; rotate: (arg0: number) => void; lineTo: (arg0: number, arg1: number) => void; stroke: () => void; }} ctx
		 * @param {number} pos
		 * @param {number} length
		 * @param {number} width
		 */
		function drawHand(ctx, pos, length, width) {
			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.lineCap = 'round';
			ctx.moveTo(0, 0);
			ctx.rotate(pos);
			ctx.lineTo(0, -length);
			ctx.stroke();
			ctx.rotate(-pos);
		}
	});

	//export let Skakur;
</script>

<span>selve uret</span>

<div>
	<canvas bind:this={skakCanvas} width="400" height="400" style="background-color:#333" />
</div>
