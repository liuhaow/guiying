<template>
	<div id="app">
		<!--<router-view />-->
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<tabbar/>
	</div>
</template>

<script>
	import tabbar from "./components/abbar"
	import { mapGetters } from 'vuex'
	export default {
		components: {
			tabbar,

		}
	}
</script>

<style lang="stylus" scoped>
	#app {
		background: rgba(225, 225, 225, .5);
		height: 100%;
	}
</style>