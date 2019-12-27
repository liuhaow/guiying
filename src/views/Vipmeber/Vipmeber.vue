<template>
	<div class="jifen">

		<div class="j-f-t">
			<h2 @click="back"><img src="../../../static/img/fanhui.png" alt="" /></h2>
			<h3>会员专区</h3>
			<h4>等级规则</h4>
		</div>
		<div class="j-f-b-n">
			<div class="huiyu">
				<div class="huiyu-t-l">
					<img src="../../../static/img/hj.png" />
					<div class="huyshj">
						<h2>黄金会员</h2>
						<h3>截止2019.12.16</h3>
					</div>
				</div>
				<h2 class="naetc">下一等级 铂金会员></h2>
			</div>
			<div class="jidu">
				<p></p>
			</div>
			<div class="c-z-z">
				<h2>当前成长值2888</h2>
				<h2>升级 <span>2888</span> / <span>5000</span></h2>
			</div>
		</div>
		<div class="hui-f">
			<h2 class="h-y-zhuan">会员专享价</h2>
			<h3 class="laix">600+超值低价商品等你来享</h3>
			<div class="allpin">
				<ul>
					<li v-for="(item,index) in 10">
						<img class="spimg" src="http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg" alt="" />
						<div class="">
							<div class="">
								<h2>兴业馆广西皇帝柑贡柑新鲜水果</h2>
								<h3>&yen;9.9 <span>会员价</span> <span>&yen;9.9</span></h3>
							</div>
							<div class="">
								
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				duih: false
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			makeData() {

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.jifen {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: auto;
		padding-bottom: 40px;
		box-sizing: border-box;
		.hui-f {
			padding: 0 20px;
			box-sizing: border-box;
			.h-y-zhuan {
				font-size: 36px;
				color: rgba(51, 51, 51, 1);
				margin: 70px 0 20px
			}
			.laix {
				font-size: 26px;
				color: rgba(153, 153, 153, 1);
				margin-bottom: 30px;
			}
			.allpin{
				height: 1020px;
				background: #fff;
				ul{
					height: 900px;
					overflow: auto;
					li{
						height: 180px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.spimg{
							height: 150px;
							width: 150px;
						}
					}
				}
			}
		}
		.j-f-b-n {
			height: 520px;
			background: url(../../../static/img/yuy.png) no-repeat;
			padding: 0 34px 0px;
			box-sizing: border-box;
			background-size: cover;
			.c-z-z {
				display: flex;
				justify-content: space-between;
				h2 {
					font-size: 24px;
					font-weight: 400;
					color: rgba(245, 245, 245, .8);
				}
			}
			.jidu {
				height: 8px;
				background: rgba(245, 245, 245, .5);
				margin: 30px 0;
				border-radius: 4px;
				p {
					width: 70%;
					height: 8px;
					background: #F8E7A2;
					border-radius: 4px;
				}
			}
			.huiyu {
				display: flex;
				justify-content: space-between;
				padding-top: 70px;
				align-items: flex-end;
				.naetc {
					font-size: 28px;
					font-weight: 400;
					color: rgba(255, 255, 255, .5);
				}
				.huiyu-t-l {
					display: flex;
					img {
						height: 76px;
						width: 76px;
					}
					.huyshj {
						display: flex;
						flex-direction: column;
						margin-left: 20px;
						justify-content: center;
						h2 {
							font-size: 32px;
							color: #F7E797;
							margin-bottom: 20px;
						}
						h3 {
							font-size: 24px;
							color: rgba(225, 225, 225, .8);
						}
					}
				}
			}
		}
		.j-f-t {
			display: flex;
			height: 100px;
			background: #fff;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			h2 {
				height: 100px;
				line-height: 100px;
				padding: 0 20px;
				img {
					height: 36px;
					width: 40px;
				}
			}
			h3 {
				font-size: 36px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			h4 {
				font-size: 30px;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>