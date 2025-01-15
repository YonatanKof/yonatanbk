<script setup>
const isModalOpen = ref(false);

const openModal = () => {
	isModalOpen.value = true;
};

const handleConfirm = () => {
	// Handle the confirm action
	isModalOpen.value = false;
};
</script>

<template>
	<section id="connect">
		<div class="wrapper">
			<div class="section-content">
				<LayoutContentTop :is-desc="false">
					<template #title>Let's do something extraordinary together</template>
				</LayoutContentTop>
				<div class="split">
					<div class="split-column">
						<div class="split-column-content">
							<Text tag="h2" variant="secondary-title" class="capitalize">Nobody reads</Text>
							<Text variant="body-medium"
								>Regardless, I write about design, branding, and technology. Have a look, why don’t you?</Text
							>
						</div>
						<div class="split-column-list">
							<LinkTo
								href="https://wwape.com/post/design-tokens/"
								title="Design Tokens"
								description="A brief intro and visualisation of design tokens"
							/>
							<LinkTo
								href="https://wwape.com/post/target-audience/"
								title="Target Audience, a Designer's Take"
								description="Why do we need to know our target audience? What is exactly? How is it used? And how do we define it?"
								highlight-color="var(--color-brand-green-main)"
							/>
							<LinkTo
								href="https://wwape.com/post/simple-icon-system/"
								title="Simple Icon System"
								description="Build a simple SVG icon system with Vue & Nuxt"
								highlight-color="var(--color-brand-blue-main)"
							/>
							<LinkTo
								href="https://wwape.com/post/flowchart-symbols/"
								title="Flowchart Symbols"
								description="A visual cheat sheet to help you effectively convey ideas with flowcharts"
								highlight-color="var(--color-brand-orange-main)"
							/>
						</div>
					</div>
					<div class="split-column">
						<div class="split-column-content">
							<Text tag="h2" variant="secondary-title" class="capitalize">Let's Connect!</Text>
							<Text variant="body-medium">
								Full-time employment, mentoring, advising, freelance, request my Résumé, help with an existential crisis
								or you just want to get to know me better?
							</Text>
							<Text variant="body-medium"> Feel free to connect ↓ </Text>
						</div>
						<div class="cta-buttons">
							<Button
								aria-label="Find me on LinkedIn"
								button-size="small"
								class="btn-linkedin"
								button-style="secondary"
								tag="a"
								href="https://www.linkedin.com/in/yonatankof/"
								target="_blank"
								:isIconEnd="true"
							>
								Find me on
								<template #icon-end>
									<IconLinkedin />
								</template>
							</Button>
							<Button button-size="small" class="btn-form" @click="openModal">Contact Me</Button>
							<Modal v-model="isModalOpen">
								<FormContactMe @confirm="handleConfirm" />
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.split {
	display: flex;
	gap: var(--space-xl);
	justify-content: space-evenly;
	@media (width < 720px) {
		flex-direction: column-reverse;
	}
}
.split-column-content,
.split-column-list,
.split-column {
	display: flex;
	flex-direction: column;
	gap: var(--space-m);
	width: 100%;
}

.split-column-list {
	gap: var(--space-s);
}
.split-column-content {
	gap: var(--space-2xs);
}
.cta-buttons {
	display: flex;
	flex-direction: row;
	gap: calc(var(--grid-block) / 2);
}
p {
	max-width: 45ch;
}
</style>
