<template>
	<div class="addxuqu" ref="scollElement">
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
				<div class="x-q-l-f">
					<p>{{messgein.title}}</p>
					<div class="jiage">
						<h1>&yen;{{dtdaf.now_price}} </h1>
						<h2>原价：{{dtdaf.old_price}}</h2>
					</div>
				</div>
				<ul class="fenshu" v-if='messgein.is_sku ==1'>
					<li v-for='(item,index) in guige' @click="changestyle(index+1,item.id,item)" :class="{'ckode':choseid==index+1}" :key='index'>{{item.specification}}</li>
				</ul>
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
					<button @click="checkout(messgein.id)">查看更多({{current}})</button>
				</div>
			</div>
			<div class="xiangq-jie" v-if='messgein.detailspic'>
				<van-divider :style="{ color: '#333', borderColor: '#333', padding: '0 10px' }">
					详情
				</van-divider>
				<img class="imgdy" v-for="(itd,index) in messgein.detailspic" :src="itd.image" alt="" />
			</div>
			<!--<pinglun :message='messgein.evl' :numb='messgein.group_num'></pinglun>-->

			<div class="guess-i">
				<van-divider :style="{ color: '#9999', borderColor: '#999', padding: '0 40px' }">
					猜你喜欢
				</van-divider>
				<ul class="guess-list">
					<li v-for="(item,index) in mlist">
						<div class="list-t" @click="checkdetail(item.id)">
							<img :src="item.cover" />
						</div>
						<p @click="checkdetail(item.id)">{{item.title}}</p>
						<div class="goumai">
							<h2 @click="checkdetail(item.id)">&yen;{{item.now_price}}</h2>
							<h3 @click="addhouwuAddt(item)">
						<img src="../../static/img/jgwc.png" />
					</h3>
						</div>
					</li>
				</ul>
			</div>

		</div>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="加常用" @click='addShopdata()' />
			<van-goods-action-icon icon="shop-o" text="购物车" @click='addgocar()' />
			<van-goods-action-button color="#262C41" type="warning" @click='addhouwuAdd()' text="加入购物车" />
			<van-goods-action-button color="#3FB94D" type="danger" @click='goShoping()' text="立即购买" />
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

	import { putongspInfo, zhifubastaosuss } from '@/api/api'
	import { addshopcar, guessylove } from '@/api/mine'
	import { Dialog, Toast, Notify } from 'vant';
	//	import baokuan from '@/components/baokuan'

	export default {
		data() {
			return {
				images: [
					'https://img.yzcdn.cn/vant/apple-1.jpg',
					'https://img.yzcdn.cn/vant/apple-2.jpg'
				],
				current: 0,
				canshu: false,
				choseid: 0,
				guigeid: '',
				messgein: '',
				pinglun: [],
				ift: '',
				mlist: [],
				dtdaf: '',
				guige: [{
						gui: '3斤'
					},
					{
						gui: '5斤'
					}, {
						gui: '8斤'
					}
				]

			}
		},
		components: {
			headt
			//,
			//			baokuan

		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let idt = this.$route.params.id
			this.ift = idt

			let data = {
				cid: idt,
				page: 1
			}

			putongspInfo(data).then(res => {

				if(res.data.code == 200) {
					this.messgein = res.data.data;

					let dtd = {
						old_price: res.data.data.old_price,
						now_price: res.data.data.now_price
					}
					this.dtdaf = dtd
					if(res.data.data.is_sku == 1) {
						this.guige = res.data.data.sku
					}
					this.pinglun = res.data.data.evl;
					this.images = res.data.data.mainpic;
					this.time = res.data.data.countdown;
					this.current = res.data.data.count_evl

				}
			})
			let pary = {
				token: this.TokenId

			}
			guessylove(pary).then(res => {
				if(res.data.code == 200) {
					this.mlist = res.data.data
				}
			})
		},
		methods: {
			
			changestyle(iden, idt, item) {

				var that = this;
				let dtd = {
					old_price: item.old_price,
					now_price: item.now_price
				}
				that.dtdaf = dtd
				that.guigeid = idt;
				that.choseid = iden;

			},
			addgocar() {
				if(this.TokenId == '') {
					Dialog.confirm({
						title: '提示',
						message: '需要登录后才可以查看呦'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {
						this.$router.push('/need/home')

					});
					return
				}
				this.$router.push('/mycar')
			},
			checkdetail(idt) {
				var that = this
				that.ift = idt

				that.$refs.scollElement.scrollTop = 0;
				console.log(idt)
				let data = {
					cid: idt,
					page: 1
				}
				putongspInfo(data).then(res => {
					if(res.data.code == 200) {
						let dtd = {
							old_price: res.data.data.old_price,
							now_price: res.data.data.now_price
						}
						if(res.data.data.is_sku == 1) {
							this.guige = res.data.data.sku
						}
						this.dtdaf = dtd
						this.messgein = res.data.data;
						this.pinglun = res.data.data.evl;
						this.images = res.data.data.mainpic;
						this.time = res.data.data.countdown;
						this.current = res.data.data.count_evl

					}
				})
			},
			//猜你喜欢加入购物车
			addhouwuAddt(idt) {
				if(this.TokenId == '') {

					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let kind
				if(idt.is_sku == 0) {
					kind = 0
				} else if(idt.is_sku == 1) {
					kind = idt.sku_id
				}
				let data = {
					token: this.TokenId,
					cid: idt.id,
					commodity_cover: idt.cover,
					commodity_old_price: idt.old_price,
					commodity_now_price: idt.now_price,
					commodity_title: idt.title,
					num: 1,
					type: 1,
					classify: 1,
					sku_id: kind

				}
				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Toast.success(res.data.msg);
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			//加购物车
			addhouwuAdd() {
				var that = this
				if(that.TokenId == '') {

					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						that.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let kind
				if(that.messgein.is_sku == 0) {
					kind = 0
				} else if(that.messgein.is_sku == 1 && !that.guigeid) {
					Toast.fail('没有选择规格');
					return
				} else if(that.messgein.is_sku == 1 && that.guigeid) {
					kind = that.guigeid
				}
				let data = {
					token: that.TokenId,
					cid: that.messgein.id,
					num: 1,
					type: 1,
					classify: 1,
					commodity_cover: that.messgein.cover,
					commodity_old_price: that.messgein.old_price,
					commodity_now_price: that.messgein.now_price,
					commodity_title: that.messgein.title,
					sku_id: kind
				}
				console.log(data)

				addshopcar(data).then(res => {

					if(res.data.code == 200) {
						Toast.success(res.data.msg);

					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			addShopdata() {

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
					cid: this.messgein.id,
					num: 1,
					type: 2,
					classify: 1,
					sku_id: this.messgein.is_sku,
					commodity_cover: this.messgein.cover,
					commodity_old_price: this.messgein.old_price,
					commodity_now_price: this.messgein.now_price,
					commodity_title: this.messgein.title
				}

				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						Toast.success(res.data.msg);

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
						path: '/myorder/payinfo',
						query: {
							id: that.messgein.id,
							type: 1,
							skid: that.guigeid
						}
					})
				} else {
					that.$router.push({
						path: '/myorder/payinfo',
						query: {
							id: that.messgein.id,
							type: 1,
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
						type: 1
					}
				})

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.guess-i {
		margin-top: 60px;
		width: 100%;
		.guess-list {
			justify-content: space-around;
			flex-wrap: wrap;
			display: flex;
			li {
				width: 360px;
				background: #fff;
				margin-bottom: 10px;
				border-radius: 10px;
				padding: 0 20px 20px;
				box-sizing: border-box;
				.list-t {
					width: 100%;
					height: 300px;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						width: 260px;
						height: 260px;
					}
				}
				p {
					font-size: 26px;
					line-height: 50px;
					font-weight: 500;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 50px;
					color: rgba(51, 51, 51, 1);
				}
				.goumai {
					display: flex;
					justify-content: space-between;
					align-items: center;
					h2 {
						font-size: 34px;
						width: 70%;
						height: 50px;
						line-height: 50px;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF6501;
					}
					h3 {
						img {
							width: 50px;
							height: 50px;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
	
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
			.x-q-l {
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
						padding :0 30px;
						text-align: center;
						border: 1px solid #e1e1e1;
						font-size: 24px;
						color: #000;
						border-radius: 5px;
					}
					.ckode {
						background: #3fb94d !important;
						color: #fff!important;
					}
				}
				.x-q-l-f {
					height: 140px;
					display: flex;
					align-items: center;
					flex-direction: column;
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
					.jiage {
						display: flex;
						margin-top: 20px;
						width: 100%;
						height: 50px;
						padding: 0 20px;
						box-sizing: border-box;
						align-items: center;
						h1 {
							font-size: 42px;
							color: #FF6501;
							margin-right: 20px;
						}
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							text-decoration: line-through;
							color: rgba(204, 204, 204, 1);
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
	
	.xiangq-jie {
		width: 100%;
		.imgdy {
			width: 100%;
			height: auto;
		}
	}
	
	.pinglu {
		min-height: 100px;
		width: 100%;
		padding-bottom: 40px;
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
				padding-bottom: 70px;
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