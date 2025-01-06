const siteOwnerNameHere = 'Yonatan Ben Knaan';
const baseUrlHere = process.env.DEPLOY_PRIME_URL;
const SiteNameHere = 'A Full Stack Design Lead';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/image', '@stefanobartoletti/nuxt-social-share'],
	app: {
		head: {
			htmlAttrs: {
				lang: 'en-us',
			},
			meta: [
				{
					name: 'google-site-verification',
					content: '_OG_xHj0Ra-rbTA3Ea5Bryg7V-TSU4Cv_GgU_w77JvY',
				},
			],
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
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
	devServer: {
		host: '0.0.0.0',
	},
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ['/'], // Add routes with forms
		},
	},
	css: ['~/assets/styles/index.css'],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	socialShare: {
		baseUrl: process.env.URL || 'https://yonatanbk.com/', // Required
	},
	runtimeConfig: {
		// Private keys are only available on the server
		// clarityId: process.env.MICROSOFT_CLARITY_ID,
		// Public keys that are exposed to the client
		public: {
			baseUrl: baseUrlHere,
			siteOwnerName: siteOwnerNameHere,
			siteName: SiteNameHere,
			// missingImg: '/missing.svg',
		},
	},
});
