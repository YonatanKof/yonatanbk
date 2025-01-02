<script setup>
import { useModal } from 'vue-final-modal';
import Modal from '~/components/Modal.vue';

const { open, close } = useModal({
	component: Modal,
	attrs: {
		onConfirm() {
			close();
		},
	},
});
const images = [
	'/images/projects/ui-control/card.webp',
	'/images/projects/ui-control/list.webp',
	'/images/projects/ui-control/menu.webp',
	'/images/projects/ui-control/slag.webp',
	'/images/YonatanBK-Social.jpg',
];
</script>

<template>
	<main class="wrapper center-center">
		<div class="split"></div>
		<LayoutContentTop />
		<div class="this-one torn-paper-bottom">
			<ShapesSquareLines />
			<ShapesSquareCenter />
			<ShapesSquare />
			<ShapesCircleFifth />
			<ShapesCircleHalf />
		</div>
		<Project
			id="pepperi"
			highlight-color="#6E960A"
			:image-array="[
				{
					url: '/projects/pepperi/design-systems.webm',
					name: 'Design Systems',
				},
				{
					url: '/projects/pepperi/pepperi-personas.webm',
					name: 'User Personas',
				},
				{
					url: '/projects/pepperi/brand.webm',
					name: 'Brand Guide',
				},
				{
					url: '/projects/pepperi/pepperi-page-builder-vid.webm',
					name: 'No Code Webpage Builder',
				},
			]"
			title="Pepperi"
			position="Head of Design"
			year="2018-2024"
			description="Lead webapp across various roles, designing new products, managing requirements, backlogs and design system, conducting research, while supporting marketing, brand and professional services team."
			:verticals="['B2B', 'E-commerce', 'Storefront', 'No Code Editor', 'Webpage Builder']"
			:jobs="['Research', 'Competitive Analysis', 'Stakeholder Mgmt.', 'Backlog Mgmt.', 'Design', 'UX', 'User Testing']"
			logo="/images/clients-color/Pepperi.webp"
			:link-to="[
				{
					url: 'https://www.pepperi.com/',
					name: 'Visit Pepperi site',
				},
				{
					url: 'https://60ae3e9eff8e4c003b2f90d4-tpugnwjzfy.chromatic.com/?path=/docs/pepperi-design-system--page',
					name: 'Explore Pepperi DS',
				},
				{
					url: 'https://brand.pepperi.com/',
					name: 'Review Pepperi brand guide',
				},
				{
					url: 'https://peppersona.netlify.app/',
					name: 'Pepperi Persona (via Notion API)',
				},

				{
					url: '/kof',
					name: 'Kof',
					internal: true,
				},
			]"
		/>
		<OpenForWork />
		<Text tag="h1" variant="main-title">Main Title</Text>
		<Text tag="h2" variant="compressed-title">Compressed Title</Text>
		<Text>Simple text</Text>
		<hr />
		<Text tag="h2" variant="main-title">Buttons</Text>
		<section>
			<div>
				<Text tag="h3" variant="compressed-title">Primary</Text>
				<Button buttonSize="small">SM</Button>
				<Button>MD</Button>
				<Button buttonSize="large">LG</Button>
				<Text tag="h3" variant="compressed-title">Secondary</Text>
				<Button buttonStyle="secondary" buttonSize="small">SM</Button>
				<Button buttonStyle="secondary">MD</Button>
				<Button buttonStyle="secondary" buttonSize="large">LG</Button>
				<Text tag="h3" variant="compressed-title">Ghost</Text>
				<Button buttonSize="small" buttonStyle="ghost">SM</Button>
				<Button buttonStyle="ghost">MD</Button>
				<Button buttonSize="large" buttonStyle="ghost">LG</Button>
				<Text tag="h3" variant="compressed-title">Subtle</Text>
				<Button buttonSize="small" buttonStyle="subtle">SM</Button>
				<Button buttonStyle="subtle">MD</Button>
				<Button buttonSize="large" buttonStyle="subtle">LG</Button>
			</div>
			<div>
				<Text tag="h3" variant="compressed-title">Open Dialog</Text>
				<Button :onClick="open">Open Dialog</Button>
				<Text tag="h3" variant="compressed-title">Open Link</Text>
				<Button tag="a" href="https://wwape.com" target="_blank">Visit WWApe</Button>
				<Text tag="h3" variant="compressed-title">Download File</Text>
				<Button tag="a" href="/misc/CV-YonatanBenKnaan-2024.pdf" target="_blank"> Download CV </Button>
			</div>
		</section>
	</main>
</template>

<style scoped>
.split {
	width: 100%;
	height: 2rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
}
.torn-paper-bottom {
	--torn-paper-image: url('/images/torn-3.webp');
	--torn-paper-bg-color: var(--color-brand-orange-main);
}
.this-one {
	background-color: var(--color-brand-red-main);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	font-size: var(--step--2);
}
section {
	gap: var(--space-xl);
	display: flex;
	flex-direction: row;
}
div {
	display: flex;
	flex-direction: column;
	gap: var(--space-2xs);
	align-items: start;
	justify-content: start;
}
</style>
