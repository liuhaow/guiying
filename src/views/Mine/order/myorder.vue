<template>
	<div class="morder">
		<headt message='我的订单'></headt>
		
		<ul class="issus-list">
			<li class='issueli' :key='index' v-for='(item,index) in list' @click="changestyle(index)" :class="{'actt':select===index}">{{item.name}}</li>
		</ul>
		<div class="quanbu" v-if="select == 0">
			<ul>
				<li v-for='(item,index) in 10 ' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							2019-11-1 17:16:20
						</div>
						<div class="list-t-r">
							<span>
									已完成
								</span>
							<span>等待买家付款</span>
							<span>已取消</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li></li>
							<li></li>
						</ul>
						<h2 @click="chakanData(1)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lst-t-d">
							共2款， 3件，合计&yen;5860
						</div>
						<div class="lis-f-f">
							<div class="dinzh" v-if='dingd ==0'>
								<button>删除订单</button>
								<button @click="checkenwul">查看物流</button>
								<button class="btde">去评价</button>
							</div>
							<div class="dinzh" v-if='dingd ==1'>
								<button>取消订单</button>
								<button class="btde">去支付</button>
							</div>
							<div class="dinzh" v-if='dingd ==2'>
								<button>删除订单</button>
								<button class="btde">重新购买</button>
							</div>
						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 1">
			<ul>
				<li v-for='(item,index) in 10' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							2019-11-1 17:16:20
						</div>
						<div class="list-t-r">
							<span>等待买家付款</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li></li>
							<li></li>
						</ul>
						<h2 @click="chakanData(1)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lst-t-d">
							共2款， 3件，合计&yen;5860
						</div>
						<div class="lis-f-f">
							<div class="dinzh">
								<button>取消订单</button>
								<button class="btde" @click="payData">立即付款</button>
							</div>
						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 2">
			<ul>
				<li v-for='(item,index) in 10' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							2019-11-1 17:16:20
						</div>
						<div class="list-t-r">
							<span>等待卖家发货</span>
						</div>
					</div>
					<div class="list-nt">
						<ul>
							<li>
								<img src="../../../assets/logo.png" alt="" />
								<div class="">
									<p>浙江省 杭州市 余杭区好运街风雅乐府...</p>
									<p>颜色分类：白色 尺寸：L150/60A</p>
									<p>3件，¥5860</p>
								</div>
							</li>

						</ul>

					</div>
					<div class="list-f">
						<div class="lis-f-f">
							<div class="dinzhd">
								<button @click="checkenwul">查看物流</button>
								<button class="btde" @click="querenData(1)">确认收货</button>
							</div>
						</div>
					</div>

				</li>
			</ul>

		</div>
		<div class="quanbu" v-if="select == 3">
			<ul>
				<li v-for='(item,index) in 10' :key='index'>

					<div class="list-t">
						<div class="list-t-l">
							2019-11-1 17:16:20
						</div>
						<div class="list-t-r">
							<span>
									已完成
								</span>
							<span>等待买家付款</span>
							<span>已取消</span>
						</div>
					</div>
					<div class="list-n">
						<ul>
							<li></li>
							<li></li>
						</ul>
						<h2 @click="chakanData(1)">查看全部 》</h2>
					</div>
					<div class="list-f">
						<div class="lst-t-d">
							共2款， 3件，合计&yen;5860
						</div>
						<div class="lis-f-f">
							<div class="dinzh" v-if='dingd ==0'>
								<button>删除订单</button>
								<button @click="checkenwul">查看物流</button>
								<button class="btde">去评价</button>
							</div>
							<div class="dinzh" v-if='dingd ==1'>
								<button>取消订单</button>
								<button class="btde">去支付</button>
							</div>
							<div class="dinzh" v-if='dingd ==2'>
								<button>删除订单</button>
								<button class="btde">重新购买</button>
							</div>
						</div>
					</div>

				</li>
			</ul>

		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	
	export default {
		data() {
			return {
				select: 0,
				dingd: 0,
				list: [{
						name: '全部'
					},
					{
						name: '待付款'
					},
					{
						name: '待收货'
					},
					{
						name: '待评价'
					}

				]
			}
		},
		components: {
			headt
		},
		methods: {
			back() {
				this.$router.go(-1)

			},
			changestyle(index) {
				this.select = index

			},
			checkenwul(idt){
				this.$router.push('/myorder/wuliu/2')
				
			},
			chakanData(id){
				this.$router.push('/myorder/alldan/2')
			},
			querenData(idt){
				this.$router.push('/myorder/bourse')
			},
			payData(){
				this.$router.push('/myorder/payinfo')			
			}

		}
	}
</script>

<style lang="stylus" scoped>
	.morder {
		padding-bottom: 98px;
		box-sizing: border-box;
		background: rgba(225, 225, 225, .5);
		.quanbu {
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
								margin-top: 0!important;
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
						height: 160px;
						background: #fff;
						padding: 26px 47px 0 0;
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
								height:150px ;
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
</style>