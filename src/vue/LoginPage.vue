<template>
	<div>
		<h1>Log in yo</h1>
		<input v-model="user" type="text" placeholder="Username" />
		<input v-model="pass" type="password" placeholder="Password" />
		<button @click="login">Log in</button>
		<br />
		<router-link to="/register">Register</router-link>
	</div>
</template>

<script>
import useAuth from './stores/auth';

export default {
	data() {
		return {
			user: '',
			pass: ''
		};
	},
	methods: {
		login() {
			const authStore = useAuth();
			authStore.login(this.user, this.pass);
		}
	}
};
</script>

<style>
</style>
