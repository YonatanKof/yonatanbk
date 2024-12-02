<script setup lang="ts"></script>

<template>
	<header>
		<nav>
			<p>Link 1</p>
			<p>Link 2</p>
			<p>Link 3</p>
			<p>Link 4</p>
		</nav>
		<div>
			<span></span>
			<p>Open For Work</p>
		</div>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-content: center;
	justify-content: space-between;
	padding: var(--space-m);
	background-color: var(--color-sys-invert-dim);
	backdrop-filter: blur(1px);
}
nav,
div {
	display: flex;
	align-items: center;
	gap: var(--space-m);
}
div {
	gap: var(--space-xs);
}
span {
	display: inline-block;
	height: var(--space-xs);
	width: var(--space-xs);
	border-radius: 100%;
	background-color: green;
}
</style>
