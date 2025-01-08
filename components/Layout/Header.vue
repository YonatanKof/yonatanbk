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
				transform: `translateX(calc(${linkRect.left - navRect.left}px - 0.25rem))`,
				backgroundColor: `var(--color-brand-${getColorForSection(section)})`,
			};
		}
	}
};

// Helper function to get color based on section
const getColorForSection = (section: string) => {
	const colors = {
		hello: 'blue-main',
		design: 'red-main',
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
	<header class="cool-doted-bg">
		<span>
			<nav>
				<div class="slider" :style="sliderPosition"></div>
				<a
					v-for="section in ['hello', 'design', 'work', 'connect']"
					:key="section"
					:href="`#${section}`"
					class="body body-small text-bold"
					:class="{ active: activeSection === section }"
					:data-section="section"
					ref="navLinks"
				>
					{{ formatText(section) }}
				</a>
			</nav>
			<OpenForWork class="hide" />
		</span>
	</header>
</template>

<style scoped>
header {
	border-block-end: 1px solid var(--color-brand-red-dim);
	z-index: 1000;
	height: var(--header-height);
	padding-inline-start: calc(max(var(--space-l), env(safe-area-inset-left)));
	padding-inline-end: calc(max(var(--space-l), env(safe-area-inset-right)));
	background-color: var(--color-sys-invert-slight);
	backdrop-filter: blur(4px);
	display: flex;
	justify-content: center;
	& > span {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media (720px >= width) {
		padding-inline-start: calc(max(var(--space-m), env(safe-area-inset-left)));
		padding-inline-end: calc(max(var(--space-m), env(safe-area-inset-right)));
	}
}

nav,
div {
	display: flex;
	align-items: center;
	gap: var(--space-m);
}

a {
	color: var(--color-sys-dim);
	position: relative;
	&:hover {
		border-block-end-color: transparent;
	}
}

nav {
	position: relative;
}

.slider {
	position: absolute;
	inset-block-start: var(--space-m);
	height: var(--space-3xs);
	border-radius: var(--border-radius-xs);
	transition: all 0.3s ease;
}

a.active {
	color: var(--color-sys-main);
}

.hide {
	visibility: visible;
	@media (width < 520px) {
		visibility: hidden;
		display: none;
	}
}
</style>
