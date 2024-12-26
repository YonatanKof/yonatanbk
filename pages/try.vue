<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<LayoutContentTop title="Send form" />
		<form
			name="contact-form"
			method="POST"
			netlify
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			id="contact-form"
      action="/success"
		>
			<div class="hidden">
				<label> Don’t fill this out if you’re human: <input name="bot-field" /> </label>
				<input type="hidden" name="form-name" value="contact-form" />
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
					<textarea rows="4" name="message" id="message" placeholder="What do you want to talk about?" class="field" />
				</div>
				<div>
					<button type="submit">Send message</button>
					<button type="reset">Clear</button>
				</div>
			</div>
		</form>
	</div>
</template>

<style scoped></style>
