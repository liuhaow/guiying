<template>
	<div class="tuihuo">
		<headt message='退货'></headt>
		<div class="wu-l">
			<ul>
				<li v-for="(item,index) in list" :key='index'>
					<div class="t-h-t">
						<h2>订单号 {{item.order_num}}</h2>
						<!--<h3>订单已完成</h3>-->
					</div>
					<div class="t-h-n">
						<ul>
							<li>
								<img v-for="(idt,index) in item.cover" :key='index' :src="idt.cover" alt="" />

							</li>
						</ul>
						<h2>查看全部  <i slot="icon" class="icon iconfont " @click="quanbuqingdan(item.id)">&#xe644;</i></h2>
					</div>
					<div class="t-h-f">
						<h2>合计¥{{item.total_price}}</h2>
						<div class="">
							<button @click="chakanData(item.id)">查看物流</button>

							<button @click="sqingjinduData(item.id)">申请进度</button>
						</div>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters } from 'vuex'
	import { Notify } from 'vant';

	import { tuihuodata } from '@/api/mine'
	export default {
		data() {
			return {
				list: []
			}
		},
		components: {
			headt

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
			tuihuodata(data).then(res => {
				if(res.data.code == 200) {
					this.list = res.data.data
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});

				}
			})
		},
		methods: {
			chakanData(idt) {
				this.$router.push('/myorder/wuliu/' + idt)
			},
			tuihuoData(item) {
				console.log(item)
				this.$router.push({
					path: '/myorder/sqingth',
					query: {
						idt: item.id,
						numb: item.order_num,
						totle: item.total_price
					}
				})
			},
			quanbuqingdan(idt) {
				this.$router.push('/myorder/alldan/' + idt)

			},
			sqingjinduData(idt) {
				this.$router.push('/myorder/sqjindu/'+idt)
			}
		}
	}
</script>

<style scoped lang="stylus">
	.tuihuo {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow: auto;
		display: flex;
		flex-direction: column;
		.wu-l {
			flex: 1;
			overflow: auto;
			ul {
				height: 100%;
				overflow: auto;
				li {
					margin-bottom: 20px;
					.t-h-t {
						height: 68px;
						background: #fff;
						display: flex;
						padding: 0 20px;
						box-sizing: border-box;
						justify-content: space-between;
						align-items: center;
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
						h3 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(8, 194, 26, 1);
						}
					}
					.t-h-n {
						height: 195px;
						display: flex;
						padding: 0 20px;
						box-sizing: border-box;
						justify-content: space-between;
						align-items: center;
						ul {
							display: flex;
							align-items: center;
							li {
								margin: 0!important;
								display: flex;
								img {
									width: 152px;
									height: 152px;
									margin-right: 10px;
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
					.t-h-f {
						height: 160px;
						background: #fff;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						h2 {
							width: 100%;
							text-align: right;
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							padding-right: 30px;
							box-sizing: border-box;
						}
						div {
							display: flex;
							justify-content: flex-end;
							width: 100%;
							button {
								width: 200px;
								height: 56px;
								border: 2px solid rgba(225, 225, 225, 1);
								border-radius: 28px;
								font-size: 26px;
								font-weight: 500;
								background: none;
								color: rgba(51, 51, 51, 1);
								margin-right: 30px;
							}
						}
					}
				}
			}
		}
	}
</style>