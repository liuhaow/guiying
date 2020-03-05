<template>
	<div class='car'>
		<div class="gouwu">购物车</div>
		<!--<div class="" v-if="carList==''">
			<div class="tianjia">
				购物车什么都没有 去买点吧
			</div>
			<baokuand v-on:click="myclick"></baokuand>

		</div>-->
		<div class='car-box'>
			<div class="j-g-w" v-if="carList==''">
				购物车什么都没有 去买点吧
			</div>
			<div class='car-top' v-else v-for='(item,index) in carList' :key='index'>
				<van-swipe-cell>
					<van-cell :border="false">
						<div class="car-list">

							<img src="../../../static/img/chos.png" alt="" class='choose-icon' v-if='item.selected' @click='select(item.id)'>
							<img src="../../../static/img/choss.png" alt="" class='choose-icon' v-else @click='select(item.id)'>
							<img :src="item.cover" alt="" class='car-img'>
							<div class='car-fr'>
								<div class='car-name'>{{item.title}}</div>
								<div class='fr-btm'>
									<div class='car-money'>
										<!--<p class='money-old'>￥{{item.marketPrice}}</p>-->
										<p class='money-now'>￥{{item.now_price}}</p>
									</div>
									<div class='car-num'>

										<span class='num-icon' @click='jianNum(item.id)'> - </span>
										<span class='car-nums'>{{item.num}}</span>
										<span class='num-icon' @click='addNum(item.id)'> + </span>
									</div>
								</div>

							</div>
						</div>
					</van-cell>
					<template slot="right">
						<van-button square type="danger" @click='delData(item.id)' text="删除" />
					</template>
				</van-swipe-cell>
			</div>
		
			<baokuand v-on:click="myclick"></baokuand>
		</div>

		<div class='car-btm'>
			<div class='btm-fl' @click="selectAll()">
				<img src="../../../static/img/chos.png" alt="" class='choose-icon' v-if='allSelsect'>
				<img src="../../../static/img/choss.png" alt="" class='choose-icon' v-else>
				<span class='all-text'>全选</span>
			</div>
			<div class='all-money'>合计：<span>&yen;{{allMoney}}</span></div>
			<!--<div class='del' v-if='del_show' @click="del()">删除</div>-->
			<div class='pay' @click="jiesuandata()">去结算</div>
		</div>
		<tabbar tabName='3'></tabbar>

	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { gouwcarInfo, shanchugwData } from '@/api/cars'

	import { Notify } from 'vant';
	//	import shixiao from './shixiao'
	import baokuand from '@/components/baokuand'
	import tabbar from "@/components/abbar"

	export default {

		data() {
			//这里存放数据
			return {
				del_show: false,
				xuanzh:[]

			};
		},
		components: {
			//			shixiao,
			baokuand,
			tabbar,

		},
		computed: {
			...mapGetters(['carList', 'allMoney', 'allSelsect', 'TokenId'])
		},
		watch: {

		},

		methods: {
			...mapActions(['headTitle', 'qingang','addNum', 'jianNum', 'select', 'selectAll', 'del', 'showBtm', 'carsnum']),
			jiesuandata() {
				var  that = this
				if(that.allMoney == 0) {
					Notify({
						type: 'warning',
						message: '您还没选择'
					});
					return
				}
				that.carList.forEach((item) => {
				if(item.selected) {
					that.xuanzh.push(item)
				}
			})
				this.qingang(that.xuanzh)
				this.$router.push('/mycar/payinfo')
			},
			delData(idt) {
				console.log(idt)
				let data = {
					token: this.TokenId,
					sid: idt
				}
				shanchugwData(data).then(res => {
					console.log(res)
					if(res.data.code = 200) {
						let data = {
							page: 1,
							token: this.TokenId
						}
						gouwcarInfo(data).then(res => {
							if(res.data.code == 200) {
								this.carsnum(res.data.data)
							} else {
								Notify({
									type: 'warning',
									message: res.data.msg
								});

							}
						})
					}
				})
			},
			myclick() {
				let data = {
					page: 1,
					token: this.TokenId
				}
				gouwcarInfo(data).then(res => {
					if(res.data.code == 200) {
						this.carsnum(res.data.data)
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});

					}
				})
			}
		},
		mounted() {
			console.log(this.carList)
			let data = {
				page: 1,
				token: this.TokenId
			}
			gouwcarInfo(data).then(res => {
				if(res.data.code == 200) {

					this.carsnum(res.data.data)
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});

				}
			})
		}
	}
