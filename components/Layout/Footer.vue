<script setup lang="ts">
const yearMonth = new Date().toLocaleDateString('en-US', {
	year: 'numeric',
	month: 'short',
});
</script>

<template>
	<footer>
		<div class="torn-paper-bottom"></div>
		<div class="color">
			<div class="wrapper">
				<div class="content">
					<div class="data">
						<BrandGeoKofXs />
						<div class="extra">
							<Text id="info-line" text-style="color-invert">
								A website by <span class="no-brake">Yonatan Ben Knaan</span>, a full stack designer who leads design
								initiatives in Startups and Orgs</Text
							>
							<SocialShareBtns text-style="var(--color-sys-invert-slight)" font-size="var(--step--1)" />
						</div>
					</div>
					<div class="links">
						<nuxt-link class="color-invert" to="https://github.com/YonatanKof/">Yonatan @ GitHub</nuxt-link>
						<nuxt-link class="color-invert" to="https://www.linkedin.com/in/yonatankof/">Yonatan @ Linkedin</nuxt-link>
						<nuxt-link class="color-invert" to="https://wwape.com/"
							>Graphics Arts ({{ new Date().getFullYear() }})</nuxt-link
						>
						<nuxt-link class="color-invert" to="https://digital.yonatankof.com/">Design Portfolio (2018)</nuxt-link>
					</div>
				</div>
				<Text text-style="color-invert" variant="body-x-small" class="site-info">
					Copyright © {{ yearMonth }}・Designed & Developed by <span class="no-brake">Yonatan Ben Knaan</span>
				</Text>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.torn-paper-bottom {
	height: calc(2 * var(--space-8xl));
	margin-block-start: calc(-1 * var(--space-8xl));
	--torn-paper-bg-color: var(--color-sys-main);
	--torn-paper-image: url('/images/torn-3.webp');
}
.wrapper {
	padding-block-start: var(--space-xl);
}
hr {
	margin-block-end: var(--space-m);
}
.data,
.links,
.extra,
.content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: var(--space-l);
}
.content {
	margin-block-end: var(--space-xl);
	@media (width < 660px) {
		flex-direction: column;
		margin-block-end: var(--space-l);
	}
}
.data {
	justify-content: unset;
	gap: var(--space-s);
	height: max-content;
}
.extra,
.links {
	height: max-content;
	flex-direction: column;
	gap: var(--space-2xs);
	min-width: max-content;
}
.links {
	align-items: end;
	@media (width < 640px) {
		align-items: start;
		margin-inline-start: calc(32px + var(--space-s));
		margin-inline-end: var(--space-s);
	}
}
.extra {
	min-width: unset;
	gap: var(--space-xs);
}
#info-line {
	max-width: 42ch;
}
.color {
	width: 100%;
	background-color: var(--color-sys-main);
}
.site-info {
	margin-inline-start: calc(32px + var(--space-s));
}
.color-invert {
	color: var(--color-sys-invert-slight);
	border-bottom-color: var(--color-sys-invert-dim);
	&:hover {
		border-bottom-color: var(--color-sys-invert-slight);
	}
}
</style>
