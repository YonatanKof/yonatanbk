<template>
	<div class="container">
		<div v-for="index in 36" class="box" :style="{ '--delay': `${index * 40}ms` }"></div>
	</div>
</template>
<style scoped>
@keyframes move-it {
	0% {
		inset-inline-start: -110%;
		inset-block-start: -110%;
	}
	100% {
		inset-inline-start: 60%;
		inset-block-start: 60%;
	}
}
.container {
	--size: var(--shape-size);
	width: var(--size);
	height: var(--size);
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(6, 1fr);
	gap: var(--space-2xs);
}
.box {
	min-width: 100%;
	min-height: 100%;
	background-color: var(--color-sys-invert-slight);
	transition: background-color 0.25s ease-in-out;
	position: relative;
	overflow: hidden;
	&:hover {
		background-color: var(--color-sys-invert-main);
	}
	&::after {
		content: '';
		display: block;
		position: absolute;
		min-width: 150%;
		min-height: 150%;
		background-color: var(--color-brand-red-main);
		border-radius: 100%;
		inset-inline-start: -110%;
		inset-block-start: -110%;
		animation: move-it 3.2s ease-in-out infinite alternate;
		animation-delay: var(--delay);
	}
}
</style>