</script>
<style type="text/css" lang="stylus" scoped="">
	.car {
		padding-bottom: 230px;
		background: rgba(225, 225, 225, .5);
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.gouwu {
			height: 88px;
			background: rgba(255, 255, 255, 1);
			font-size: 36px;
			font-family: PingFang SC;
			font-weight: bold;
			width: 100%;
			text-align: center;
			line-height: 88px;
			color: rgba(51, 51, 51, 1);
			border-bottom: 2px solid #DAD6D6;
		}
	}
	
	.car-box {
		flex: 1;
		overflow: auto;
		.j-g-w{
			text-align: center;
			font-size: 26px;
			color: #ff6501;
			font-weight: 600;
			padding: 20px 0;
		}
		.car-top {
			border-bottom: 2px solid #E1E1E1;
			>>>.van-swipe-cell {
				width: 100%;
				height: 260px!important;
				.van-swipe-cell__wrapper {
					height: 100%!important;
					border: none!important;
					.van-cell {
						padding: 0!important;
					}
				}
				.van-swipe-cell__right {
					height: 100%;
					width: 140px;
					background: #FF6501;
					display: flex;
					align-items: center;
					button {
						background: #FF6501!important;
						width: 100%!important;
						border: none!important;
					}
					button::before {
						display: none!important;
					}
				}
			}
		}
		.car-list {
			height: 260px;
			display: flex;
			background: #fff;
			align-items: center;
			.choose-icon {
				height: 44px;
				width: 44px;
				margin: 0 20px;
			}
			.car-img {
				width: 166px;
				height: 166px;
				border-radius: 8px;
			}
			.car-fr {
				flex: 1;
				height: 70%;
				display: flex;
				margin-left: 10px;
				flex-direction: column;
				justify-content: space-between;
				.car-name {
					font-size: 28px;
					color: #333;
					padding-right: 20px;
				}
				.fr-btm {
					display: flex;
					justify-content: space-between;
					.car-money {
						p {
							font-size: 28px;
						}
					}
					.car-num {
						display: flex;
						padding-right: 20px;
						.num-icon {
							display: block;
							height: 56px;
							width: 56px;
							line-height: 56px;
							font-size: 28px;
							color: #333;
							font-weight: 600;
							text-align: center;
							background: #f7f7f7;
						}
						.car-nums {
							width: 86px;
							height: 56px;
							display: block;
							line-height: 56px;
							text-align: center;
							margin: 0 4px;
							background: rgba(247, 247, 247, 1);
							font-size: 30px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
				}
			}
		}
	}
	
	.car-btm {
		display: flex;
		align-items: center;
		padding: 0 20px;
		box-sizing: border-box;
		justify-content: space-between;
		height: 120px;
		background: #fff;
		width: 100%;
		position: fixed;
		bottom: 100px;
		z-index: 22;
		.btm-fl {
			display: flex;
			justify-content: center;
			img {
				height: 44px;
				height: 44px;
				margin: 0 10px;
			}
			span {
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		.all-money {
			font-size: 30px;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			span {
				color: #FF6501!important;
				margin-left: 10px
			}
		}
		.pay {
			width: 200px;
			height: 76px;
			background: linear-gradient(90deg, rgba(253, 122, 38, 1), rgba(251, 113, 23, 1));
			border-radius: 38px;
			line-height: 76px;
			font-size: 30px;
			text-align: center;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
</style>