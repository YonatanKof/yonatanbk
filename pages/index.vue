<template>
	<div class="main-layout cursor-default">
		<LayoutHeader />
		<main>
			<SectionYonatanBenKnaan />
			<SectionFullStack />
			<SectionWork />
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
	overflow-y: scroll;
	scroll-behavior: smooth;
	margin-block-start: calc(var(--header-height) * -1);
}
</style>
