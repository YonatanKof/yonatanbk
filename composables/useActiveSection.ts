export const useActiveSection = () => {
	const activeSection = ref('yonatan-ben-knaan');

	onMounted(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Get the closest parent section that's a direct child of main
						const mainSection = entry.target.closest('main > section');
						if (mainSection) {
							activeSection.value = mainSection.id;
							history.replaceState(null, '', `#${mainSection.id}`);
						}
					}
				});
			},
			{
				threshold: 0.5,
			}
		);

		// Observe all sections, including nested ones
		document.querySelectorAll('section').forEach((section) => {
			observer.observe(section);
		});

		onUnmounted(() => {
			observer.disconnect();
		});
	});

	return {
		activeSection,
	};
};