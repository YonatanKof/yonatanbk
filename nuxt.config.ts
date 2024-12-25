// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/image'],
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
			link: [
				{
					rel: 'preload',
					as: 'font',
					href: '/fonts/BricolageGrotesque[opsz,wdth,wght].woff2',
					type: 'font/woff2',
					crossorigin: 'anonymous',
				},
			],
		},
	},
	css: ['~/assets/styles/index.css'],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
});
