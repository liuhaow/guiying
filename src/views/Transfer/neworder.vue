<template>
	<div class="neword">
		<ul>
			<li v-for="item in 20">
				<div class="quhuo">
					<h2>
						<img src='../../../static/img/doizy.png'/>
						<span>取货</span>
					</h2>
					<h3>浙江省嵊州市高新区海智中心3幢409室</h3>
				</div>
				<div class="quhuo">
					<h2>
						<img src='../../../static/img/doizy.png'/>
						<span>送达</span>
					</h2>
					<div class="gongda">
						<h3>浙江省嵊州市高新区海智中心3幢409室</h3>
						<p><span>联系人：</span> <span>联系电话：</span></p>
					</div>

				</div>
				<h4 class="jiedan">立即接单</h4>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.neword {
		width: 100%;
		height: 100%;
		overflow: auto;
		ul {
			height: 100%;
			overflow: auto;
			padding-top: 20px;
			box-sizing: border-box;
			li {
				margin: 0 auto 20px;
				width:96%;
				height: 422px;
				background: rgba(255, 255, 255, 1);
				border-radius: 16px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.jiedan {
					height: 80px;
					background: rgba(63, 185, 77, 1);
					line-height: 80px;
					text-align: center;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					border-radius:0 0 16px 16px;
					
					color: rgba(255, 255, 255, 1);

					
				}
				.quhuo {
					display: flex;
					height: 170px;
					align-items: center;
					h2 {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 140px;
						font-size: 22px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(204, 204, 204, 1);
						img {
							height: 36px;
							width: 36px;
							margin-bottom: 4px;
						}
					}
					h3 {
						font-size: 34px;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 40px;
					}
					.gongda {
						p {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							display: flex;
							justify-content: space-between;
							margin-top: 20px;
						}
					}
				}
			}
		}
	}
</style>