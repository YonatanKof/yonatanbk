<template>
	<section class="section-block padding-center-center">
		<Button buttonSize="small">Small! Primary</Button>
		<Button>Medium! Primary</Button>
		<Button buttonSize="large">Large! Primary</Button>
		<Button buttonStyle="secondary" buttonSize="small">Small! Secondary</Button>
		<Button buttonStyle="secondary">Medium! Secondary</Button>
		<Button buttonStyle="secondary" buttonSize="large">Large! Secondary</Button>
		<Button buttonSize="small" buttonStyle="ghost">Small! Ghost</Button>
		<Button buttonStyle="ghost">Medium! Ghost</Button>
		<Button buttonSize="large" buttonStyle="ghost">Large! Ghost</Button>
		<Button buttonSize="small" buttonStyle="subtle">Small! Subtle</Button>
		<Button buttonStyle="subtle">Medium! Subtle</Button>
		<Button buttonSize="large" buttonStyle="subtle">Large! Subtle</Button>
	</section>
</template>

<style scoped>
section {
	gap: 1rem;
}
</style>
