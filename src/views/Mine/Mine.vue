<template>
	<div class="mine">
		<mhead></mhead>
		<tool></tool>
		<help></help>
		<baokuan></baokuan>
		<tabbar tabName='4'></tabbar>
		
		
	</div>
</template>

<script>
	import mhead from '@/views/Mine/shouye/minehead'
	import tool from '@/views/Mine/shouye/tool'
	import help from '@/views/Mine/shouye/help'
	import guess from '@/views/Mine/shouye/guess'
	import baokuan from '@/components/baokuand'
	import tabbar from "@/components/abbar"
	
	
	
	
	export default {
		data() {
			return {}
		},
		components: {
			mhead,
			tool,
			help,
			tabbar,
			baokuan
		},
	}
</script>

<style lang="stylus" scoped>
.mine{
	padding-bottom:98px ;
		background: rgba(225, 225, 225, .5);
	
}
</style>