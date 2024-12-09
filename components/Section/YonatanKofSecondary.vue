<script setup lang="ts"></script>

<template>
	<div id="secondary-messages" class="section-block">
		<div class="padding-center-center">
			<div class="top-content">
				<Text tag="h1" variant="main-title"
					>Design <br />
					Connection</Text
				>
				<Text variant="large-text" class="this-text">
					For the last 15+ years my mission is to bridge the gap between users, businesses, and technology through
					research and design, creating elegant solutions that simplify complexity and enhance lives.
				</Text>
				
			</div>
		</div>
	</div>
</template>

<style scoped>
#secondary-messages {
	background-color: var(--color-brand-red-main);
	color: var(--color-sys-invert-main);
	height: 100%;
	text-align: start;
	display: flex;
	align-items: start;
}
.top-content {
	padding: var(--space-m);
	display: flex;
	gap: var(--space-s);
	flex-direction: column;
	justify-content: center;
	align-items: start;
	width: 100%;
	max-width: var(--display-width-lg);
}
.this-text {
	max-width: 57ch;
	text-wrap: balance;
}
</style>
