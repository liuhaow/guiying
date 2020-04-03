<template>
	<div class="chongz">
		<div class="c-head">
			<h1 @click="back">
				<img src="../../../../static/img/fanhui.png"/>
			</h1>
			<h2>在线充值</h2>
			<h3 @click="mingxidata">明细</h3>
		</div>
		<div class="chong-j">
			<h2>账户余额（元）</h2>
			<h3>{{money}}</h3>
		</div>
		<div class="chong-m">
			<h2>充值金额</h2>
			<ul class="czhilist">
				<li class='issueli' v-for='(item,index) in list' @click="changestyle(index,item.id)" :class="{'actt':select===index}">
					<div class="c-l-l">
						<p>{{item.coin}}<span>元</span></p>
						<h2>赠送{{item.give_coin}}元</h2>
					</div>

				</li>

			</ul>
		</div>
		<div class="chong-f-s">
			<h2>充值方式</h2>
			<div class="chong-f-chos">
				<ul>
					<li v-for='(item,index) in paylist' :key='index'>
						<div class="z-f-c-w">
							<img :src="item.image" alt="" />{{item.name}}
						</div>
						<p @click="chosedata(item.id)">
							<img v-if="chos==item.id" src="../../../../static/imges/my/cho.png" />
							<img v-if="chos!=item.id" src="../../../../static/imges/my/quan.png" />
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="chong-z-f-t">
			<h2>充值即表示同意<span>《预付卡章程及购卡协议》</span></h2>
			<button @click="paydatachong()">立即充值</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { Toast } from 'vant';
	import { zichanyue, RechargeInfo, paywzhidata, chonzhidata, defukuandaya } from '@/api/mine'
	import wx from 'weixin-js-sdk'
	import dsbridge from 'dsbridge'

	export default {
		data() {
			return {
				select: '',
				chos: 1,
				money: '',
				coin: '',
				list: [],
				paylist: []

			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			console.log(wx)
			let data = {
				token: this.TokenId
			}
			RechargeInfo(data).then(res => {
				if(res.data.code == 200) {
					this.list = res.data.data
				}
			})
			zichanyue(data).then(res => {
				if(res.data.code == 200) {
					this.money = res.data.data.money
				}
			})
			chonzhidata(data).then(res => {

				if(res.data.code == 200) {
					this.paylist = res.data.data
				}
			})

		},
		methods: {
			changestyle(index, idt) {
				this.select = index,
					this.coin = idt;
			},
			back() {
				this.$router.go(-1)
			},
			chosedata(idt) {
				this.chos = idt

			},
			mingxidata() {
				var that = this
				that.$router.push('/mine/mingxi')
			},
			paydatachongxin() {
				var that = this

				let data = {
					type: that.chos,
					token: that.TokenId

				}
				defukuandaya(data).then(res => {
					window.location.replace('https://www.baidu.com/s?word=vue%20APP%E6%94%AF%E4%BB%98&tn=site888_3_pg&lm=-1&ssl_s=1&ssl_c=ssl1_1712a67ed6d&prec=1s')
				})
			},
			//充值滞留
			paydatachong() {
				var that = this

				if(!that.coin) {
					Toast.fail('选择充值金额');
					return
				}
				if(!that.chos) {
					Toast.fail('选择充值金额和充值方式');
					return
				}

				let data = {
					token: that.TokenId,
					rid: that.coin,
					pid: that.chos
				}

				paywzhidata(data).then(res => {
					//					console.log(res)
					if(res.data.code = 200 && res.data.data) {
						if(that.chos == 1) {
							let form = res.data.data
							const div = document.createElement('div') // 创建div
							div.innerHTML = form // 将返回的form 放入div
							document.body.appendChild(div)
							document.forms[0].submit()
						} else if(that.chos == 3){
							console.log(1)
//							let options = {
//								"appId": res.data.data.pay_info.appid, //公众号名称，由商户传入     
//								"timeStamp": res.data.data.pay_info.timestamp, //时间戳，自1970年以来的秒数     
//								"nonceStr": res.data.data.pay_info.noncestr, //随机串     
//								"package": res.data.data.pay_info.package,
//								"signType": 'MD5', //微信签名方式：     
//								"paySign": res.data.data.pay_info.sign, //微信签名 
//								partnerid
//							}
							that.weixinPay(res.data.data.pay_info)

						}

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
							alert('支付成功:' + JSON.stringify(result))
						},
						function(error) {
							// 支付失败处理              
							alert('支付失败:' + JSON.stringify(error))
						})
				}, function(e) {
					alert('获取支付通道失败：' + e.message);
				})
			}

		}
	}
</script>

<style lang="stylus" scoped>
	.chongz {
		box-sizing: border-box;
		.chong-z-f-t {
			margin-top: 50px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				font-size: 24px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 204, 204, 1);
				margin-bottom: 24px;
				span {
					color: #40BA4E!important;
				}
			}
			button {
				width: 710px;
				height: 80px;
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
				border-radius: 40px;
				border: none;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1)
			}
		}
		.chong-f-s {
			padding: 0 20px;
			box-sizing: border-box;
			.chong-f-chos {
				width: 700px;
				height: 220px;
				border-radius: 8px;
				padding: 0 15px;
				box-sizing: border-box;
				background: #fff;
				ul {
					height: 220px;
					li {
						display: flex;
						justify-content: space-between;
						height: 110px;
						align-items: center;
						.z-f-c-w {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							img {
								width: 42px;
								height: 34px;
								margin-right: 15px;
							}
						}
						.z-f-c-f {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							img {
								width: 42px;
								height: 42px;
								margin-right: 15px;
							}
						}
						p {
							img {
								width: 36px;
								height: 36px;
							}
						}
					}
					li:nth-child(1) {
						border-bottom: 2px solid #E1E1E1;
					}
				}
			}
			h2 {
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				margin-bottom: 28px;
			}
		}
		.chong-m {
			margin: 60px 0;
			h2 {
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				padding-left: 20px;
				box-sizing: border-box;
				margin-bottom: 28px;
			}
			.czhilist {
				overflow-x: auto;
				white-space: nowrap;
				width: auto;
				.issueli {
					width: 178px;
					height: 206px;
					background: #fff;
					border-radius: 12px;
					margin-left: 28px;
					border: 2px solid rgba(94, 196, 110, 1);
					display: inline-block;
					.c-l-l {
						width: 178px;
						height: 206px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						p {
							font-size: 42px;
							margin-bottom: 40px;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);
							span {
								font-size: 24px;
							}
						}
						h2 {
							color: #999;
							font-size: 24px;
						}
					}
				}
				.actt {
					background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1))!important;
					.c-l-l {
						p {
							color: #FFFFFF!important;
						}
						h2 {
							color: #fff!important;
						}
					}
				}
			}
		}
		.c-head {
			height: 90px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 26px;
			background: #ffff;
			box-sizing: border-box;
			h1 {
				img {
					height: 40px;
					width: 40px;
				}
			}
			h2 {
				font-size: 36px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			h3 {
				height: 26px;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: #3FB94D;
			}
		}
		.chong-j {
			width: 710px;
			height: 300px;
			background: linear-gradient(-60deg, rgba(35, 50, 83, 1), rgba(55, 66, 96, 1));
			border-radius: 18px;
			padding-left: 60px;
			margin: 26px auto 0;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			h2 {
				font-size: 26px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, .6);
				margin-bottom: 27px;
			}
			h3 {
				font-size: 80px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>