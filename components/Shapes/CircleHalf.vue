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
	initial-value: 1;
	inherits: true;
}
.shape-xx {
	--em: 1em;
	--size: var(--shape-size);
	width: var(--size);
	height: var(--size);
	position: relative;
	clip-path: circle(50%);
	overflow: hidden;
	animation: height 5s ease-in-out infinite alternate;
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
	gap: calc(var(--line-height) * var(--em));
}
#s2 {
	gap: calc(calc(var(--line-height) / 2) * var(--em));
}
.line-1,
.line-2 {
	
	width: var(--size);
	background-color: var(--color-sys-invert-slight);
	transition: background-color 0.25s ease-in-out;
}
.line-1 {
	height: calc(calc(var(--line-height) * 2) * var(--em));
}
.line-2 {
	height: calc(var(--line-height) * var(--em));
}
@keyframes height {
	0%,
	5% {
		--line-height: 1;
	}
	95%,
	100% {
		--line-height: 2;
	}
}
</style>
