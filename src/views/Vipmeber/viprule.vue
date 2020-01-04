<template>
	<div class="viprule">
		<headt message='会员规则'></headt>
		<div class="rule" v-html="content">
			{{content}}
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { Vipinforule } from '@/api/api'
	export default {
		data() {
			return{
				content:''
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {		
			let data  ={
				token: this.TokenId				
			}		
			Vipinforule(data).then(res=>{
				console.log(res)
				if(res.data.code ==200){
					this.content = res.data.data
				}
			})
		},
	}
</script>

<style lang="stylus" scoped>
	.viprule {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.rule {
			flex: 1;
			overflow: auto;
			padding: 30px 30px ;
			box-sizing: border-box;
			h2 {
				font-size: 26px;
				letter-spacing: 3px;
				color: rgba(51, 51, 51, 1);
				text-indent: 30px;
				line-height: 34px;
			}
		}
	}
</style>