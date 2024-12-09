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
	images: {
		type: [String, Array],
		default: null,
	},
});

const emit = defineEmits(['complete', 'select']);
const isActive = ref(props.active);
const isPaused = ref(false);
const isMobileView = ref(false);
let timer = null;
const shouldShow = ref(false);

const normalizedImages = computed(() => {
	if (!props.images) return [];
	return Array.isArray(props.images) ? props.images : [props.images];
});

watch(
	() => props.active,
	(newValue) => {
		isActive.value = newValue;
		if (newValue) {
			shouldShow.value = true;
			if (!isPaused.value) {
				startTimer();
			}
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

function handleTransitionEnd(event) {
	if (!isActive.value && event.propertyName === 'opacity') {
		shouldShow.value = false;
	}
}

function updateViewport() {
	isMobileView.value = window.innerWidth < 640;
}

onMounted(() => {
	updateViewport();
	window.addEventListener('resize', updateViewport);
	if (props.active) {
		shouldShow.value = true;
		startTimer();
	}
});

onUnmounted(() => {
	clearTimeout(timer);
	window.removeEventListener('resize', updateViewport);
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
		<AccordionProgressBar :active="isActive" :duration="duration" :isPaused="isPaused" />
		<!-- Place this v-if below in the subTitle, if you want is out of the DOM-->
		<!-- v-if="shouldShow" -->
		<Text variant="large-text" class="subtitle" :class="{ visible: isActive }" @transitionend="handleTransitionEnd">
			{{ subTitle }}
		</Text>

		<!-- Mobile Image -->
		<div v-if="isMobileView && images" class="mobile-image-container">
			<template v-for="(imageUrl, idx) in normalizedImages" :key="`${index}-${idx}`">
				<img :src="imageUrl" :alt="`Image for ${title}`" class="mobile-image" :class="{ 'fade-in': isActive }" />
			</template>
		</div>
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

.mobile-image-container {
	margin: 1rem 0;
	display: flex;
	gap: 0.5rem;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.mobile-image {
	width: 100%;
	aspect-ratio: 16/9;
	object-fit: cover;
	border-radius: 8px;
	scroll-snap-align: start;
	transform: scale(1.1);
	transition: all 0.3s ease;
}

.mobile-image.fade-in {
	transform: scale(1);
}

.mobile-image-container:has(.mobile-image.fade-in) {
	opacity: 1;
}

@media (min-width: 640px) {
	.mobile-image-container {
		display: none;
	}
}
</style>
