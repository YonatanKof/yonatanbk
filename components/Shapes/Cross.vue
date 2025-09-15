<template>
	<div></div>
</template>
<style scoped>
div {
	width: calc(var(--grid-block) * 0.5);
	height: calc(var(--grid-block) * 0.5);
	clip-path: polygon(
		0 45%,
		45% 45%,
		45% 0,
		55% 0,
		55% 45%,
		100% 45%,
		100% 55%,
		55% 55%,
		55% 100%,
		45% 100%,
		45% 55%,
		0 55%
	);
	/* background-color: var(--color-brand-red-dim); */
	background: linear-gradient(to right, var(--color-brand-red-slight), var(--color-brand-red-slight)),
    linear-gradient(to right, white, white)
    ;
	border: 1px solid white;
}
</style>
