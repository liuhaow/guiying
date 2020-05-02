<template>
	<div class="youh">
		<div class="mor-t">
			<img @click="back" src="../../../../static/img/fanhui.png" alt="" /> 优惠券
		</div>
		<div class="you-nav">
			<ul class="you-n-ul">
				<li v-for='(item,index) in list' :key='index' @click="changestyle(index)" :class="{'actt':select===index}">
					{{item.name}}
				</li>
			</ul>
			<div class="you-j-l" v-if="select==0">
				<ul>
					<li v-for="(item,index) in listd" :key='index'>
						<div class="lingqu">
							<h2><span>&yen;</span>{{item.used_amount}}</h2>
							<div class="manj">
								<p>满{{item.with_amount}}使用</p>
								<h3>{{item.valid_start_time}}-{{item.valid_end_time}}</h3>
							</div>
						</div>
						<button @click="lingqudata(index,item.id)"> 立即领取</button>
					</li>
				</ul>
			</div>
			<div class="you-j-l" v-if="select==1">
				<ul>
					<li v-for="(item,index) in listd" :key='index'>
						<div class="lingqu">
							<h2><span>&yen;</span>{{item.used_amount}}</h2>
							<div class="manj">
								<p>满{{item.with_amount}}使用</p>
								<h3>{{item.valid_start_time}}-{{item.valid_end_time}}</h3>
							</div>
						</div>
						<button @click="qushiyondata"> 去使用</button>
					</li>
				</ul>
			</div>
			<div class="you-j-l you-j-g " v-if="select==2">
				<ul>
					<li v-for="(item,index) in listd" :key='index'>
						<div class="lingqu">
							<h2><span>&yen;</span>{{item.used_amount}}</h2>
							<div class="manj">
								<p>满{{item.with_amount}}使用</p>
								<h3>{{item.valid_start_time}}-{{item.valid_end_time}}</h3>
							</div>
						</div>
						<button>已过期</button>
					</li>
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { youhuiData, youhuilinquData } from '@/api/mine'
	export default {
		data() {
			return {
				select: 0,
				dingd: 0,
				list: [{
						name: '待领取'
					},
					{
						name: '未使用'
					},
					{
						name: '已过期'
					}

				],
				listd: []
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data = {
				token: this.TokenId,
				type: 1
			}
			youhuiData(data).then(res => {
				if(res.data.code == 200) {
					this.listd = res.data.data
				}
			})

		},
		methods: {
			back() {
				this.$router.go(-1)

			},
			qushiyondata(){
				this.$router.push('/overall')
			},
			changestyle(index) {
				this.select = index;
				let chost = index + 1
				let data = {
					token: this.TokenId,
					type: chost
				}
				youhuiData(data).then(res => {
					if(res.data.code == 200) {
						this.listd = res.data.data
					}
				})

			},
			lingqudata(ind, idt) {
				let data = {
					coupons_id: idt,
					token: this.TokenId,

				}
				console.log(data)
				youhuilinquData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.listd.splice(ind, 1);
						Notify({
							type: 'success',
							message: res.data.msg
						});
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.youh {
		display: flex;
		height: 100%;
		flex-direction: column;
		padding-bottom: 98px;
		box-sizing: border-box;
		.you-nav {
			flex: 1;
			background: #ffff;
			display: flex;
			flex-direction: column;
			.you-j-g {
				ul {
					li {
						background: #F5F5F5!important;
						.lingqu {
							h2 {
								color: #CCCCCC!important;
							}
							.manj {
								p {
									color: #CCCCCC!important;
								}
								h3 {
									color: #CCCCCC!important;
								}
							}
						}
						button {
							background: rgba(204, 204, 204, 1)!important;
						}
					}
				}
			}
			.you-j-l {
				flex: 1;
				overflow: auto;
				ul {
					height: 1000px;
					overflow: auto;
					li {
						width: 710px;
						height: 148px;
						margin: 0 auto 20px;
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
							width: 148px;
							height: 48px;
							background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
							border-radius: 24px;
							border: none;
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(255, 255, 255, 1);
						}
					}
				}
			}
			.you-n-ul {
				height: 130px;
				display: flex;
				justify-content: space-around;
				align-items: center;
				li {
					width: 180px;
					font-size: 32px;
					font-family: PingFang SC;
					font-weight: 500;
					text-align: center;
					line-height: 50px;
					height: 50px;
					color: #333333;
				}
				.actt {
					color: #3FB94D!important;
					border-bottom: 6px solid #3FB94D;
				}
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
				height: 40px;
				width: 40px;
				z-index: 3;
				left: 20px;
				padding-left: 20px;
				top: 28px;
			}
		}
	}
</style>