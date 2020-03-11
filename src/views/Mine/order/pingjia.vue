<template>
	<div class="wuliu">
		<div class="p-l-t">
			<div class="p-t-t" @click="back">
				<img src='../../../../static/img/fanhui.png' alt="">
			</div>
			<div class="p-t-n">发表评价</div>
			<div class='p-t-r' @click="tijaioData">提交评价</div>
		</div>
		<div class="p-lst">
			<ul>
				<li v-for="(item ,index) in list">
					<div class="l-st-t">
						<img :src="item.cover" alt="" />
						<p class="tit_y">{{item.commodity_name}}</p>
					</div>
					<div class="l-st-n">
						<span>整体评价</span>
						<van-rate v-model="item.level" />
					</div>
					<div class="l-st-f">
						<textarea name="" rows="" v-model="item.content" cols="" placeholder="说说它的优点和美中不足的地方吧!"></textarea>
					</div>
				</li>
			</ul>
		</div>
		<div class="p-l-foot">
			<h2>店铺评价</h2>
			<div class="p-l-f-p">
				<span>送货服务</span>
				<van-rate v-model="song" />
			</div>
			<div class="p-l-f-p">
				<span>服务态度</span>
				<van-rate v-model="fu" />
			</div>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { pinlundata, orderpinlunde } from '@/api/mine'

	export default {
		data() {
			return {
				fu: 5,
				song: 5,
				list: [],

			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data = {
				order_id: this.$route.params.id
			}
			orderpinlunde(data).then(res => {
				if(res.data.code == 200) {
					this.list = res.data.data;
				}
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			tijaioData() {
				var that = this
				let zhungd = [];
				that.list.forEach((item) => {
					let pd = {
						commodity_id: item.commodity_id,
						content: item.content,
						level: item.level
					}
					zhungd.push(pd)
				})

				let pdtf = JSON.stringify(zhungd)

				let data = {
					token: that.TokenId,
					order_id: that.$route.params.id,
					delivery_evaluation: that.song,
					platform_evaluation: that.fu,
					product_all: pdtf

				}
				pinlundata(data).then(res => {
					if(res.data.code == 200) {
						that.$router.push('/myorder/pingsuess')
					}
				})

				console.log(data)


			}
		}
	}
</script>

<style scoped lang="stylus">
	.wuliu {
		height: 100%;
		overflow: auto;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.p-lst {
			flex: 1;
			overflow: auto;
			ul {
				height: 100%;
				width: 100%;
				overflow: auto;
				padding-top: 20px;
				box-sizing: border-box;
				li {
					margin: 0 auto 20px;
					padding-top: 20px;
					box-sizing: border-box;
					width: 96%;
					height: 480px;
					background: #fff;
					display: flex;
					flex-direction: column;
					.l-st-t {
						display: flex;
						.tit_y {
							font-size: 28px;
							line-height: 32px;
						}
						img {
							height: 140px;
							width: 140px;
							margin: 0 20px;
						}
					}
					.l-st-n {
						height: 80px;
						display: flex;
						align-items: center;
						border-bottom: 2px solid #E1E1E1;
						span {
							font-size: 32px;
							font-family: PingFang SC;
							margin: 0 20px;
							font-weight: 600;
							color: rgba(51, 51, 51, 1);
						}
					}
					.l-st-f {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: center;
						textarea {
							width: 90%;
							height: 90%;
							border: none;
							font-size: 30px;
							font-weight: 500;
							color: #000;
						}
					}
				}
			}
		}
		.p-l-foot {
			height: 320px;
			background: #FFFFFF;
			padding: 40px 0 0 20px;
			box-sizing: border-box;
			h2 {
				font-size: 32px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 20px;
			}
			.p-l-f-p {
				height: 80px;
				display: flex;
				align-items: center;
				span {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
					margin-right: 20px;
				}
			}
		}
		.p-l-t {
			height: 88px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background #fff;
			padding: 0 20px;
			box-sizing: border-box;
			.p-t-t {
				width: 60px;
				height: 100%;
				display: flex;
				align-items: center;
				img {
					height: auto;
					width: 30px;
				}
				p {
					font-size: 26px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			.p-t-n {
				color: #333;
				font-size: 36px;
			}
			.p-t-r {
				color: #3FB94D;
				font-size: 36px;
			}
		}
	}
</style>