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
function handleTouchStart(event) {
	event.preventDefault(); // Remove this line
	if (isActive.value) {
		isPaused.value = true;
		clearTimeout(timer);
	}
}

function handleTouchEnd(event) {
	event.preventDefault(); // Remove this line
	if (isActive.value && isPaused.value) {
		isPaused.value = false;
		startTimer();
	}
	handleClick(); // Add click handling on touch end
}
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
		:class="{ active: isActive }"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		@click="handleClick"
	>
		<span :class="{ 'click-it': !isActive }" class="item-title">
			<div class="sign-plus"></div>
			<Text tag="h3" variant="secondary-title" :class="{ 'dim-it': !isActive }">{{ title }}</Text>
		</span>
		<span class="this-spacing">
			<AccordionProgressBar :active="isActive" :duration="duration" :isPaused="isPaused" />
			<Text variant="body-medium" class="subtitle" :class="{ visible: isActive }" v-show="isActive">
				{{ subTitle }}
			</Text>
		</span>

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
	/* &:hover {
		cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABLSURBVHgB7ZM5CgAgDASz4vPUx6r/i0fhgVdhJy4kEGaZLqAapjE4cZG2MypDZi7TZscFXeYLvuARgWwPANvyjBdB/LgOaOu79ooH6GUestWY8A0AAAAASUVORK5CYII=')
				2 2,
			auto;
	} */
}

/* .click-it {
	&:hover {
		cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBxZMBCoAgDEW30fGqw1b3WzVqLWEyFfGBMNT/mMIQPhj+IAQgG2ZmWSXQvs4armHKnEWMSG7aPMerb1xBEK4WvF20dtBJYD/Jq7OC5g7GCBBDswPpfRFc86Cb0aWeR1A8Sct2SPYEmysyuVewiKoAAAAASUVORK5CYII=')
				2 2,
			auto;
	}
} */
.dim-it {
	color: var(--color-sys-invert-slight);
	font-variation-settings: 'wght' 500, 'wdth' 100, 'opsz' 12;
	transition: all 0.5s ease;
	&:hover {
		font-variation-settings: 'wght' 700, 'wdth' 100, 'opsz' 12;
		color: var(--color-sys-invert-main);
	}
}
.this-spacing {
	padding-inline-start: calc(var(--space-s) + var(--space-xs));
	display: flex;
	flex-direction: column;
	gap: var(--space-s);
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
.item-title {
	display: flex;
	align-items: center;
	gap: var(--space-xs);
}
.sign-plus {
	width: var(--space-s);
	height: var(--space-s);
	background-color: var(--color-sys-invert-dim);
	transition: clip-path 0.5s ease;
	clip-path: polygon(
		0% 40%,
		40% 40%,
		40% 0%,
		60% 0%,
		60% 40%,
		100% 40%,
		100% 60%,
		60% 60%,
		60% 100%,
		40% 100%,
		40% 60%,
		0% 60%
	);
}
.content-toggle.active .sign-plus {
	transition: clip-path 0.5s ease;
	background-color: var(--color-sys-invert-main);
	/* this is the Minus sign*/
	/* It has redundant points top the transition from Plus can work*/
	clip-path: polygon(
		0% 40%,
		40% 40%,
		40% 40%,
		60% 40%,
		60% 40%,
		100% 40%,
		100% 60%,
		60% 60%,
		60% 60%,
		40% 60%,
		40% 60%,
		0% 60%
	);
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

@media (min-width: 624px) {
	.mobile-component-container {
		display: none;
	}
}
</style>
