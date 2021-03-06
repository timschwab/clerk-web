// Set up vue
import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './HomePage.vue';
import NotFoundPage from './404.vue';
import RandomFunds from './RandomFunds.vue';
import Christmas from './Christmas.vue';

Vue.use(VueRouter);

// Includes
let store; // Injected by app.js

// Base pages
const routing = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path: '/random-funds',
			component: RandomFunds
		},
		{
			path: '/christmas',
			component: Christmas
		},
		{
			path: '*',
			component: NotFoundPage
		}
	]
});

if (DEV_MODE) {
	// Expose globally for debugging
	window.routing = routing;
}

function setStore(storeVar) {
	store = storeVar;
}

export default {
	setStore,
	routing
};
