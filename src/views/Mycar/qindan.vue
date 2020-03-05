<template>
	<div class="danzi">
		<div class="c-head">
			<h1 @click="back">
				<img src="../../../static/img/fanhui.png"/>
			</h1>
			<h2>商品清单</h2>
			<h3></h3>
		</div>
		<div class="lis-t">
			<div class="l-t-t">
				<span>商品</span>
				<span>共{{numb}}件</span>
			</div>
			<ul>
				<li v-for="(item,index in list" :key='index'>
					<img :src="item.cover" alt="" />
					<div>
						<h1>{{item.title}}</h1>
						<h2><span class="s-p-an">单价：&yen;{{item.now_price}}</span><span>数量：{{item.num}}</span></h2>
						<h3>&yen;{{item.num*item.now_price}}</h3>
					</div>

				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	
	export default {
		data() {
			return {
				list: [],
				numb:''
			}
		},
		computed: {
			...mapGetters({
				qingdand: 'qingdand'
			})
		},
		created() {

		},
		mounted() {
			var that = this
			let allnum = 0
			that.qingdand.forEach((item) => {
					allnum += item.num 
			})
			that.numb = allnum
			that.list=that.qingdand
		},
		methods: {

			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.danzi {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.lis-t {
			flex: 1;
			overflow: auto;
			display: flex;
			flex-direction: column;
			background: rgba(225, 225, 225, .6);
			padding: 25px 20px 0;
			box-sizing: border-box;
			.l-t-t {
				height: 80px;
				line-height: 80px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 24px;
				box-sizing: border-box;
				font-size: 28px;
				color: #333;
				background: #fff;
				margin-bottom: 5px;
			}
			ul {
				flex: 1;
				overflow: auto;
				li {
					height: 192px;
					margin-bottom: 20px;
					background: #fff;
					background: rgba(255, 255, 255, 1);
					border-radius: 8px;
					padding: 0 24px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
					img {
						height: 152px;
						width: 152px;
					}
					div {
						height: 130px;
						width: 474px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						h1 {
							font-size: 32px;
							color: #000;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						h2 {
							span {
								font-size: 26px;
								color: #999999;
							}
							.s-p-an {
								margin-right: 30px;
							}
						}
						h3 {
							text-align: right;
							font-size: 28px;
							color: #333333;
						}
					}
				}
			}
		}
	}
	
	.c-head {
		height: 90px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 26px;
		background: #ffff;
		box-sizing: border-box;
		h1 {
			img {
				height: 40px;
				width: 40px;
			}
		}
		h2 {
			font-size: 36px;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		h3 {
			height: 26px;
			font-size: 28px;
			font-family: PingFang SC;
			font-weight: 500;
			color: #3FB94D;
		}
	}
</style>