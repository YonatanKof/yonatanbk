<template>
	<div class="container">
		<div v-for="index in 25" class="box" :style="{ '--delay': `${index * 50}ms` }"></div>
	</div>
</template>
<style scoped>
@keyframes scale-it {
	0% {
		width: 100%;
		height: 100%;
	}
	100% {
		width: 165%;
		height: 165%;
	}
}
.container {
	--size: var(--shape-size);
	width: var(--size);
	height: var(--size);
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
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
		width: 100%;
		height: 100%;
		background-color: var(--color-brand-red-main);
		border-radius: 100%;
		inset-inline-start: -75%;
		inset-block-start: -75%;
		animation: scale-it 2.75s ease-in-out infinite alternate;
		animation-delay: var(--delay);
		animation-fill-mode: forwards
	}
}
</style>
