<script lang="ts" setup>
const { activeSection } = useActiveSection();

const formatText = (kebabText: string) => {
	return kebabText
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
</script>

<template>
	<header>
		<nav>
			<a
				v-for="section in ['yonatan-kof', 'work', 'extra', 'connect']"
				:key="section"
				:href="`#${section}`"
				:class="{ active: activeSection === section }"
			>
				{{ formatText(section) }}
			</a>
		</nav>
		<div>
			<span></span>
			<Text>Open For Work</Text>
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
	backdrop-filter: blur(4px);
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
div p {
	color: var(--color-sys-dim);
}
/* Add active class styling */
.active {
	color: red;
	font-weight: bold;
}
</style>
