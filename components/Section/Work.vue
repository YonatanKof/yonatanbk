<script setup>
import projectsData from '~/data/projects.json';

// The projects array is now available from the imported JSON
const { projects } = projectsData;
</script>
<template>
	<section id="work">
		<div class="wrapper">
			<LayoutContentTop>
				<template #title>Selected Works</template>
				<template #desc>
					As a partner in a design agency, a startup team member, a freelancer, and an executive - I've solved and
					delivered a large and varied scope of projects. Here are just a few.
				</template>
			</LayoutContentTop>
			<div class="work">
				<Project v-for="project in projects" :key="project.id" v-bind="project" />
			</div>
		</div>
	</section>
</template>

<style scoped>
.wrapper {
	max-width: var(--display-width-xl);
}
.work {
	display: flex;
	flex-direction: column;
	gap: var(--space-4xl);
	@media (width < 720px) {
		gap: var(--space-3xl);
	}
	@media (width < 544px) {
		gap: var(--space-2xl);
	}
	@media (width < 480px) {
		gap: var(--space-xl);
	}
}
</style>
