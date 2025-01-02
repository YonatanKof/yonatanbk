<template>
	<div class="frame">
		<div v-for="index in 5" :class="`stick b-${index - 1}`">
			<div class="container" :style="{ '--octa-gap': `${index / 3}rem` }">
				<div v-for="b in 10" class="box"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
@keyframes c1 {
	0% {
		clip-path: inset(10%);
	}
	100% {
		clip-path: inset(5% 0%);
	}
}
@keyframes c2 {
	0% {
		clip-path: inset(20%);
	}
	100% {
		clip-path: inset(10% 0%);
	}
}
@keyframes c3 {
	0% {
		clip-path: inset(30%);
	}
	100% {
		clip-path: inset(15% 0%);
	}
}
@keyframes c4 {
	0% {
		clip-path: inset(40%);
	}
	100% {
		clip-path: inset(20% 0%);
	}
}
.frame {
	--size: var(--shape-size);
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	width: var(--size);
	height: var(--size);
	position: relative;
}
.stick {
	grid-column: 1;
	grid-row: 1;
	width: 100%;
	height: 100%;
}
.container {
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(10, 1fr);
	background-color: var(--color-brand-red-main);
	gap: var(--octa-gap);
}
.box {
	background-color: var(--color-sys-invert-slight);
}
.b-1 {
	animation: c1 5s ease-in-out infinite alternate;
}
.b-2 {
	animation: c2 5s ease-in-out infinite alternate;
}
.b-3 {
	animation: c3 5s ease-in-out infinite alternate;
}
.b-4 {
	animation: c4 5s ease-in-out infinite alternate;
}
</style>
