<template>
	<div class="shape-xx">
		<div>
			<span id="s1"><div v-for="index in 30" :class="`line-1 no-${index}`"></div></span>
		</div>
		<div>
			<span id="s2"><div v-for="index in 30" :class="`line-2 no-${index}`"></div></span>
		</div>
	</div>
</template>
<style scoped>
@property --line-height {
	syntax: '<number>';
	initial-value: 32;
	inherits: true;
}
.shape-xx {
	--px: 1px;
	--size: 640px;
	width: var(--size);
	height: var(--size);
	position: relative;
	clip-path: circle(50%);
	overflow: hidden;
	& > div {
		position: absolute;
		inset: 0;
		width: var(--size);
		height: var(--size);

		&:first-child {
			clip-path: polygon(0 0, 100% 100%, 0 100%);
		}

		&:last-child {
			clip-path: polygon(0 0, 100% 0, 100% 100%);
		}
	}

	& span {
		display: flex;
		flex-direction: column;
		height: max-content;
	}
}
#s1 {
	gap: calc(var(--line-height) * var(--px));
}
#s2 {
	gap: calc(calc(var(--line-height) / 2) * var(--px));
}
.line-1,
.line-2 {
	animation: height 10s ease-in-out infinite alternate;
	width: var(--size);
	background-color: var(--color-sys-invert-dim);
	transition: background-color 0.25s ease-in-out;
	&:hover {
		background-color:  var(--color-sys-invert-main);
	}
}
.line-1 {
	height: calc(calc(var(--line-height) * 2) * var(--px));
}
.line-2 {
	height: calc(var(--line-height) * var(--px));
}
@keyframes height {
	0%,
	10% {
		--line-height: 8;
	}
	90%,
	100% {
		--line-height: 64;
	}
}
</style>
