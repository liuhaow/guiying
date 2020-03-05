<template>
	<div class="tab">
		<ul class="mit-bar"  fixed>
			<li class='issueli' v-for='(item,index) in list' @click="changestyle(index,item.y)" :class="{'actt':thatnum==index}">
				<i slot="icon" class="icon iconfont " v-if="index == 0">&#xe608;</i>
				<i slot="icon" class="icon iconfont " v-if="index == 1">&#xe61c;</i>
				<i slot="icon" class="icon iconfont " v-if="index == 2">&#xe61d;</i>
				<i slot="icon" class="icon iconfont " v-if="index == 3">&#xe60c;</i>
				<i slot="icon" class="icon iconfont " v-if="index == 4">&#xe6b1;</i> {{item.name}}
			</li>
		</ul>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Dialog } from 'vant';
	export default {
		props: ['tabName'],
		data() {
			return {
				thatnum: 0,
				list: [{
						name: '首页',
						y: '0',
					},
					{
						name: '全部菜品',
						y: '1'
					},
					{
						name: '常用清单',
						y: '2'
					},
					{
						name: '购物车',
						y: '3'
					},
					{
						name: '我的',
						y: '4'

					}

				]
			}
		},
		mounted() {
			this.thatnum = this.tabName
		},
		computed: {
			
			...mapGetters({

				TokenId: 'TokenId'
			})
		},
		methods: {
			...mapActions(
				[
					'maisellztInfo',
					'settaber',
					'chooseilt'
				]
			),
			changestyle(index) {
				this.thatnum = index;
				if(index == 0) {
					this.$router.push('/home')
				} else if(index == 1) {
					this.chooseilt(1)
					this.$router.push('/overall')
				} else if(index == 2) {
					if(this.TokenId == '') {
						Dialog.confirm({
							title: '提示',
							message: '需要登录后才可以查看呦'
						}).then(() => {
							this.$router.push('/need/login')
						}).catch(() => {});
						return
					}

					this.$router.push('/shop')

				} else if(index == 3) {
					if(this.TokenId == '') {
						Dialog.confirm({
							title: '提示',
							message: '需要登录后才可以查看呦'
						}).then(() => {
							this.$router.push('/need/login')
						}).catch(() => {});
						return
					}
					this.$router.push('/mycar')
				} else if(index == 4) {
					if(this.TokenId == '') {
						Dialog.confirm({
							title: '提示',
							message: '需要登录后才可以查看呦'
						}).then(() => {
							this.$router.push('/need/login')
						}).catch(() => {});
						return
					}
					this.$router.push('/mine')

				}
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.tab {}
	
	.mit-bar {
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1;
		height: 98px;
		background: #fafafa;
		display: flex;
		li {
			height: 100%;
			width: 20%;
			font-size: 22px;
			display: flex;
			flex-direction: column;
			color: #cdcdcd;
			justify-content: center;
			align-items: center;
			.icon {
				font-size: 40px;
				margin-bottom: 6px;
			}
		}
		.actt {
			color: #4673EC;
		}
	}
</style>