<template>
	<div class="qiank">
		<div class="c-head">
			<h1 @click="back">
				<img src="../../../../static/back.jpg"/>
			</h1>
			<h2>欠款</h2>
			<h3>明细</h3>
		</div>
		<div class="qianq">
			<h2>欠款金额</h2>
			<h3>52,000</h3>
			<h4>为了日后更好的合作，请您尽快还款呦~</h4>
		</div>
		<div class="chong-f-s">
			<h2>还款方式</h2>
			<div class="chong-f-chos">
				<ul>
					<li>
						<div class="z-f-c-f">
							钱包余额：¥8848.60
						</div>
						<p @click="chos=1">
							<img v-if="chos==1" src="../../../../static/imges/my/cho.png" />

							<img v-if="chos==2" src="../../../../static/imges/my/quan.png" />

						</p>
					</li>
					<li>
						<div class="z-f-c-w">
							<img src="http://img1.imgtn.bdimg.com/it/u=4068955607,178387580&fm=26&gp=0.jpg" alt="" />微信支付
						</div>
						<p @click="chos=2">
							<img v-if="chos==2" src="../../../../static/imges/my/cho.png" />
							<img v-if="chos==1" src="../../../../static/imges/my/quan.png" />
						</p>
					</li>
					<li>
						<div class="z-f-c-f">
							<img src="http://img1.imgtn.bdimg.com/it/u=4068955607,178387580&fm=26&gp=0.jpg" alt="" />支付宝支付
						</div>
						<p @click="chos=3">
							<img v-if="chos==1" src="../../../../static/imges/my/quan.png" />

							<img v-if="chos==2" src="../../../../static/imges/my/cho.png" />
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="qian-f-f">
			<button>立即还款</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

				chos: 1,

			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.qiank {
		.qian-f-f {
			display: flex;
			margin-top: 100px;
			justify-content: center;
			button {
				width: 710px;
				height: 80px;
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
				border-radius: 40px;
				border: none;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}
		.chong-f-s {
			padding: 0 20px;
			box-sizing: border-box;
			.chong-f-chos {
				width: 700px;
				height: 330px;
				border-radius: 8px;
				padding: 0 15px;
				box-sizing: border-box;
				background: #fff;
				ul {
					height: 220px;
					li {
						display: flex;
						justify-content: space-between;
						height: 110px;
						align-items: center;
						.z-f-c-w {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							img {
								width: 42px;
								height: 34px;
								margin-right: 15px;
							}
						}
						.z-f-c-f {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							img {
								width: 42px;
								height: 42px;
								margin-right: 15px;
							}
						}
						p {
							img {
								width: 36px;
								height: 36px;
							}
						}
					}
					li:nth-child(2) {
						border-bottom: 2px solid #E1E1E1;
						border-top: 2px solid #E1E1E1;
					}
				}
			}
			h2 {
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 28px;
			}
		}
		.qianq {
			height: 550px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			h3 {
				font-size: 88px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(63, 185, 77, 1);
				margin: 30px 0 32px;
			}
			h4 {
				font-size: 26px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 204, 204, 1);
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
					height: 36px;
					width: 20px;
					padding: 40px;
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
	}
</style>