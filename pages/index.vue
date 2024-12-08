<template>
	<div class="main-layout">
		<LayoutHeader />
		<main>
			<SectionYonatanBenKnaan />
			<SectionWork />
			<SectionExtra />
			<SectionConnect />
			<LayoutFooter />
		</main>
	</div>
</template>

<style scoped>
.main-layout {
	height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr;
}
main {
	overflow: auto;
	scroll-snap-type: y mandatory;
	overscroll-behavior-x: contain;
	overflow-y: scroll;
	scroll-behavior: smooth;
	margin-block-start: calc(var(--header-height) * -1);
}
</style>
