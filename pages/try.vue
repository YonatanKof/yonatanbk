<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<LayoutContentTop title="Send form" />
		<form name="contact-me" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="contact-me" />
			<div>
				<label for="name" class="label"> Your Name </label>
				<input type="text" name="name" id="name" placeholder="What is your name?" class="field" required />
			</div>
			<div>
				<label for="email" class="label"> Your Email </label>
				<input type="email" name="email" id="email" placeholder="What is your email?" class="field" required />
			</div>
			<div>
				<label for="message" class="label"> Your Message </label>
				<textarea
					rows="4"
					name="message"
					id="message"
					placeholder="What do you want to talk about?"
					class="field"
				></textarea>
			</div>
			<div>
				<button type="submit">Send message</button>
				<button type="reset">Clear</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
.hidden {
	opacity: 0;
}
</style>
