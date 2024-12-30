export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const { path } = useRoute();
	const cleanPath = path.replace(/\/+$/, '');
	const dynamicUrl = config.public.baseUrl;
	const canonicalPath = dynamicUrl + cleanPath;

	// This is my abstraction for setting meta tags
	const usePageMetaTags = ({
		metaTitle = `${config.public.siteOwnerName} - ${config.public.siteName}`,
		metaAuthor = config.public.siteOwnerName,
		metaSiteName = config.public.siteName,
		// metaArticleAuthor = undefined,
		metaTitleData = undefined,
		metaDesc = `A portfolio site by ${config.public.siteOwnerName} - a full stack designer who leads design initiatives in Startups and Orgs`,
		metaImg = '/images/yonatanbk-social.jpg',
		metaImgAlt = 'Social cover image for this site',
		metaOgType = 'website' as
			| 'website'
			| 'article'
			| 'book'
			| 'profile'
			| 'music.song'
			| 'music.album'
			| 'music.playlist'
			| 'music.radio_status'
			| 'video.movie'
			| 'video.episode'
			| 'video.tv_show'
			| 'video.other'
			| null
			| undefined,
		metaTwitterCard = 'summary_large_image' as 'summary_large_image' | 'summary' | 'app' | 'player' | null | undefined,
		metaTwitterSite = '@yonatankof',
		metaImageWidth = 1200,
		metaImageHeight = 630,
		metaImageType = 'image/jpeg' as 'image/jpeg' | 'image/gif' | 'image/png' | null | undefined,
		metaCanonicalPath = canonicalPath,
		metaPublishedTime = undefined,
		metaModifiedTime = undefined,
	} = {}) => {
		useHead({
			titleTemplate: (titleChunk) => {
				return titleChunk ? `${titleChunk} - ` + metaTitle : metaTitle;
			},
			meta: [
				{ name: 'description', content: 'My amazing site.' },
				{ name: 'description', content: 'My amazing site.' },
			],
			htmlAttrs: { lang: 'en' },
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: metaCanonicalPath,
				},
			],
		});
		// This is Nuxt 3's way of setting meta tags
		// https://nuxt.com/docs/api/composables/use-seo-meta
		// For reactive tags, use computed getter syntax: `key: () => value,`
		// For example `description: () => metaDesc`
		useSeoMeta({
			author: metaAuthor,
			description: () => metaDesc,
			keywords: 'design, ux, ui, full stack design, developer, branding, design lead, product design, startup, org, yonatan ben knaan',
			// articleAuthor: metaArticleAuthor,
			articlePublishedTime: metaPublishedTime,
			articleModifiedTime: metaModifiedTime,

			ogTitle: () => (metaTitleData ? metaTitleData + ` - ` + metaTitle : metaTitle),
			ogSiteName: metaSiteName,
			ogDescription: () => metaDesc,
			ogType: metaOgType,
			ogImage: metaImg,
			ogImageAlt: metaImgAlt,
			ogImageWidth: metaImageWidth,
			ogImageHeight: metaImageHeight,
			ogImageType: metaImageType,

			twitterTitle: () => (metaTitleData ? metaTitleData + ` - ` + metaTitle : metaTitle),
			twitterDescription: () => metaDesc,
			twitterCard: metaTwitterCard,
			twitterSite: metaTwitterSite,
			twitterImage: metaImg,
			twitterImageAlt: metaImgAlt,
		});
	};

	return {
		provide: {
			pageMetaTags: usePageMetaTags,
		},
	};
});
