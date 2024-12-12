<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
		required: true,
	},
	active: {
		type: Boolean,
		default: false,
	},
	duration: {
		type: Number,
		default: 2000,
	},
	index: {
		type: Number,
		required: true,
	},
	components: {
		type: [Object, Array],
		default: null,
	},
});

const emit = defineEmits(['complete', 'select']);
const isActive = ref(props.active);
const isPaused = ref(false);
const isMobileView = ref(false);
let timer = null;
// const shouldShow = ref(false);

const normalizedImages = computed(() => {
	if (!props.images) return [];
	return Array.isArray(props.images) ? props.images : [props.images];
});

watch(
	() => props.active,
	(newValue) => {
		isActive.value = newValue;
		if (newValue && !isPaused.value) {
			startTimer();
		} else {
			clearTimeout(timer);
		}
	}
);

function startTimer() {
	clearTimeout(timer);
	timer = setTimeout(() => {
		isActive.value = false;
		emit('complete');
	}, props.duration);
}

function handleMouseEnter() {
	if (isActive.value) {
		isPaused.value = true;
		clearTimeout(timer);
	}
}

function handleMouseLeave() {
	if (isActive.value && isPaused.value) {
		isPaused.value = false;
		startTimer();
	}
}

function handleClick() {
	if (!isActive.value) {
		emit('select', props.index);
	}
}

// function handleTransitionEnd(event) {
// 	if (!isActive.value && event.propertyName === 'opacity') {
// 		shouldShow.value = false;
// 	}
// }

function updateViewport() {
	isMobileView.value = window.innerWidth < 544;
}

onMounted(() => {
	updateViewport();
	window.addEventListener('resize', updateViewport);
	if (props.active) {
		// shouldShow.value = true;
		startTimer();
	}
});

onUnmounted(() => {
	clearTimeout(timer);
	window.removeEventListener('resize', updateViewport);
});

const normalizedComponents = computed(() => {
	if (!props.components) return [];
	return Array.isArray(props.components) ? props.components : [props.components];
});
</script>

<template>
	<div
		class="content-toggle"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@touchstart.prevent="handleMouseEnter"
		@touchend.prevent="handleMouseLeave"
		@click="handleClick"
	>
		<Text tag="h3" variant="secondary-title" :class="{ xxx: !isActive }">{{ title }}</Text>
		<AccordionProgressBar :active="isActive" :duration="duration" :isPaused="isPaused"  />
		<Text variant="large-text" class="subtitle" :class="{ visible: isActive }" v-show="isActive" >
			{{ subTitle }}
		</Text>

		<!-- Mobile Component -->
		<!-- <div v-if="isMobileView && components" class="mobile-component-container"  v-show="isActive">
			<template v-for="(component, idx) in normalizedComponents" :key="`${index}-${idx}`">
				<component :is="component" class="mobile-component" :class="{ 'fade-in': isActive }"  />
			</template>
		</div> -->
	</div>
</template>

<style scoped>
.content-toggle {
	width: 100%;
	position: relative;
	cursor: pointer;
	transition: background-color 0.3s ease;
	display: flex;
	flex-direction: column;
	gap: var(--space-s);
}

.xxx {
	color: var(--color-sys-invert-dim);
	transition: all 0.5s ease;
}

.subtitle {
	opacity: 0;
	height: 0;
	transform: translateY(var(--space-xs));
	transition: transform 0.25s ease-out, opacity 0.25s ease-out;
	margin-block-end: 0;
}

.subtitle.visible {
	opacity: 1;
	height: max-content;
	transform: translateY(0);
	margin-block-end: var(--space-m);
}

.mobile-component-container {
	margin: 1rem 0;
	display: flex;
	gap: 0.5rem;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.mobile-component {
	width: 100%;
	scroll-snap-align: start;
	transform: scale(1.1);
	transition: all 0.3s ease;
}

.mobile-component.fade-in {
	transform: scale(1);
}

.mobile-component-container:has(.mobile-component.fade-in) {
	opacity: 1;
}

@media (min-width: 544px) {
	.mobile-component-container {
		display: none;
	}
}
</style>
