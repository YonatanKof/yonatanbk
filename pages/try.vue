<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<LayoutContentTop title="Send form" />
		<form name="try" action="/success" method="POST" data-netlify="true">
			<p>
				<label>Your Name: <input type="text" name="name" required/></label>
			</p>
			<p>
				<label>Your Email: <input type="email" name="email" /></label>
			</p>
			<p>
				<label
					>Your Role:
					<select name="role[]" multiple>
						<option value="leader">Leader</option>
						<option value="follower">Follower</option>
					</select></label
				>
			</p>
			<p>
				<label>Message: <textarea name="message" required></textarea></label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	</div>
</template>

<style scoped></style>
