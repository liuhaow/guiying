<template>
	<div class="addxuqu">
		<headt message='商品详情'></headt>
		<div class="a-d-d">
			<div class="top-p-t">
				<van-swipe :autoplay="3000">
					<van-swipe-item v-for="(imgt, index) in images" :key="index">
						<img v-lazy="imgt.image" />
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="x-q-l">
				<div class="x-q-l-t">
					<div class="x-q-l-t-l">
						<p>抢购价</p>
						<h2>&yen;{{messgein.show_price}} <span>{{messgein.buyed_num}}件已售</span></h2>
					</div>
					<div class="x-q-l-t-r">
						<p>秒杀进行中</p>
						<h2>距离结束 <span>{{countDownList}}</span></h2>
					</div>
				</div>
				<div class="x-q-l-f">
					<p>{{messgein.goods_name}}</p>
				</div>
			</div>

			<div class="c-s-x-q">
				<div class="c-s-x-q-c">
					<h3>参数</h3>
					<div class="changm">
						<p>品牌：{{messgein.brand}}</p>
						<p>规格：{{messgein.specification}}</p>
					</div>
				</div>
				<h2 class="c-s-x-h" @click="canshu=true">
					<i slot="icon" class="icon iconfont ">&#xe644;</i>				
				</h2>
			</div>
			<div class="pinglu">
				<h1>宝贝评论</h1>
				<div class="p-l-l-s" v-if="pinglun.length!=0">
					<ul>
						<li v-for='(item,index) in pinglun' :key='index'>
							<div class="l-t-op">
								<div class="">
									<img :src="item.avatar" alt="" /><span>{{item.username}}</span>
								</div>
								<p>{{item.create_time}}</p>
							</div>
							<div class="l-t-nav">
								<van-rate v-model="item.level" readonly/>
							</div>
							<p class="l-t-ft">
								{{item.content}}
							</p>
						</li>
					</ul>
				</div>
				<div class="p-l-f-t" v-if="current>3">
					<button @click="checkout(messgein.goods_id)">查看更多({{messgein.evl_count}})</button>
				</div>
			</div>
			<div class="xiang-q">
				<van-divider :style="{ color: '#333', borderColor: '#333', padding: '0 10px' }">
					详情
				</van-divider>
				<img v-for='(item,index) in messgein.detailpic' :key='index' :src="item.image" alt="" />
			</div>
		</div>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="加常用" @click='addShopdata(messgein.goods_id)' />
			<van-goods-action-icon icon="shop-o" text="购物车" @click='addhouwuAdd(messgein.goods_id)' />
			<van-goods-action-button color="#262C41" type="warning" @click='addhouwuAdd(messgein.goods_id)' text="加入购物车" />
			<van-goods-action-button color="#3FB94D" type="danger" @click='goShoping(messgein.goods_id)' text="立即购买" />
		</van-goods-action>
		<van-popup v-model="canshu" closeable position="bottom" :style="{ height: '40%' }">
			<div class="can-s-x-q">
				<p class="can-shu">品牌：{{messgein.brand}}</p>
				<p class="can-shu">规格：{{messgein.specification}}</p>
				<p class="can-shu">等级：{{messgein.grade}}</p>
				<p class="can-shu">保存方式：{{messgein.Storage_method}}</p>

			</div>

		</van-popup>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import pinglun from './pinglun'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { Dialog } from 'vant';

	import { Mkilldetail } from '@/api/api'
	import { addshopcar } from '@/api/mine'
	export default {
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				messgein: '',
				current: 0,
				canshu: false,
				pinglun: [],
				countDownList: '00:00:00',
				actEndTime: '2020-01-13 18:50:00'

			}
		},
		components: {
			headt,
			pinglun
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			var that = this
			let idt = that.$route.params.id
			console.log(idt)
			let data = {
				spike_id: idt
			}
			Mkilldetail(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					that.messgein = res.data.data;
					that.actEndTime=res.data.data.endtime;
					console.log(that.actEndTime)
					that.pinglun = res.data.data.evl;
					that.images = res.data.data.zhutu;
					that.time = res.data.data.countdown;
					that.current = res.data.data.evl_count
					that.countDown()
				}
			})
		},
		methods: {
			addhouwuAdd(idt) {
				if(this.TokenId == '') {

					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let data = {
					token: this.TokenId,
					cid: idt,
					num: 1,
					type: 1,
					classify: 3

				}
				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			addShopdata(idt) {
				if(this.TokenId == '') {

					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let data = {
					token: this.TokenId,
					cid: idt,
					num: 1,
					type: 2,
					classify: 3

				}
				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})

			},
			goShoping() {
				console.log('立即购买')
			},
			checkout(idt) {
				this.$router.push({
					path: '/home/pingjia',
					query: {
						cid: idt,
						type: 3
					}
				})

			},
			timeFormat(param) {　　　　　　
				return param < 10 ? '0' + param : param;　　　　
			},
			countDown() {　　
				var  that =this　
				var interval = setInterval(() => {　　　　　　　　 // 获取当前时间，同时得到活动结束时间数组
					　　　　　　　　
					let newTime = new Date().getTime();　　　　　　　　 // 对结束时间进行处理渲染到页面
					　　　　　　　　
					let endTime = new Date(this.actEndTime).getTime();　　

					let obj = null;　　　　　　　　 // 如果活动未结束，对时间进行处理
					　　　　　　　　
					if(endTime - newTime > 0) {　　　　　　　　　　
						let time = (endTime - newTime) / 1000;　　　　　　　　　　 // 获取天、时、分、秒
						　　　　　　　　　　
						let day = parseInt(time / (60 * 60 * 24));　　　　　　　　　　
						let hou = parseInt(time % (60 * 60 * 24) / 3600);　　　　　　　　　　
						let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);　　　　　　　　　　
						let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);　　　　　　　　　　
						obj = {　　　　　　　　　　　　
							day: that.timeFormat(day),
	　　　　　　　　　　　　 hou: that.timeFormat(hou),
	　　　　　　　　　　　　 min: that.timeFormat(min),
	　　　　　　　　　　　　 sec: that.timeFormat(sec)　　　　　　　　　　
						};　　　　　　　　
					} else { // 活动已结束，全部设置为'00'
						　　　　　　　　　　
						obj = {　　　　　　　　　　　　
							hou: '00',
	　　　　　　　　　　　　 min: '00',
	　　　　　　　　　　　　 sec: '00'　　　　　　　　　　
						};　　　　　　　　　　
						clearInterval(interval);　　　　　　　　
					}　　　　　　　　
					that.countDownList = obj.hou + ':' + obj.min + ':' + obj.sec;　　　　

				}, 1000);　　　　
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.addxuqu {
		padding-bottom: 100px;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		>>>.van-popup {
			.can-s-x-q {
				height: 100%;
				padding: 70px 20px 0;
				box-sizing: border-box;
				p {
					font-size: 34px;
					line-height: 40px;
					margin: 14px 0;
					color: #333;
				}
			}
		}
		.a-d-d {
			flex: 1;
			overflow: auto;
			.xiang-q {
				img {
					width: 100%;
					height: auto;
				}
			}
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
							font-size: 32px;
							font-family: PingFang SC;
							font-weight: 500;
							display: flex;
							color: #fff;
							span {
								width: 121px;
								margin-left: 6px;
								display: block;
								height: 33px;
								line-height: 33px;
								text-align: center;
								font-size: 24px!important;
								background: rgba(0, 0, 0, .1);
								border-radius: 17px;
							}
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
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	
	.pinglu {
		width: 100%;
		background: #fff;
		h1 {
			font-size: 30px;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			background: #fff;
			padding: 40px 20px;
			box-sizing: border-box;
		}
		.p-l-f-t {
			display: flex;
			justify-content: center;
			padding-bottom: 30px;
			button {
				width: 280px;
				height: 62px;
				border: 2px solid rgba(225, 225, 225, 1)!important;
				border-radius: 31px;
				font-size: 26px;
				font-family: PingFang SC;
				background: #fff;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		.p-l-l-s {
			ul {
				padding-bottom: 30px;
				li {
					background: #fff;
					border-bottom: 2px solid #E1E1E1;
					padding: 0 20px;
					box-sizing: border-box;
					.l-t-ft {
						font-size: 26px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 44px;
						padding-bottom: 40px;
					}
					.l-t-nav {
						padding: 20px 0;
					}
					.l-t-op {
						display: flex;
						width: 100%;
						justify-content: space-between;
						padding-top: 30px;
						p {
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
						div {
							img {
								width: 68px;
								height: 68px;
								border: 1px solid rgba(225, 225, 225, 1);
								border-radius: 50%;
							}
							span {
								font-size: 28px;
								font-family: PingFang SC;
								font-weight: 500;
								margin-left: 20px;
								color: rgba(51, 51, 51, 1);
							}
						}
					}
				}
			}
		}
	}
</style>