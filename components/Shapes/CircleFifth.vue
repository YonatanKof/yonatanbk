<template>
	<div class="shape-zz">
		<div>
			<div v-for="index in 5" :class="`line line-${index}`"></div>
		</div>
	</div>
</template>
<style scoped>
@property --ls {
	syntax: '<number>';
	initial-value: 8;
	inherits: true;
}
.shape-zz {

	--px: 1px;
	--size: 640px;
	--ls-plus: calc(var(--ls) * var(--px));

	width: var(--size);
	height: var(--size);
	clip-path: circle(50%);
	position: relative;
	overflow: hidden;
	animation: height 10s ease-in-out infinite alternate;
	& > div {
		position: absolute;
		inset: 0;
		width: var(--size);
		height: var(--size);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
}

.line-1,
.line-2,
.line-3,
.line-4,
.line-5 {
	margin-block-start: -25%;
	height: 125%;
	
}
.line-1 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0,
		transparent calc(var(--ls-plus) * 16),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 16),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 32)
	);
}
.line-2 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0,
		transparent calc(var(--ls-plus) * 8),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 8),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 16)
	);
	/* background-position: 0 calc(var(--ls-plus) * 4.57); */
}
.line-3 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0,
		transparent calc(var(--ls-plus) * 4),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 4),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 8)
	);
	/* background-position: 0 calc(var(--ls-plus) * 3.675); */
}
.line-4 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0,
		transparent calc(var(--ls-plus) * 2),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 2),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 4)
	);
}
.line-5 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0,
		transparent var(--ls-plus),
		var(--color-sys-invert-dim) var(--ls-plus),
		var(--color-sys-invert-dim) calc(var(--ls-plus) * 2)
	);
	/* background-position: 0 calc(var(--ls-plus) * 4.57); */
}
@keyframes height {
	from {
		--ls: 2;
	}
	to {
		--ls: 16;
	}
}
</style>
