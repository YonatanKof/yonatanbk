<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$pageMetaTags();
</script>
<template>
	<div class="main-layout cursor-default">
		<LayoutHeader />
		<main>
			<SectionHello />
			<SectionDesign />
			<SectionWork />
			<SectionConnect />
			<LayoutFooter />
		</main>
		<OpenForWork class="show" />
	</div>
</template>

<style scoped>
.main-layout {
	height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr;
	-webkit-overflow-scrolling: touch; /* Add for iOS momentum scrolling */
}

main {
	overflow-y: scroll;
	scroll-behavior: smooth;
	margin-block-start: calc(var(--header-height) * -1);
	/* Add these for better iOS handling */
	-webkit-overflow-scrolling: touch;
	position: relative;
	z-index: 1;
}
.show {
	visibility: hidden;
	position: absolute;
	inset-inline-end: var(--space-s);
	inset-block-end: var(--space-s);
	z-index: 1000;
	@media (width < 520px) {
		visibility: visible;
	}
}
</style>
