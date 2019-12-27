<template>
	<div class="wuliu">
		<headt message='申请成功' v-if='idtcgty==1'></headt>
		<headt message='申请失败' v-else></headt>

		<div class="wu-l">
			<div class="zhisuss" v-if='idtcgty==1'>
				<img src="../../../../../static/img/zhipay.png" alt="" />
				<h2>退款退货成功</h2>
				<h4> 退款金额：<span>85.20元</span></h4>
				<p>退款成功时间：2019-09-30 09:00:15:20</p>
				<div class="btnf">
					<button class="jixu">继续购买</button>
				</div>
			</div>
			<div class="zhisuss" v-else>
				<img src="../../../../../static/img/shib.png" alt="" />
				<h2>很抱歉，您的申请失败！</h2>
				<p>商家拒绝了您的申请</p>
				<div class="btnd">
					<button class="xiuh">修改申请</button><button class="jixu">继续购买</button>
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
				idtcgty: 1,
				chsg: 1
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
				h4 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					margin: 20px 0;
					span {
						color: #FF6501!important;
					}
				}
				p {
					font-size: 30px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					margin-bottom: 90px;
				}
				.btnf{
					display: flex;
					justify-content: center;
					width: 70%;
					.jixu {
						color: #999999;
						background: #3FB94D;
						color: #fff;
						border: 2px solid #3FB94D!important;
						width: 240px;
						height: 80px;
						border-radius: 40px;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
					}
				}
				.btnd {
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
					.xiuh {
						color: #999999;
						background: none;
					}
					.jixu {
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