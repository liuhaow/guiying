<template>
	<div class="wuliu">
		<headt message='支付结果'></headt>

		<div class="wu-l">
			<div class="zhisuss" v-if='idtcg==1'>
				<img src="../../../../../static/img/zhipay.png" alt="" />
				<h2>支付成功</h2>
				<p>恭喜您支付成功，我们将在24小时内安排发货！</p>
				<div class="btnd">
					<button>查看订单</button><button>继续购买</button>
				</div>
			</div>
			<div class="zhisuss" v-else>
				<img src="../../../../../static/img/shib.png" alt="" />
				<h2>支付失败</h2>
				<p>请在5分钟内完成付款，否则订单会被取消</p>
				<div class="btnd">
					<button>查看订单</button><button>重新支付</button>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'

	export default {
		data() {
			return {
				idtcg: ''
			}
		},
		components: {
			headt

		},
		mounted() {
			this.idtcg = this.$route.params.id;

		},

		methods: {
			pingjiaData(idt) {
				this.$router.push('/myorder/pingjia/2')
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
		.wu-l {
			flex: 1;
			overflow: auto;
			display: flex;
			background: #FFFFFF;
			flex-direction: column;
			.zhisuss {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img {
					height: 92px;
					width: 92px;
				}
				h2 {
					font-size: 42px;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					margin: 40px 0 20px;
					
				}
				p {
					font-size: 30px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					margin-bottom: 200px;

				}
				div {
					display: flex;
					justify-content: space-between;
					width: 70%;
					button {
						width: 240px;
						height: 80px;
						border: 2px solid rgba(153, 153, 153, 1);
						border-radius: 40px;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
					}
					button:nth-child(1){
						color: #999999;
						background: none;
					}
					button:nth-child(2){
						color: #999999;
						background: #3FB94D;
						color: #fff;
						border: 2px solid #3FB94D!important;
					}
				}
			}
		}
	}
</style>