<script setup lang="ts">
const emit = defineEmits<{
	(e: 'confirm'): void;
}>();
</script>

<template>
	<div>
		<Text tag="h2" variant="secondary-title" class="title">Let's talk</Text>
		<form
			name="contact-me"
			method="POST"
			netlify
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			action="/success"
		>
			<div class="do-it">
				<label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
			</div>
			<input hidden name="form-name" value="contact-me" />
			<div class="input">
				<label class="body body-x-small" for="name">Name</label>
				<input type="text" name="name" id="name" required />
			</div>

			<div class="input">
				<label class="body body-x-small" for="email">Email </label>
				<input type="email" name="email" id="email" required />
			</div>

			<div class="input">
				<label class="body body-x-small" for="phone">
					Phone
					<p class="hint body body-x-small">Optional</p>
				</label>
				<input type="tel" name="phone" id="phone" pattern="[0-9 ()-]*" />
			</div>

			<div class="input">
				<label class="body body-x-small" for="role">Subject</label>
				<select name="role" id="role" required>
					<option value="" disabled selected>Please select an option...</option>
					<option value="employ">Full time employment</option>
					<option value="freelance">Freelance</option>
					<option value="advise">Advising</option>
					<option value="mentor">Mentoring</option>
					<option value="general">General queries</option>
				</select>
			</div>

			<div class="input">
				<label class="body body-x-small" for="message">Message </label>
				<textarea name="message" id="message" rows="5" required></textarea>
			</div>
			<span>
				<Button button-size="small" button-style="secondary" @click="emit('confirm')">Cancel</Button>
				<Button button-size="small" type="submit">Send</Button>
			</span>
		</form>
	</div>
</template>

<style scoped>
form {
	margin-block-start: var(--space-s);
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
	z-index: 1000;
}
input,
select,
textarea {
	min-height: var(--space-l);
	border: 1px solid var(--color-sys-main);
	border-radius: 0;
	-webkit-border-radius: 0 !important;
	padding-inline: var(--space-xs);
	padding-block: var(--space-3xs);
	margin: unset;
	line-height: 1;
	background-color: white;
	font-family: inherit;
	font-size: var(--step--1);
	box-shadow: -4px 4px 0 0 var(--color-sys-dis);
}
select {
	-webkit-appearance: none;
	appearance: none;
	background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
	background-repeat: no-repeat;
	background-position: right 8px center;
	padding-right: 32px; /* Space for custom arrow */
	color: var(--color-sys-main) !important;
	min-height: 2rem !important;
}
select,
textarea {
	padding-block: var(--space-xs);
}
textarea {
	resize: none;
}

select:invalid {
	color: var(--color-sys-dim);
}

.input {
	display: flex;
	gap: var(--space-3xs);
	flex-direction: column;
}
label {
	position: relative;
	color: var(--color-sys-main);
	font-variation-settings: 'wght' 600;
	& p {
		color: var(--color-brand-green-main);
		position: absolute;
		inset-block-start: 0;
		inset-inline-end: 0;
	}
}
span {
	display: flex;
	gap: var(--space-xs);
	justify-content: space-evenly;
	z-index: 1000;
	margin-block-start: var(--space-2xs);
	a {
		font-size: var(--step--1);
	}
	button {
		width: 100%;
	}
}
</style>
