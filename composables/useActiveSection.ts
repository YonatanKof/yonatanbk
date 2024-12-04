export const useActiveSection = () => {
	const activeSection = ref('yonatan-kof');

	onMounted(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection.value = entry.target.id;
						// Update URL hash without triggering scroll
						history.replaceState(null, '', `#${entry.target.id}`);
					}
				});
			},
			{
				threshold: 0.5, // Trigger when section is 50% visible
			}
		);

		// Observe all sections
		document.querySelectorAll('section').forEach((section) => {
			observer.observe(section);
		});

		// Cleanup
		onUnmounted(() => {
			observer.disconnect();
		});
	});

	return {
		activeSection,
	};
};
