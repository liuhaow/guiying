<template>
	<div class="adress">
		<div class="mor-t">
			<img @click="back" src="../../../assets/back.jpg" alt="" /> 选择收货地址
		</div>
		<div class="adress-l">
			<div style="height: 100%;overflow: auto;">
				<ul>
					<li v-for="(item,index) in 10" :key='index'>
						<div class="ad-t">
							<h2><span class="spn-a">小凤仙</span><span>132****5876</span></h2>
							<h3>浙江省 杭州市 余杭区好运街风雅乐府20幢二单元...</h3>
						</div>
						<div class="ad-f">
							<div class="ad-f-l">
								<h2>设为默认</h2>
							</div>
							<div class="ad-f-r">
								<h3>切换为此地址</h3>
								<h4>编辑</h4>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="addAredd">
			<button @click="tianAddate">+ 添加收货地址</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			tianAddate(){
				var that = this
				that.$router.push('/mine/address')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.adress {
		position: absolute;
		left:0;
		top:0;
		right:0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
		.adress-l {
			flex: 1;
			overflow: auto;
			ul {
				li {
					width: 710px;
					height: 252px;
					background: rgba(255, 255, 255, 1);
					padding: 0 15px;
					box-sizing: border-box;
					border-radius: 8px;
					margin: 20px auto 0;
					.ad-t {
						height: 170px;
						border-bottom: 2px solid #E1E1E1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						h2 {
							font-size: 30px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(0, 0, 0, 1);
							margin-bottom: 35px;
							.spn-a {
								margin-right: 20px;
							}
						}
						h3 {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
					.ad-f {
						display: flex;
						justify-content: space-between;
						height: 80px;
						align-items: center;
						.ad-f-r {
							display: flex;
							align-items: center;
							h3 {
								width: 168px;
								height: 42px;
								border: 2px solid rgba(225, 225, 225, 1);
								border-radius: 3px;
								font-size: 24px;
								font-family: PingFang SC;
								font-weight: 400;
								line-height: 42px;
								text-align: center;
								color: rgba(0, 0, 0, 1);
								margin-right: 30px;
							}
							h4 {
								width: 128px;
								height: 42px;
								line-height: 42px;
								text-align: center;
								border: 2px solid rgba(225, 225, 225, 1);
								border-radius: 3px;
								font-size: 24px;
								font-family: PingFang SC;
								font-weight: 400;
								color: rgba(0, 0, 0, 1);
							}
						}
					}
				}
			}
		}
		.addAredd {
			position: fixed;
			bottom: 170px;
			display: flex;
			width: 100%;
			justify-content: center;
			button {
				width: 336px;
				height: 80px;
				border: 2px solid rgba(204, 204, 204, 1);
				border-radius: 40px;
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		.adress-l {
			height:
		}
		.mor-t {
			height: 88px;
			position: relative;
			line-height: 88px;
			text-align: center;
			background: #fff;
			font-size: 36px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 2px;
			img {
				position: absolute;
				height: 36px;
				width: 20px;
				z-index: 3;
				left: 20px;
				padding-left: 20px;
				top: 28px;
			}
		}
	}
</style>