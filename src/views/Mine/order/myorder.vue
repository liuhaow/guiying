<template>
	<div class="morder">
		<headt message='我的订单'></headt>

		<ul class="issus-list">
			<li class='issueli' :key='index' v-for='(item,index) in list' @click="changestyle(index)" :class="{'actt':select===index}">{{item.name}}</li>
		</ul>
		<div class="quanbu" v-if="select == 0">
			<ul>
				<li v-for='(item,index) in lstdata ' :key='index'>
					<div class="list-t">
						<div class="list-t-l">
							{{item.create_time}}
						</div>
						<div class="list-t-r">
							<span v-if="item.type==5">已完成</span>
							<span v-if="item.type==1">等待买家付款</span>
							<span v-if="item.type==6">已取消</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li>
								<img v-for='(idt,index) in item.cover' :src="idt" alt="" />
							</li>

						</ul>
						<h2 @click="chakanData(item.id)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lst-t-d">
							{{item.num}}件，合计&yen;{{item.total}}
						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 1">
			<ul>
				<li v-for='(item,index) in lstdata' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							{{item.create_time}}

						</div>
						<div class="list-t-r">
							<span>等待买家付款</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li>
								<img v-for='(idt,index) in item.cover' :src="idt" alt="" />
							</li>
						</ul>
						<h2 @click="chakanData(item.id)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lst-t-d">
							{{item.num}}件，合计&yen;{{item.total}}
						</div>
						<div class="lis-f-f">
							<div class="dinzh">
								<button @click="quxiaoOrder(item.id)">取消订单</button>
								<button class="btde" @click="payData(item)">立即付款</button>
							</div>
						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 2">
			<ul>
				<li v-for='(item,index) in lstdata' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							{{item.create_time}}
						</div>
						<div class="list-t-r">
							<span>待卖家发货</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li>
								<img v-for='(idt,index) in item.cover' :src="idt" alt="" />
							</li>
						</ul>
						<h2 @click="chakanData(item.id)">查看全部 》</h2>

					</div>
					<div class="list-f">
						<div class="lst-t-d">
							{{item.num}}件，实付&yen;{{item.total}}

						</div>
						<div class="lis-f-f">
							<div class="dinzh">
								<button @click="tuihuoData(item)">退货申请</button>
							</div>

						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 3">
			<ul>
				<li v-for='(item,index) in lstdata' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							{{item.create_time}}
						</div>
						<div class="list-t-r">
							<span>卖家已发货</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li>
								<img v-for='(idt,index) in item.cover' :src="idt" alt="" />
							</li>
						</ul>
						<h2 @click="chakanData(item.id)">查看全部 》</h2>

					</div>
					<div class="list-f">
						<div class="lst-t-d">
							{{item.num}}件，合计&yen;{{item.total}}

						</div>
						<div class="lis-f-f">
							<div class="dinzh">
								<button @click="checkenwul(item.id)">查看物流</button>
								<button @click="tuihuoData(item)">退货申请</button>
								<button class="btde" @click="querenData(item.id)">确认收货</button>
							</div>

						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 4">
			<ul>
				<li v-for='(item,index) in lstdata' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							{{item.create_time}}
						</div>
						<div class="list-t-r">
							<span>
									已完成
							</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li>
								<img v-for='(idt,index) in item.cover' :src="idt" alt="" />
							</li>
						</ul>
						<h2 @click="chakanData(item.id)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lst-t-d">
							{{item.num}}件，合计&yen;{{item.total}}

						</div>
						<div class="lis-f-f">
							<div class="dinzh">
								<button @click="shanchuoder(item.id)">删除订单</button>
								<button class="btde" @click="pingjiadata(item.id)">去评价</button>
							</div>

						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 5">
			<ul>
				<li v-for='(item,index) in lstdata' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							{{item.create_time}}
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li>
								<img :src="item.cover" alt="" />
							</li>
						</ul>
						<h2 @click="chakanData(item.id)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lis-f-f">
							<div class="dinzh">

								<button class="btde" v-if="item.status==0">审核中</button>
								<button class="btde" v-if="item.status==1">退款中</button>
								<button class="btde" v-if="item.status==2">拒绝退款</button>
								<button class="btde" v-if="item.status==3">完成退款</button>								
							</div>

						</div>
					</div>

				</li>
			</ul>

		</div>
		<van-popup v-model="showPicker" position="bottom" :style="{ height: '38%' }">
			<div class="z-y-y">
				<h2>支付方式</h2>

				<div class="fanghi bord" v-for='(item,index) in zhifu' :key='index' @click="chosezhifu(index)">
					<h3>
						<img :src="item.img" alt="" v-if='index>0' /> 
						{{item.name}}
						<span v-if='index==0' class="jinqian">{{money}}</span>
					</h3>
					<img src="../../../../static/img/choss.png" v-if="chosd !=index" alt="" />
					<img src="../../../../static/img/chos.png" v-if="chosd ==index" alt="" />
				</div>
				<div class="zhifquer">
					<h1 @click="fangqile">放弃</h1>
					<h3 @click="qudinging">确定</h3>
				</div>
			</div>
		</van-popup>

	</div>
