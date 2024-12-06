<script setup lang="ts"></script>

<template>
	<section id="yonatan-kof">
		<div id="main-messages" class="section-block">
			<div class="padding-center-center">
				<span>
					<div id="avatar">
						<NuxtImg src="/images/kof-pic.webp" placeholder />
						<Text tag="h2" variant="small">Hi, I’m Yonatan Kof </Text>
					</div>
					<Text class="title" tag="h1" variant="large">A full stack Designer </Text>
				</span>
				<span>
					<Text class="text-end" tag="h1" variant="large"> Who Leads Design Initiatives </Text>
					<Text id="main-message" class="text-end" tag="h2" variant="small">
						Perfect to Manage design Teams in Startups and Orgs
					</Text>
				</span>
			</div>
		</div>
		<div id="secondary-messages" class="section-block">
			<div class="padding-center-center">
				<Text tag="h1" variant="large">Design Connection</Text>
			</div>
		</div>
	</section>
</template>

<style scoped>
.title {
	width: fit-content;
	position: relative;
}
.title::before {
	content: '';
	background-image: url('/images/arrow-v1.webp');
	display: inline-block;
	width: var(--step-3);
	/* width: var(--space-m-l); */
	aspect-ratio: 136/214;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	position: absolute;
	transform: rotate(115deg);
	inset-block-end: var(--step-3);
	inset-inline-start: calc(var(--step-3) * -1);
}
/* span:first-child {
	color: aquamarine;
} */
.text-end {
	text-align: end;
}
#main-messages {

}
#avatar,
#main-messages {
	color: var(--color-black-slight);
}

#avatar {
	display: flex;
	align-items: center;
	gap: var(--space-s);
	margin-inline-start: calc(calc(var(--step-6) + var(--space-3xs)) * -1);
}
#avatar img {
	border-radius: 100%;
	width: var(--step-6);
	height: var(--step-6);
}
#secondary-messages {
	background-color: var(--color-brand-red-main);
	height: 100%;
}
#secondary-messages h1 {
	color: var(--color-sys-invert-main);
}
</style>
