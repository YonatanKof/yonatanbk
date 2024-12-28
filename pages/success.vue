<script setup lang="ts"></script>

<template>
	<section class="torn-paper-bottom transparent-bg">
		<div class="wrapper">
			<div class="box">
				<Text tag="h1" variant="secondary-title">Form Sent!</Text>
				<Text tag="h2" variant="body-medium">I'll get back to you shortly. </Text>
				<Text variant="body-medium"
					>In the meanwhile, visit my site again or share with relevant friends, family or radome people online.</Text
				>
				<div class="zzz">
					<SocialShareBtns :set-url="`https://www.yonatanbk.com/`" />
					<Button button-size="medium" tag="a" href="/"> Go back to site</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	height: 100vh;
}
.wrapper {
	max-width: 768px;
	padding-block-start: 128px;
	@media (width < 880px) {
		max-width: 640px;
	}
	@media (width < 720px) {
		max-width: 576px;
	}
	@media (width < 640px) {
		max-width: 448px;
	}
	@media (width < 520px) {
		max-width: 320px;
	}
	@media (width < 400px) {
		max-width: 256px;
	}
}
.box {
	padding: 32px;
	background-color: var(--color-sys-invert-main);
	box-shadow: var(--shadow-lg);
	min-height: 256px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap-reverse;
	gap: var(--space-s);
	@media (width < 720px) {
		min-height: 320px;
	}
	@media (width < 640px) {
		min-height: 352px;
	}
	@media (width < 520px) {
		min-height: 416px;
	}
	@media (width < 400px) {
		min-height: 464px;
	}
}

.zzz {
	position: relative;
	z-index: 5000;
	display: flex;
	justify-content: space-between;
	gap: var(--space-m);
	@media (width < 720px) {
		flex-direction: column;
	}
}
.torn-paper-bottom {
	--torn-paper-image: url('/images/torn-2.webp');
	--torn-paper-bg-color: var(--color-brand-red-main);
}
</style>
