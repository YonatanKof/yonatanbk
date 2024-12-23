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
		<OpenForWork class="show" />
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
.show {
	display: none;
	position: absolute;
	inset-inline-end: var(--space-s);
	inset-block-end: var(--space-s);
	@media (width < 520px) {
		display: inline;
	}
}
</style>
