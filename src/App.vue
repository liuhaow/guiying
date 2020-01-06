<template>
	<div id="app">
		<!--<router-view />-->
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<!--<tabbar/>-->
	</div>
</template>

<script>
	import tabbar from "./components/abbar"
	export default {
		components: {
			tabbar
		},
		updated() {

			window.scroll(0, 0);

		}
	}
</script>

<style lang="stylus" scoped>
	#app {
		background: rgba(225, 225, 225, .3);
		height: 100%;
	}
</style>