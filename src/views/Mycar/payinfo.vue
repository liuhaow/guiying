<template>
	<div class="pay">
		<headt message='确认订单'></headt>
		<div class="pay-inf">
			<div class="p-i-t">
				<h2 class="p-t-h2"><span>{{morendata.name}}</span> <span>{{morendata.mobile}}</span></h2>
				<div class="pt-adrss">
					<p>{{morendata.area}}-{{morendata.addr}}</p>
					<h3 @click="choseAdress"> 
						<i slot="icon" class="icon iconfont " >&#xe644;</i>
					</h3>
				</div>
			</div>
			<div class="p-i-nav">
				<ul>
					<li v-for="(item,index) in xuanzh">
						<img :src="item.cover" alt="" />
					</li>
				</ul>
				<p class="chakan" @click="qindandata"> <img src="../../assets/img/zhank.png" /> </p>
			</div>
			<div class="zj-yj">
				<div class="csc-s">
					<h2>总价</h2>
					<h3>&yen;{{all_money}}</h3>
				</div>
				<div class="csc-s">
					<h2>押金</h2>
					<h3>&yen;{{deposit}}</h3>
				</div>
				<div class="csc-s">
					<h2>优惠券</h2>
					<div @click="youhuodataquan">
						<h5>{{value}}</h5>
						<h4><span></span> <i slot="icon"  class="icon iconfont" >&#xe644;</i></h4>
					</div>
				</div>
			</div>
			<div class="z-y-y">
				<h2>支付方式</h2>

				<div class="fanghi bord" v-for='(item,index) in zhifu' :key='index' @click="chosezhifu(index)">
					<h3>
						<img :src="item.img" alt="" v-if='index>0' /> 
						{{item.name}}
						<span v-if='index==0' class="jinqian">{{money}}</span>
					</h3>
					<img src="../../../static/img/choss.png" v-if="chosd !=index" alt="" />
					<img src="../../../static/img/chos.png" v-if="chosd ==index" alt="" />
				</div>

			</div>
			<div class="beizhu">
				<h2>订单备注</h2>
				<div class="yaoqiu">
					<textarea name="" v-model="remark" rows="" cols="" placeholder="可以告诉我们您的特殊要求"></textarea>
				</div>
			</div>
		</div>

		<div class="pay-ft">
			<h2>
				实付 <span>&yen;{{all_money+deposit-value}}</span>
			</h2>
			<button @click="orderData">提交订单</button>
		</div>
		<van-popup v-model="showPicker" position="bottom" :style="{ height: '40%' }">
			<ul class="youhuq">
				<li v-for="(item,index) in columns" :key='index'>
					<div class="lingqu">
						<h2><span>&yen;</span>{{item.used_amount}}</h2>
						<div class="manj">
							<p>满{{item.with_amount}}使用</p>
							<h3>{{item.valid_start_time}}-{{item.valid_end_time}}</h3>
						</div>
					</div>
					<button @click="lingqudata(item.used_amount,item.coupons_id)"> 立即领取</button>
				</li>
			</ul>
		</van-popup>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { putongspInfo, keusequandata, zhifubaosuss } from '@/api/api'
	import { zichanyue, singopayinfo } from '@/api/mine'
	import { Toast } from 'vant';
	export default {
		data() {
			return {
				showPicker: false,
				columns: [],
				value: '',
				chosd: 0,
				money: '',
				messgein: '',
				num: 1,
				youhui: 0,
				remark: '',
				all_money: '',
				deposit: '',
				xuanzh: [],
				zhifu: [{
						name: '余额'
					},

					{
						img: './static/img/zfb.png',
						name: '支付宝'
					},
					{
						img: './static/img/wxin.png',
						name: '微信'
					},
				]
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				morendata: 'getadrss',
				TokenId: 'TokenId',
				carList: 'carList'
			})
		},
		created() {
			var that = this
			that.zhifuwancheng()
			let allney = 0
			let deposit = 0
			that.carList.forEach((item) => {
				if(item.selected) {
					allney += item.num * item.now_price
					deposit += item.num * item.deposit;
					that.xuanzh.push(item)
				}
			})
			that.all_money = allney
			that.deposit = deposit
		},
		mounted() {
			let idt = this.$route.query.id
			let data = {
				cid: idt,
				page: 1
			}
			putongspInfo(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.messgein = res.data.data;
				}
			})
			let qury = {
				token: this.TokenId
			}
			zichanyue(qury).then(res => {
				if(res.data.code == 200) {
					this.money = res.data.data.money
				}
			})

		},
		methods: {
			...mapActions(
				[
					'qingang'
				]
			),
			qindandata() {
				var that = this
				console.log(that.xuanzh)
				that.qingang(that.xuanzh)
				that.$router.push('/mycar/qingdan')
			},
			zhifuwancheng() {
				var that = this
				let data = {
					token: that.TokenId
				}
				zhifubaosuss(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						if(res.data.data.status == 2) {
							that.$router.push('/myorder/paystatu')
						}
					}
				})
			},
			youhuodataquan() {
				var that = this
				let coin = that.all_money + that.deposit;
				that.value = ''
				let data = {
					token: that.TokenId,
					coin: coin
				}
				keusequandata(data).then(res => {
					console.log(res)
					if(res.data.code = 200) {
						if(res.data.data.length == 0) {
							Toast.fail('没有优惠券可以使用');
						} else if(res.data.data == null) {
							Toast.fail('没有优惠券可以使用');

						} else {
							that.columns = res.data.data
							that.showPicker = true;
						}
					}

				})
			},
			back() {
				this.$router.go(-1)
			},
			choseAdress() {
				this.$router.push('/mine/adress')

			},
			jianshao() {
				this.num--

					if(this.num < 1) {
						this.num = 1
					}

			},
			zenhjia(numt) {
				this.num++
					console.log(numt)
				if(this.num > numt) {
					this.num = numt
				}

			},
			lingqudata(mony, grouid) {
				console.log(grouid)
				this.value = mony;
				this.youhui = grouid;
				this.showPicker = false

			},
			handleChange() {},
			chosezhifu(ide) {
				this.chosd = ide
			},
			orderData() {
				var that = this
				let td
				let coin = that.all_money + that.deposit - that.value
				let addr = that.morendata.area + '-' + that.morendata.addr;

				if(that.chosd == 0) {
					td = 2
				} else {
					td = 1
				}
				let pdt = []
				for(let i in that.xuanzh) {
					var produ = {
						cid: that.xuanzh[i].id,
						coin: that.xuanzh[i].now_price,
						num: that.xuanzh[i].num,
						total_coin: that.xuanzh[i].num * that.xuanzh[i].now_price,
						deposit: that.xuanzh[i].deposit
					}
					pdt.push(produ)
				}
				let pdtf = JSON.stringify(pdt)

				let data = {
					token: that.TokenId,
					coin: coin,
					address: addr,
					mobile: that.morendata.mobile,
					name: that.morendata.name,
					pid: that.chosd,
					t: td,
					product: pdtf,
					coupons_id: that.youhui,
					type: 1,
					remark: that.remark
				}


				singopayinfo(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						let htmlf = res.data.data
						if(that.chosd == 1) {
							this.$router.push({
								path: '/mine/chongzhifu',
								query: {
									htmlData: htmlf
								}
							})
						}

					} else {
						Toast.fail(res.data.msg);

					}
				})

				//				this.$router.push('/myorder/paystatu/2')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.youhuq {
		height: 100%;
		overflow: auto;
		li {
			width: 710px;
			height: 148px;
			margin: 10px auto 20px;
			background: rgba(63, 185, 77, .1);
			border-radius: 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 12px 0 42px;
			box-sizing: border-box;
			.lingqu {
				display: flex;
				h2 {
					font-size: 60px;
					color: rgba(63, 185, 77, 1);
					margin-right: 40px;
					span {
						font-size: 32px;
					}
				}
				.manj {
					p {
						font-size: 30px;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(63, 185, 77, 1);
						margin-bottom: 14px;
					}
					h3 {
						font-size: 20px;
						font-weight: 500;
						color: rgba(63, 185, 77, 1);
					}
				}
			}
			button {
				width: 160px;
				height: 70px;
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
				border-radius: 15px;
				border: none;
				font-size: 26px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
	
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
						color: #f53e3a;
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
				padding: 0 10px 20px;
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
						.jinqian {
							color: #FF0000!important;
							margin-left: 10px;
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
				.chakan {
					padding: 20px;
					img {
						width: 40px;
						height: 40px;
					}
				}
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
				.shulinag {
					display: flex;
					span {
						display: block;
						width: 90px;
						height: 60px;
						line-height: 60px;
						font-size: 26px;
						color: #333;
						text-align: center;
						background: #ccc;
						margin: 0 5px;
					}
					button {
						width: 60px;
						font-size: 26px;
						color: #333;
						background: #E1E1E1;
						height: 60px;
					}
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
							font-size: 36px;
							color: #000;
							font-weight: 600;
						}
					}
				}
			}
		}
	}
</style>