</template>

<script>
	import headt from '@/components/heda'

	import { mapGetters, mapActions } from 'vuex'
	import { Notify, Toast, popup } from 'vant';
	import { orderallData, Shancsorderall, Outpayinfo, shouhuoData, zichanyue, weizhikuandaya,tuikuandaya } from '@/api/mine'
	export default {
		data() {
			return {
				totlete: '',
				cifd: '',
				select: '',
				chosd: 4,
				showPicker: false,
				xuanzf: '',
				money: '',
				list: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '待发货'
					},
					{
						name: '待收货'
					},
					{
						name: '待评价'
					},
					{
						name: '退款'
					}

				],
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
					}
				],
				lstdata: ''
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId',
				orderl: 'orderl'

			})
		},
		created() {
			this.select = this.orderl
		},
		mounted() {

			let std = ''

			let data = {
				token: this.TokenId,
				page: 1,
				status: this.orderl
			}
			let pery ={
				token: this.TokenId
				
			}
			if(this.orderl<5){
				orderallData(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.lstdata = res.data.data
				}
			})
			}else{
				tuikuandaya(pery).then(res=>{
						if(res.data.code == 200) {
								this.lstdata = res.data.data
							}
					})
			}
			

		},
		methods: {
			...mapActions(['orderchoose']),
			back() {
				this.$router.go(-1)

			},
			fangqile() {
				var that = this
				that.showPicker = false;
				that.xuanzf = '';
				that.totlete = ''
				that.cifd = ''

			},
			payData(idt) {
				var that = this
				that.totlete = idt.total
				that.cifd = idt.id
				that.showPicker = true
				that.chosd = 4
				let qury = {
					token: that.TokenId
				}
				zichanyue(qury).then(res => {

					if(res.data.code == 200) {
						that.money = res.data.data.money
					}
				})

			},
			qudinging() {
				var that = this
				if(!that.xuanzf) {
					Toast.fail('选择支付方式')
					return
				}
				let data = {
					token: that.TokenId,
					pid: that.xuanzf,
					pay_id: that.cifd,
					total_coin: that.totlete
				}
				console.log(data)

				weizhikuandaya(data).then(res => {
					console.log(res)
					if(res.data.code = 200) {
						that.showPicker = false;

						if(that.xuanzf == 2) {
							Toast.success('支付成功')
						} else if(that.xuanzf == 1) {
							let form = res.data.data
							const div = document.createElement('div') // 创建div
							div.innerHTML = form // 将返回的form 放入div
							document.body.appendChild(div)
							document.forms[0].submit()
						} else if(that.xuanzf == 3) {
							that.weixinPay(res.data.data.pay_info)
						}
					} else {
						that.showPicker = false;

					}
				})

			},
			weixinPay(data) {
				//获取支付通道
				console.log(data)
				let payChanel = '';
				plus.payment.getChannels(function(channels) {
					for(var i in channels) {
						if(channels[i].id == "wxpay") {
							payChanel = channels[i]
						}
					}
					let payParam = { //后台返回的支付参数最好全部都是小写（论坛看到的提醒）
						"appid": data.appid,
						"noncestr": data.noncestr,
						"package": data.package,
						"partnerid": data.partnerid,
						"prepayid": data.prepayid,
						"timestamp": data.timestamp,
						"sign": data.sign
					};
					// 请求支付操作
					plus.payment.request(payChanel, payParam,
						function(result) {
							// 支付成功处理
							Toast.success('支付成功')
						},
						function(error) {
							// 支付失败处理              
							that.showPicker = false;

							Toast.fail('支付失败')
						})
				}, function(e) {
					Toast.fail('支付失败')

				})
			},
			chosezhifu(ide) {
				var that = this
				that.chosd = ide;
				if(ide == 0) {
					that.xuanzf = 2
				} else if(ide == 1) {
					that.xuanzf = 1

				} else if(ide == 2) {
					that.xuanzf = 3

				}

			},
			changestyle(index) {
				this.select = index;
				let data = {
					token: this.TokenId,
					page: 1,
					status: index
				}
				let pery = {
					token: this.TokenId
				}
				this.orderchoose(index)
				if(index < 5) {
					orderallData(data).then(res => {
						console.log(res)
						if(res.data.code == 200) {
							this.lstdata = res.data.data
						}
					})
				}else{				
					tuikuandaya(pery).then(res=>{
						if(res.data.code == 200) {
								this.lstdata = res.data.data
							}
					})

				}

			},
			checkenwul(idt) {
				this.$router.push('/myorder/wuliu/' + idt)
			},
			chakanData(id) {
				this.$router.push('/myorder/alldan/' + id)
			},
			querenData(idt) {
				var that = this
				let data = {
					id: idt,
					token: this.TokenId
				}
				shouhuoData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						that.$router.push('/myorder/bourse/' + idt)
					}
				})

			},

			quxiaoData(idt) {
				this.$router.push('/myorder/quxiao/' + idt)
			},
			quxiaoOrder(idt) {
				var that = this
				let data = {
					id: idt,
					token: that.TokenId

				}
				let pary = {
					token: that.TokenId,
					page: 1,
					status: 1
				}

				Outpayinfo(data).then(res => {
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
						orderallData(pary).then(res => {
							if(res.data.code == 200) {
								that.lstdata = res.data.data
							}
						})
					}
				})
			},
			//退货
			tuihuoData(item) {
				console.log(item)
				this.$router.push({
					path: '/myorder/sqingth',
					query: {
						idt: item.id,
						totle: item.total
					}
				})
			},
			shanchuoder(idt) {
				let data = {
					token: this.TokenId,
					order_id: idt
				}
				Shancsorderall(data).then(res => {
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
			//评论
			pingjiadata(idt) {
				this.$router.push('/myorder/pingjia/' + idt)
			}

		}
	}
</script>

<style lang="stylus" scoped>
	.morder {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(225, 225, 225, .3);
		.quanbu {
			flex: 1;
			overflow: auto;
			ul {
				li {
					margin-top: 20px;
					.list-nt {
						ul {
							padding-left: 40px;
							width: 100%;
							box-sizing: border-box;
							li {
								height: 152px;
								margin: 20px 0;
								display: flex;
								align-items: center;
								img {
									width: 152px;
									height: 152px;
									margin-right: 20px;
								}
								div {
									display: flex;
									height: 130px;
									flex-direction: column;
									justify-content: space-between;
									p:nth-child(1) {
										font-size: 28px;
										font-family: PingFang SC;
										font-weight: 500;
										color: rgba(51, 51, 51, 1);
									}
									p:nth-child(2) {
										font-size: 28px;
										font-family: PingFang SC;
										font-weight: 500;
										color: #999999;
									}
									p:nth-child(3) {
										font-size: 28px;
										font-family: PingFang SC;
										font-weight: 500;
										color: rgba(51, 51, 51, 1);
									}
								}
							}
						}
					}
					.list-t {
						height: 68px;
						width: 100%;
						padding: 0 30px;
						box-sizing: border-box;
						background: #fff;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.list-t-l {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
						.list-t-r {
							span {
								font-size: 26px;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(8, 194, 26, 1);
							}
						}
					}
					.list-n {
						height: 192px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 30px;
						box-sizing: border-box;
						ul {
							display: flex;
							li {
								width: 152px;
								height: 152px;
								background: #fff;
								margin-right: 10px;
								display: flex;
								margin-top: 0!important;
								img {
									width: 152px;
									margin-right: 10px;
									height: 152px;
								}
							}
						}
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
					.list-f {
						background: #fff;
						padding: 26px 47px 30px 0;
						box-sizing: border-box;
						.lst-t-d {
							text-align: right;
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							margin-bottom: 31px;
						}
						.lis-f-f {
							.dinzh {
								display: flex;
								justify-content: flex-end;
								button {
									width: 200px;
									height: 56px;
									background: #fff;
									border: 2px solid rgba(225, 225, 225, 1);
									border-radius: 28px;
									margin-left: 20px;
									font-size: 26px;
									font-family: PingFang SC;
									font-weight: 500;
									color: rgba(51, 51, 51, 1);
								}
								.btde {
									background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1))!important;
									color: #fff!important;
									border: none;
								}
							}
							.dinzhd {
								display: flex;
								justify-content: flex-end;
								align-items: center;
								height: 150px;
								button {
									width: 200px;
									height: 56px;
									background: #fff;
									border: 2px solid rgba(225, 225, 225, 1);
									border-radius: 28px;
									margin-left: 20px;
									font-size: 26px;
									font-family: PingFang SC;
									font-weight: 500;
									color: rgba(51, 51, 51, 1);
								}
								.btde {
									background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1))!important;
									color: #fff!important;
									border: none;
								}
							}
						}
					}
				}
			}
		}
		.issus-list {
			display: flex;
			height: 80px;
			width: 100%;
			background: #fff;
			li {
				width: 25%;
				height: 80px;
				line-height: 80px;
				text-align: center;
				font-size: 26px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
			.actt {
				color: #3FB94D!important;
			}
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
	
	.z-y-y {
		padding: 30px 10px 20px;
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
		.zhifquer {
			display: flex;
			height: 150px;
			justify-content: center;
			align-items: center;
			h1 {
				width: 40%;
				height: 80px;
				line-height: 80px;
				font-size: 30px;
				font-weight: 600;
				text-align: center;
				border-radius: 10px;
				background: #ccc;
				margin-right: 20px;
			}
			h3 {
				width: 40%;
				height: 80px;
				font-size: 30px;
				font-weight: 600;
				line-height: 80px;
				text-align: center;
				border-radius: 10px;
				background: #3fb94d;
				color: #FFF
			}
		}
	}
</style>