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
				:data-section="section"
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
a {
	color: var(--color-sys-slight);
	position: relative;
}
div p {
	color: var(--color-sys-dim);
}
.active {
	color: var(--color-sys-main);
}

.active::after {
	content: '';
	position: absolute;
	inset-block-end: calc(var(--space-3xs) * -1);
	inset-inline-start: 0;
	width: 100%;
	height: var(--space-3xs);
	transition: background-color 1s ease-in;
}

/* Different colors for each section */
a[data-section='yonatan-kof'].active::after {
	background-color: var(--color-brand-blue);
}

a[data-section='work'].active::after {
	background-color: var(--color-brand-red-main);
}

a[data-section='extra'].active::after {
	background-color: var(--color-brand-green);
}

a[data-section='connect'].active::after {
	background-color: var(--color-brand-orange);
}

/* Optional: match text color with underline */
/* a[data-section='yonatan-kof'].active {
	color: var(--color-brand-blue);
}

a[data-section='work'].active {
	color: var(--color-brand-red);
}

a[data-section='extra'].active {
	color: var(--color-brand-green);
}

a[data-section='connect'].active {
	color: var(--color-brand-orange);
} */
</style>
