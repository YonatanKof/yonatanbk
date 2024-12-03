<script setup lang="ts"></script>

<template>
	<header>
		<nav>
			<Typography><a href="#yonatan-kof">Yonatan Kof</a></Typography>
			<Typography><a href="#work">Work</a></Typography>
			<Typography><a href="#extra">Extra</a></Typography>
			<Typography><a href="#connect">Connect</a></Typography>
		</nav>
		<div>
			<span></span>
			<Typography>Open For Work</Typography>
		</div>
	</header>
</template>

<style scoped>
header {
	display: flex;
	align-content: center;
	justify-content: space-between;
	padding-inline: var(--space-m);
	background-color: var(--color-sys-invert-dim);
	backdrop-filter: blur(1px);
	height: var(--header-height);
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
