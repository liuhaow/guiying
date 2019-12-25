<!--  -->
<template>
	<div class='car'>

		<div class="gouwu">购物车</div>
		<div class="" v-if="!carList">
			
		</div>
		<div class='car-box' v-else>
			<div class='car-top' v-for='(item,index) in carList' :key='index'>
				<van-swipe-cell>
					<van-cell :border="false">
						<div class="car-list">

							<img src="../../../static/imges/radios.jpg" alt="" class='choose-icon' v-if='item.selected' @click='select(item.productId)'>
							<img src="../../../static/imges/radio.jpg" alt="" class='choose-icon' v-else @click='select(item.productId)'>
							<img :src="item.img" alt="" class='car-img'>
							<div class='car-fr'>
								<div class='car-name'>{{item.title}}</div>
								<div class='fr-btm'>
									<div class='car-money'>
										<!--<p class='money-old'>￥{{item.marketPrice}}</p>-->
										<p class='money-now'>￥{{item.sellPrice}}</p>
									</div>
									<div class='car-num'>

										<span class='num-icon' @click='jianNum(item.productId)'> - </span>
										<span class='car-nums'>{{item.num}}</span>
										<span class='num-icon' @click='addNum(item.productId)'> + </span>
									</div>
								</div>

							</div>
						</div>
					</van-cell>
					<template slot="right">
						<van-button square type="danger" @click='delData(item.productId)' text="删除" />
					</template>
				</van-swipe-cell>
			</div>
			<div class="shixiao">
				<shixiao></shixiao>
			</div>
		</div>
		<baokuan message='爆款推荐'></baokuan>
		<div class='car-btm'>
			<div class='btm-fl' @click="selectAll()">
				<img src="../../../static/imges/radios.jpg" alt="" class='choose-icon' v-if='allSelsect'>
				<img src="../../../static/imges/radio.jpg" alt="" class='choose-icon' v-else>
				<span class='all-text'>全选</span>
			</div>
			<div class='all-money'>合计：<span>&yen;{{allMoney}}</span></div>
			<!--<div class='del' v-if='del_show' @click="del()">删除</div>-->
			<div class='pay'>去结算</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'

	import shixiao from './shixiao'
	import baokuan from '@/components/baokuan'
	

	export default {

		data() {
			//这里存放数据
			return {
				del_show: false
			};
		},
		components: {
			shixiao,
			baokuan

		},
		//监听属性 类似于data概念
		computed: { //computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
			...mapGetters(['carList', 'allMoney', 'allSelsect'])
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			...mapActions(['headTitle', 'addNum', 'jianNum', 'select', 'selectAll', 'del', 'showBtm']),
			delData(idt) {
				console.log(idt)
			}
		},
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {

		}
	}
</script>
<style type="text/css" lang="stylus" scoped="">
	.car {
		padding-bottom: 240px;
		background: rgba(225, 225, 225, .5);

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
		.car-top {
			border-bottom: 2px solid #E1E1E1;
			>>>.van-swipe-cell {
				width: 100%;
				height: 260px!important;
				.van-swipe-cell__wrapper {
					height: 100%!important;
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
				height: 36px;
				width: 36px;
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
					font-size: 32px;
					color: #333;
					margin-bottom: 50;
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
				height: 36px;
				height: 36px;
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