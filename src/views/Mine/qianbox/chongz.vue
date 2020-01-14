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
	import { zichanyue, RechargeInfo, paywzhidata, chonzhidata } from '@/api/mine'
	export default {
		data() {
			return {
				select: '',
				chos: 0,
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
				console.log(res)
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
			paydatachong() {
				if(!this.chos || !this.chos) {
					Toast.fail('选择充值金额和充值方式');
					return
				}
				let data = {
					token: this.TokenId,
					rid: this.coin,
					pid: this.chos
				}
				console.log(data)
				paywzhidata(data).then(res => {
					console.log(res)
					if(res.data.code = 200) {
						this.$router.push({
							path: '/mine/chongzhifu',
							query: {
								htmlData:res.data.data
							}
						})
					}
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