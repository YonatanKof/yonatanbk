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
		<span>
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
		</span>
	</header>
</template>

<style scoped>
header {
	z-index: 1000;
	height: var(--header-height);
	padding-inline: var(--space-m);
	background-color: var(--color-sys-invert-slight);
	backdrop-filter: blur(4px);
	display: flex;
	justify-content: center;
	& > span {
		max-width: var(--display-width-lg);
		width: 100%;
		display: flex;
		align-content: center;
		justify-content: space-between;
	}
}

nav,
div {
	display: flex;
	align-items: center;
	gap: var(--space-m);
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
