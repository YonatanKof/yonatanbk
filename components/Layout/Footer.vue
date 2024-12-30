<script setup lang="ts">
const yearMonth = new Date().toLocaleDateString('en-US', {
	year: 'numeric',
	month: 'short',
});
</script>

<template>
	<footer>
		<div class="torn-paper-bottom">
			<div class="wrapper">
				<hr />
				<div class="content">
					<div class="data">
						<BrandGeoKofXs />
						<div class="links">
							<nuxt-link to="https://github.com/YonatanKof/">Yonatan @ GitHub</nuxt-link>
							<nuxt-link to="https://www.linkedin.com/in/yonatankof/">Yonatan @ Linkedin</nuxt-link>
							<nuxt-link to="https://wwape.com/">Graphics Arts ({{ new Date().getFullYear() }})</nuxt-link>
							<nuxt-link to="https://digital.yonatankof.com/">Design Portfolio (2018)</nuxt-link>
						</div>
					</div>
					<Text id="info-line" text-style="text-end"
						> A website by <span class="no-brake">Yonatan Ben Knaan</span>, a full stack designer who leads design initiatives in Startups and Orgs</Text
					>
				</div>
			</div>
		</div>
		<div class="color">
			<Text text-style="color-invert text-center text-bold" variant="body-small">
				Copyright © {{ yearMonth }}・Designed & developed by <span class="no-brake">Yonatan Ben Knaan</span>
			</Text>
		</div>
	</footer>
</template>

<style scoped>
.torn-paper-bottom {
	--torn-paper-bg-color: var(--color-brand-orange-main);
	--torn-paper-image: url('/images/torn-3.webp');
}
.wrapper {
	padding-block-start: var(--header-height);
}
hr {
	margin-block-end: var(--space-m);
}
.data,
.links,
.content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: var(--space-l);
}
.content {
	margin-block-end: var(--space-2xl);
	@media (width < 560px) {
		flex-direction: column;
		margin-block-end: var(--space-xl);
	}
}
.data {
	justify-content: unset;
	gap: var(--space-s);
	& > :first-child {
		margin-block-start: var(--space-3xs);
	}
}
.links {
	flex-direction: column;
	gap: var(--space-2xs);
	min-width: max-content;
}
#info-line {
	max-width: 42ch;
	@media (width < 560px) {
		margin-inline-start: calc(32px + var(--space-s));
		margin-inline-end: var(--space-s);
		text-align: start;
	}
}
.color {
	width: 100%;
	padding-block: var(--space-m);
	background-color: var(--color-brand-orange-main);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
