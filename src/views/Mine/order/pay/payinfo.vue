<template>
	<div class="pay">
		<headt message='确认订单'></headt>
		<div class="pay-inf">
			<div class="p-i-t">
				<h2 class="p-t-h2"><span>{{morendata.name}}</span> <span>{{morendata.model}}</span></h2>
				<div class="pt-adrss">
					<p>{{morendata.adrss}}</p>
					<h3 @click="choseAdress"> 
						<i slot="icon" class="icon iconfont " >&#xe644;</i>
					</h3>
				</div>
			</div>
			<div class="p-i-nav">
				<ul>
					<li v-for='(item,index) in 3' :key='index'>
						<img src="http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg" alt="" />
					</li>
				</ul>
				<h2>
						共6件<i slot="icon" class="icon iconfont " >&#xe644;</i>					
					</h2>
			</div>
			<div class="zj-yj">
				<div class="csc-s">
					<h2>总计</h2>
					<h3>&yen;4366</h3>
				</div>
				<div class="csc-s">
					<h2>押金</h2>
					<h3>&yen;5344</h3>
				</div>
				<div class="csc-s">
					<h2>优惠券</h2>
					<div>
						<h5>0张可用</h5>
						<h4><span>-&yen;20</span> <i slot="icon" class="icon iconfont" >&#xe644;</i></h4></div>
				</div>
			</div>
			<div class="z-y-y">
				<h2>支付方式</h2>
				<div class="fanghi bord">
					<h3>
						<img src="../../../../../static/img/wxin.png" alt="" /> 微信支付
					</h3>
					<img src="../../../../../static/img/chos.png" v-if="chosd==1" alt="" />
					<img src="../../../../../static/img/choss.png" v-if="chosd==2" @click="chosd=1" alt="" />

				</div>
				<div class="fanghi">
					<h3>
						<img src="../../../../../static/img/zfb.png" alt="" /> 支付宝支付
					</h3>
					<img src="../../../../../static/img/choss.png" v-if="chosd==1" @click="chosd=2" alt="" />
					<img src="../../../../../static/img/chos.png" v-if="chosd==2" alt="" />
				</div>
			</div>
			<div class="beizhu">
				<h2>订单备注</h2>
				<div class="yaoqiu">
					<textarea name="" rows="" cols="" placeholder="可以告诉我们您的特殊要求"></textarea>
				</div>
			</div>
		</div>
		<div class="pay-ad">

		</div>
		<div class="pay-ft">
			<h2>
				实付 <span>&yen;3726786</span>
			</h2>
			<button @click="orderData">提交订单</button>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				chosd: 1
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				morendata: 'morendata'
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			choseAdress() {
				this.$router.push('/mine/adress')

			},
			orderData(){
				this.$router.push('/myorder/paystatu/2')			
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.pay {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.pay-ad {
			height: 52px;
			line-height: 52px;
			width: 100%;
			background: rgba(255, 200, 47, .2);
		}
		.pay-ft {
			height: 100px;
			width: 100%;
			background: #fff;
			display: flex;
			justify-content: space-between;
			padding: 0 20px;
			box-sizing: border-box;
			align-items: center;
			h2 {
				font-size: 32px;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				span {
					color: #FB7016!important;
				}
			}
			button {
				width: 300px;
				height: 76px;
				background: linear-gradient(90deg, rgba(255, 101, 1, 1), rgba(251, 113, 23, 1));
				font-size: 32px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				border-radius: 38px;
				border: none;
			}
		}
		.pay-inf {
			flex: 1;
			overflow: auto;
			padding: 20px;
			box-sizing: border-box;
			.beizhu {
				height: 364px;
				padding: 0 20px;
				margin-top: 20px;
				box-sizing: border-box;
				background: rgba(255, 255, 255, 1);
				border-radius: 8px;
				h2 {
					height: 90px;
					line-height: 90px;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
				.yaoqiu {
					height: 100%;
					height: 260px;
					padding: 20px;
					box-sizing: border-box;
					background: #F5F5F5;
					textarea {
						border: none;
						height: 100%;
						width: 100%;
						font-size: 26px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
						background: none;
					}
				}
			}
			.zj-yj {
				padding: 0 20px;
				height: 240px;
				box-sizing: border-box;
				background: rgba(255, 255, 255, 1);
				border-radius: 8px;
				margin-bottom: 20px;
				.csc-s {
					height: 80px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					h2 {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
					h3 {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						padding-right: 20px;
					}
					div {
						display: flex;
						h5 {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
							margin-right: 20px;
						}
						h4 {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(255, 101, 1, 1);
							i {
								color: #333!important;
							}
						}
					}
				}
			}
			.z-y-y {
				padding: 0 10px;
				height: 240px;
				box-sizing: border-box;
				background: rgba(255, 255, 255, 1);
				border-radius: 8px;
				h2 {
					height: 80px;
					line-height: 80px;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
				.bord {
					border-bottom: 2px solid #E1E1E1;
					border-top: 2px solid #E1E1E1;
				}
				.fanghi {
					display: flex;
					height: 80px;
					align-items: center;
					justify-content: space-between;
					padding: 0 10px;
					box-sizing: border-box;
					img {
						height: 42px;
						width: 42px;
					}
					h3 {
						font-size: 26px;
						font-family: PingFang SC;
						font-weight: 500;
						color:rgba(51, 51, 51, 1) img {
							height: 42px!important;
							width: 42px!important;
						}
					}
				}
			}
			.p-i-nav {
				height: 220px;
				margin: 20px 0;
				padding: 0 20px;
				box-sizing: border-box;
				background: rgba(255, 255, 255, 1);
				border-radius: 8px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				ul {
					display: flex;
					li {
						img {
							height: 152px;
							width: 152px;
							margin-right: 5px;
						}
					}
				}
				h2 {
					font-size: 28px;
					font-family: PingFang SC;
					width: 120px;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			.p-i-t {
				height: 210px;
				background: rgba(255, 255, 255, 1);
				border-radius: 8px;
				padding: 0 20px;
				box-sizing: border-box;
				.p-t-h2 {
					height: 90px;
					line-height: 90px;
					margin-bottom: 10px;
					span {
						font-size: 34px;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(0, 0, 0, 1);
					}
				}
				.pt-adrss {
					height: 100px;
					display: flex;
					justify-content: space-between;
					p {
						width: 80%;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 32px;
					}
					h3 {
						height: 100%;
						padding: 0 20px;
						i {
							font-size: 32px;
							color: #333;
						}
					}
				}
			}
		}
	}
</style>