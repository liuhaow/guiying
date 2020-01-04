<template>
	<div class="viprule">
		<headt message='积分规则'></headt>
		<div class="ruled" v-html="content">
			{{content}}
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { Jifeninforule } from '@/api/api'
	export default {
		data() {
			return {
				content: ''
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
			let data = {
				token: this.TokenId
			}
			Jifeninforule(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
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
		.ruled {
			flex: 1;
			overflow: auto;
			padding: 30px 30px;
			box-sizing: border-box;
			font-size: 32px;
			letter-spacing: 3px;
			color: rgba(51, 51, 51, 1);
			text-indent: 30px;
			line-height: 40px;
			p {
				font-size: 32px;
				letter-spacing: 3px;
				color: rgba(51, 51, 51, 1);
				text-indent: 30px;
				line-height: 40px;
			}
		}
	}
</style>