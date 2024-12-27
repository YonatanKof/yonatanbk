<script setup lang="ts"></script>

<template>
	<section class="torn-paper-bottom transparent-bg">
		<div class="wrapper">
			<div class="box">
				<LayoutContentTop
					title="Grate Success"
					description="The form has been submitted successfully, and I'll get back to you shortly. In the meanwhile, feel free to visit my site again – and make sure to share this joy with your friends, family and radome people online."
				/>
				<div class="zzz"><Button button-size="large" tag="a" href="/"> Go back to site</Button></div>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	height: 100vh;
}
.box {
	padding: var(--space-xl);
	background-color: var(--color-sys-invert-main);
	box-shadow: var(--shadow-lg);
	display: flex;
	flex-direction: column;
}

.zzz {
	position: relative;
	z-index: 5000;
	max-width: max-content;
}
.torn-paper-bottom {
	--torn-paper-image: url('/images/torn-2.webp');
	--torn-paper-bg-color: var(--color-brand-red-main);
}
</style>
