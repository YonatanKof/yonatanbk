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
	initial-value: 1;
	inherits: true;
}
.shape-zz {
	--em: 1rem;
	--size: var(--shape-size);
	--ls-plus: calc(var(--ls) * var(--em));

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
		transparent 0 calc(var(--ls-plus) * 2),
		var(--color-sys-invert-slight) calc(var(--ls-plus) * 2) calc(var(--ls-plus) * 4)
	);
}
.line-2 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0 calc(var(--ls-plus) * 1),
		var(--color-sys-invert-slight) calc(var(--ls-plus) * 1) calc(var(--ls-plus) * 2)
	);
}
.line-3 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0 calc(var(--ls-plus) / 2),
		var(--color-sys-invert-slight) calc(var(--ls-plus) / 2) calc(var(--ls-plus) * 1)
	);
}
.line-4 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0 calc(var(--ls-plus) / 4),
		var(--color-sys-invert-slight) calc(var(--ls-plus) / 4) calc(var(--ls-plus) / 2)
	);
}
.line-5 {
	background-image: repeating-linear-gradient(
		45deg,
		transparent 0 calc(var(--ls-plus) / 8),
		var(--color-sys-invert-slight) calc(var(--ls-plus) / 8) calc(var(--ls-plus) / 4)
	);
}
@keyframes height {
	0%,
	5% {
		--ls: 1;
	}
	95%,
	100% {
		--ls: 1.5;
	}
}
</style>
