<script lang="ts" setup>
const { activeSection } = useActiveSection();
const navLinks = ref<HTMLAnchorElement[]>([]);
const sliderPosition = ref({});

const formatText = (kebabText: string) => {
	return kebabText
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

// Function to update slider position
const updateSliderPosition = (section: string) => {
	const activeLink = navLinks.value.find((link) => link.dataset.section === section);

	if (activeLink) {
		const linkRect = activeLink.getBoundingClientRect();
		const navRect = activeLink.parentElement?.getBoundingClientRect();

		if (navRect) {
			sliderPosition.value = {
				width: `calc(0.5rem + ${linkRect.width}px`,
				transform: `translateX(calc(${linkRect.left - navRect.left }px - 0.25rem))`,
				backgroundColor: `var(--color-brand-${getColorForSection(section)})`,
			};
		}
	}
};

// Helper function to get color based on section
const getColorForSection = (section: string) => {
	const colors = {
		'yonatan-ben-knaan': 'blue-main',
		'full-stack': 'red-main',
		work: 'green-main',
		connect: 'orange-main',
	};
	return colors[section as keyof typeof colors];
};

// Set initial position
onMounted(() => {
	nextTick(() => {
		updateSliderPosition(activeSection.value);
	});
});

// Watch for changes
watch(activeSection, (newSection) => {
	updateSliderPosition(newSection);
});
</script>

<template>
	<header>
		<nav>
			<div class="slider" :style="sliderPosition"></div>
			<a
				v-for="section in ['yonatan-ben-knaan', 'full-stack', 'work', 'connect']"
				:key="section"
				:href="`#${section}`"
				:class="{ active: activeSection === section }"
				:data-section="section"
				ref="navLinks"
			>
				{{ formatText(section) }}
			</a>
		</nav>
		<OpenForWork />
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

span {
	display: inline-block;
	height: var(--space-xs);
	width: var(--space-xs);
	border-radius: 100%;
	background-color: var(--color-brand-green-main);
}

a {
	color: var(--color-sys-slight);
	position: relative;
}

nav {
	position: relative;
}

.slider {
	position: absolute;
	inset-block-end: var(--space-m);
	height: var(--space-3xs);
	border-radius: var(--border-radius-xs);
	transition: all 0.3s ease;
}

a.active {
	color: var(--color-sys-main);
}
</style>
