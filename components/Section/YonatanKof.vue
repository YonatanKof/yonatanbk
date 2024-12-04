<script setup lang="ts"></script>

<template>
	<section id="yonatan-kof" class="section">
		<div class="section-content">
			<div id="main-content">
				<span>
					<div id="avatar">
						<NuxtImg src="/images/kof-pic.webp" placeholder />
						<Text tag="h2" variant="small">Hi, I’m Yonatan Kof </Text>
					</div>
					<Text class="title" tag="h1" variant="large">A full stack Designer </Text>
				</span>
				<span>
					<Text class="text-end" tag="h1" variant="large"> Who Leads Design Initiatives </Text>
					<Text id="main-message" class="text-end" tag="h2" variant="small">Perfect to Manage design Teams in Startups and Orgs</Text>
				</span>
			</div>
		</div>
		<div id="design-connection" class="section">
			<div class="section-content">
				<Text tag="h1" variant="large">Design Connection</Text>
			</div>
		</div>
	</section>
</template>

<style scoped>
.text-end {
	text-align: end;
}
#main-content {
	display: flex;
	align-items: center;
	flex-direction: column;
}
#avatar,
#main-message {
	color: var(--color-black-slight);
}
#main-message {
	justify-content: end;
	margin-block-start: var(--space-s);
	text-align: end;
}
#avatar {
	display: flex;
	align-items: center;
	gap: var(--space-s);
	margin-inline-start: calc(calc(var(--step-6) + var(--space-s)) * -1);
}
#avatar img {
	border-radius: 100%;
	width: var(--step-6);
	height: var(--step-6);
}
#design-connection {
	background-color: var(--color-brand-red-main);
}
#design-connection h1 {
	color: var(--color-sys-invert-main);
}
</style>
