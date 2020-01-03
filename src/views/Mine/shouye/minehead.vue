<template>
	<div class="mhead">
		<div class="mh-t">
			<div class="mh-t-t">
				<div class="m-tou-l">
					<div class="m-tou">
						<img class="" :src="userdata.avatar" />
					</div>

					<div class="m-tou-mc">
						<p class="mingchen" style="">{{userinfo.username}}</p>
						<p class="phoe">{{userinfo.mobile}}</p>
					</div>
				</div>
				<h2 class="m-tou-r" @click="gerenData()"> 
					<i slot="icon" class="icon iconfont " >&#xe644;</i>				
				</h2>
			</div>
			<div class="mh-nav">
				<ul>
					<li @click='chongzData'>
						<p>{{userinfo.money}}</p>
						<p>钱包(元)</p>
					</li>
					<li @click='qiankData'>
						<p>{{userinfo.debt}}</p>
						<p>欠款(元)</p>
					</li>
					<li @click='youhuData'>
						<p>{{coupons_num}}</p>
						<p>优惠券(张)</p>
					</li>

				</ul>
			</div>
		</div>
		<div class="dingdan">
			<div class="ddan">
				<div class="dan-t">
					<p>我的订单</p>
					<h2 @click="chankandata">查看更多 
					<i slot="icon" class="icon iconfont " >&#xe644;</i>
					
					</h2>
				</div>
				<div class="order-list">
					<ul>
						<li v-for="(item,index) in lsit" :key='index' @click="tiaozhuanData(index)">
							<img :src="item.img" />
							<p>{{item.name}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="chongzhi">
			<div class="dan-t">
				<p>在线充值</p>

			</div>
			<ul class="czhilist">
				<li class='issueli' v-for='(item,index) in list' @click="changestyle(index)" :class="{'actt':select===index}">
					<div class="c-l-l">
						<p>{{item.mony}}<span>元</span></p>
						<h2>赠送{{item.zsong}}元</h2>
					</div>

				</li>

			</ul>
			<div class="cbtn">
				<button>立即充值</button>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { mineInfo } from '@/api/mine'
	export default {
		data() {
			return {
				select: 0,
				userinfo: '',
				coupons_num: '',
				lsit: [{
						name: '待付款',
						img: '../../../static/img/dfk.png'
					},
					{
						name: '待收货',
						img: '../../../static/img/dfh.png'
					}, {
						name: '待评价',
						img: '../../../static/img/dpj.png'
					}, {
						name: '售后服务',
						img: '../../../static/img/shoiuh.png'
					},
				],
				list: [{
						mony: '1000',
						zsong: '68'
					},
					{
						mony: '500',
						zsong: '68'
					},
					{
						mony: '300',
						zsong: '68'
					},
					{
						mony: '100',
						zsong: '68'
					}, {
						mony: '50',
						zsong: '68'
					},

				]
			}
		},
		computed: {
			...mapGetters({
				userdata: 'userData'
			})
		},
		mounted() {
			let data = {
				token: this.userdata.token
			}
			mineInfo(data).then(res => {

				if(res.data.code == 200) {
					this.userinfo = res.data.data.user_info;
					this.coupons_num = res.data.data.coupons_num
				}
			})
		},
		methods: {
			...mapActions(['orderchoose']),

			changestyle(index) {
				this.select = index
			},
			chankandata() {
				var that = this
				this.orderchoose(0)
				
				that.$router.push('/myorder')

			},
			chongzData() {
				var that = this
				that.$router.push('/mine/chongz')
			},
			qiankData() {
				var that = this
				that.$router.push('/mine/qiank')
			},
			youhuData() {
				var that = this
				that.$router.push('/youh')
			},
			gerenData() {
				var that = this
				that.$router.push('/mine/perpson')

			},
			tiaozhuanData(idt) {
				console.log(idt)
				var that = this
				this.orderchoose(idt+1)
				if(idt == 3) {
					that.$router.push('/myorder/tuihuo')
				} else {
					that.$router.push('/myorder')
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.dingdan {
		width: 700px;
		height: 220px;
		margin: 0 auto 20px;
		.ddan {
			width: 700px;
			height: 220px;
			padding: 0 20px;
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);
			border-radius: 16px;
			margin-top: -80px;
			.dan-t {
				height: 88px;
				border-bottom: 2px solid #F5F5F5;
				display: flex;
				justify-content: space-between;
				align-items: center;
				p {
					font-size: 34px;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				h2 {
					font-size: 26px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			.order-list {
				height: 131px;
				ul {
					width: 100%;
					height: 131px;
					display: flex;
					justify-content: space-between;
					li {
						width: 25%;
						height: 131px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						img {
							height: 39px;
							width: 38px;
							margin-bottom: 18px;
						}
						p {
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}
	}
	
	.chongzhi {
		width: 700px;
		height: 450px;
		background: rgba(255, 255, 255, 1);
		border-radius: 16px;
		margin: 0 auto;
		.dan-t {
			height: 88px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p {
				font-size: 34px;
				padding-left: 28px;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
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
		.cbtn {
			display: flex;
			justify-content: center;
			margin-top: 40px;
			button {
				width: 580px;
				height: 80px;
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
				border-radius: 40px;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				border: none
			}
		}
	}
	
	.mh-t {
		width: 100%;
		height: 438px;
		padding: 30px 28px 0;
		box-sizing: border-box;
		background: rgba(63, 185, 77, 1);
		.mh-nav {
			ul {
				height: 90px;
				display: flex;
				justify-content: space-between;
				li {
					width: 33%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					p {
						color: #fff;
						font-size: 28px;
					}
					p:nth-child(1) {
						font-size: 36px!important;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
						margin-bottom: 28px;
					}
				}
			}
		}
		.mh-t-t {
			height: 116px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 50px;
			.m-tou-l {
				display: flex;
				height: 116px;
				align-items: center;
				.m-tou {
					width: 116px;
					height: 116px;
					background: rgba(245, 245, 245, .6);
					border-radius: 50%;
					justify-content: center;
					align-items: center;
					display: flex;
					img {
						width: 100px;
						height: 100px;
						border-radius: 50%;
					}
				}
				.m-tou-mc {
					margin-left: 20px;
					.mingchen {
						font-size: 36px;
						font-weight: bold;
						color: rgba(245, 245, 245, 1);
						margin-bottom: 20px;
					}
					.phoe {
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(245, 245, 245, 1);
					}
				}
			}
			.m-tou-r {
				padding: 20px;
				font-size: 32px;
				color: #fff;
				i {
					font-size: 34px;
					height: 98px;
					line-height: 90px;
					width: 60px;
					font-weight: 500;
					text-align: center;
					color: #fff;
				}
			}
		}
	}
</style>