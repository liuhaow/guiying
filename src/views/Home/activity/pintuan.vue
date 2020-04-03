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
						<p>拼团价</p>
						<h2>&yen;{{messgein.show_price}} <span>已拼{{messgein.group_num}}件</span></h2>
					</div>
					<div class="x-q-l-t-r">

						<h2>百万补贴</h2>
					</div>
				</div>
				<div class="x-q-l-f">
					<p>{{messgein.goods_name}}</p>
					<ul class="fenshu" v-if='messgein.is_sku ==1'>
						<li v-for='(item,index) in guige' @click="changestyle(index+1,item.sku_id,item)" :class="{'ckode':choseid==index+1}" :key='index'>{{item.specification}}</li>
					</ul>
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
			<div class="share">
				<div class="sh-t">
					<p>火爆团购中，仅剩49件</p>
					<h2>
						<img v-for="item in 2" src="../../../assets/cat.jpg"/>
					</h2>
				</div>
				<div class="share-r">
					邀请好友拼团
				</div>
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
			<!--<pinglun :message='messgein.evl' :numb='messgein.group_num'></pinglun>-->
			<div class="xiang-q">
				<van-divider :style="{ color: '#333', borderColor: '#333', padding: '0 10px' }">
					详情
				</van-divider>
				<img v-for='(item,index) in messgein.img' :src="item.image" alt="" />
			</div>
			
			<baokuand></baokuand>
			
		</div>
		<van-goods-action>
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
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { tuangoudetail } from '@/api/api'
	import { addshopcar } from '@/api/mine'
	import { Dialog,Toast } from 'vant';
	import baokuand from '@/components/baokuand'
	

	export default {
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				current: 0,
				canshu: false,
				messgein: '',
				pinglun: [],
				guigeid:'',
				choseid:0,
				guige:[]

			}
		},
		components: {
			headt,
			baokuand

		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let idt = this.$route.params.id
			console.log(idt)
			let data = {
				group_id: idt
			}
			tuangoudetail(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					if(res.data.data.is_sku == 1) {
						this.guige = res.data.data.sku
					}
					this.messgein = res.data.data;
					this.pinglun = res.data.data.evl;
					this.images = res.data.data.zhutu;
					this.time = res.data.data.countdown;
					this.current =res.data.data.evl_count
					
				}
			})
		},
		methods: {
			changestyle(iden, idt, item) {
				var that = this;
				that.guigeid = idt;
				that.choseid = iden;

			},
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
					classify: 2

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
					classify: 2

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
			goShoping(idt) {
				var that = this
				if(that.messgein.is_sku == 1 && !that.guigeid) {
					Toast.fail('没有选择规格');
					return
				} else if(that.messgein.is_sku == 1 && that.guigeid) {
					that.$router.push({
						path: '/miaospay',
						query: {
							id: idt,
							type: 2,
							skid: that.guigeid
						}
					})
				} else {
					that.$router.push({
						path: '/miaospay',
						query: {
							id: idt,
							type: 2,
							skid: 0
						}
					})
				}
				
				
			},
			
			checkout(idt) {
				this.$router.push({
					path: '/home/pingjia',
					query: {
						cid: idt,
						type: 2
					}
				})

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.addxuqu {
		padding-bottom: 100px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
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
			.share {
				height: 140px;
				margin-bottom: 20px;
				background: rgba(63, 185, 77, .4);
				width: 100%;
				display: flex;
				justify-content: space-between;
				padding: 0 30px;
				box-sizing: border-box;
				align-items: center;
				.sh-t {
					height: 110px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					p {
						color: #3FB94D;
						font-size: 24px;
						font-weight: 600;
					}
					h2 {
						img {
							width: 72px;
							height: 72px;
							border-radius: 50%;
							margin-right: 5px;
						}
					}
				}
				.share-r {
					width: 240px;
					height: 68px;
					font-size: 28px;
					line-height: 68px;
					color: #fff;
					text-align: center;
					background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
					border-radius: 34px;
				}
			}
			.x-q-l {

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
						justify-content: center;
						align-items: center;
						background: linear-gradient(90deg, rgba(249, 224, 170, 1), rgba(255, 237, 198, 1));
						h2 {
							font-size: 36px;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(254, 65, 74, 1);
						}
					}
				}
				.x-q-l-f {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					background: #fff;
					p {
						font-size: 32px;
						padding: 20px 0;
						font-family: PingFang SC;
						width: 96%;
						font-weight: bold;
						line-height: 42px;
						color: rgba(51, 51, 51, 1);
					}
					.fenshu {
						width: 100%;
						background: #fff;
						display: flex;
						flex-wrap: wrap;
						padding: 0 30px;
						box-sizing: border-box;
						li {
							min-width: 120px;
							height: 60px;
							margin: 0 20px 20px 0;
							line-height: 60px;
							text-align: center;
							border: 1px solid #e1e1e1;
							font-size: 20px;
							color: #000;
							border-radius: 5px;
						}
						.ckode {
							background: #3fb94d !important;
							color: #fff!important;
						}
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
		min-height: 100px;
		width: 100%;
		background: #fff;
		padding-bottom: 40px;
		margin-bottom: 20px;
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