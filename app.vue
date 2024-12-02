<template>
	<div class="main-layout">
		<LayoutHeader />
    <!-- <h1>Hi yo</h1> -->
		<main>
			<SectionYonatanKof />
			<SectionWork />
			<SectionExtra />
			<SectionConnect />
		</main>
		<LayoutFooter />
	</div>
</template>

<style scoped>
.main-layout {
  /* width: 100%; */
	height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
}
main {
  overflow: auto;
	scroll-snap-type: y mandatory;
	/* scroll-snap-type: both mandatory; */
	overscroll-behavior-x: contain;
}
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.14s, filter 0.07s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(0.25rem);
}
.pop-enter-active,
.pop-leave-active {
	transition: opacity 0.4s, transform 0.4s;
}
.pop-enter-from {
	opacity: 0;
	transform: translateX(calc(var(--space-8xl) * -1));
}
.pop-leave-to {
	opacity: 0;
	transform: translateX(var(--space-8xl));
}
</style>
