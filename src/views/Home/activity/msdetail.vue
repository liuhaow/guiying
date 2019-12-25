<template>
	<div class="addxuqu">
		<headt message='商品详情'></headt>
		<div class="a-d-d">
			<div class="top-p-t">
				<van-swipe :autoplay="3000">
					<van-swipe-item v-for="(image, index) in images" :key="index">
						<img v-lazy="image" />
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="x-q-l">
				<div class="x-q-l-t">
					<div class="x-q-l-t-l">
						<p>抢购价</p>
						<h2>&yen;68 <span>60件已售</span></h2>
					</div>
					<div class="x-q-l-t-r">
						<p>秒杀进行中</p>
						<h2>距离结束 <span>00:00:00</span></h2>
					</div>
				</div>
				<div class="x-q-l-f">
					<p>大宅蟹礼品券石庄煮大闸蟹6只（389） 阳澄湖大宅蟹</p>
				</div>
			</div>

			<div class="c-s-x-q">
				<div class="c-s-x-q-c">
					<h3>参数</h3>
					<div class="changm">
						<p>厂名：苏州市阳澄湖九百亩生态农业
						</p>
						<p>
							厂址：昆山巴城厂家
						</p>
					</div>
				</div>
				<h2 class="c-s-x-h" @click="canshu=true">
					<i slot="icon" class="icon iconfont ">&#xe644;</i>
					
				</h2>
			</div>
			<pinglun></pinglun>
		</div>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="加常用" @click='addShopdata()' />
			<van-goods-action-icon icon="shop-o" text="购物车" @click='addShoping()' />
			<van-goods-action-button color="#262C41" type="warning" @click='addShoping()' text="加入购物车" />
			<van-goods-action-button color="#3FB94D" type="danger" @click='goShoping()' text="立即购买" />
		</van-goods-action>
		<van-popup v-model="canshu" closeable position="bottom" :style="{ height: '50%' }" >
			<div class="can-s-x-q">
				<p class="can-shu">面料：</p>
				<p>身高：</p>
				<p class="can-shu">面料：</p>
				<p>身高：</p>
				<p class="can-shu">面料：</p>
				<p>身高：</p>
			</div>
		
		</van-popup>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import pinglun from './pinglun'
	export default {
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				current: 0,
				canshu: false
			}
		},
		components: {
			headt,
			pinglun
		},
		methods: {
			addShoping() {
				console.log(1)
			},
			addShopdata() {
				console.log('加长')

			},
			goShoping() {
				console.log('立即购买')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.addxuqu {
		padding-bottom: 100px;
		height: 100%;
		box-sizing: border-box;
		>>>.van-popup{
			.can-s-x-q{
				height: 100%;
				padding:70px 20px 0 ;
				box-sizing: border-box;
				p{
					font-size: 34px;
					line-height: 40px;
					margin: 14px 0;
					color: #333;
				}
			}
		}
		.a-d-d {
			.x-q-l {
				height: 280px;
				.x-q-l-t {
					height: 140px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.x-q-l-t-l {
						width: 60%;
						height: 140px;
						padding-left: 20px;
						box-sizing: border-box;
						background: linear-gradient(90deg, rgba(252, 61, 33, 1), rgba(254, 134, 56, 1));
						display: flex;
						flex-direction: column;
						justify-content: center;
						p {
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
							opacity: 0.8;
							margin-bottom: 30px;
						}
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
						}
					}
					.x-q-l-t-r {
						width: 40%;
						height: 140px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background: linear-gradient(90deg, rgba(249, 224, 170, 1), rgba(255, 237, 198, 1));
						p {
							width: 148px;
							height: 40px;
							line-height: 40px;
							font-size: 24px;
							color: #fff;
							text-align: center;
							background: linear-gradient(90deg, rgba(255, 101, 1, 1), rgba(254, 134, 56, 1));
							border-radius: 15px;
							margin-bottom: 30px;
						}
						h2 {
							text-align: center;
							height: 25px;
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(252, 66, 35, 1);
							span {
								margin-left: 3px;
							}
						}
					}
				}
				.x-q-l-f {
					height: 140px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #fff;
					p {
						font-size: 32px;
						font-family: PingFang SC;
						width: 96%;
						font-weight: bold;
						line-height: 42px;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
			.c-s-x-q {
				margin: 20px 0;
				background: #fff;
				height: 160px;
				padding: 20px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.c-s-x-h {
					font-size: 33px;
					color: #CCCCCC;
					padding: 0 30px;
					height: 100%;
					display: flex;
					align-items: center;
				}
				.c-s-x-q-c {
					display: flex;
					height: 100%;
					h3 {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
						margin-right: 20px;
					}
					.changm {
						height: 80%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						p {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
				}
			}
			.top-p-t {
				height: 600px;
				background: #fff;
				>>>.van-swipe {
					/*.custom-indicator {
						width: 76px;
						height: 40px;
						background: rgba(0, 0, 0, .2);
						border-radius: 20px;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(245, 245, 245, 1);
					}*/
					width: 100%;
					height: 600px;
					.van-swipe__track {
						display: flex;
						align-items: center;
						.van-swipe-item {
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
					img {
						width: 80%;
						height: auto;
					}
				}
			}
		}
	}
</style>