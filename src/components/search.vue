<template>
	<div class="wrapper">
		<div class="s-e">
			<h3 @click="back">
				<i slot="icon" class="icon iconfont ">&#xe60d;</i>
				
			</h3>
			<p>
				<i slot="icon" class="icon iconfont ">&#xe615;</i>
				<input type="text" placeholder="请输入" v-model="seach" />

			</p>
			<h2 @click="quxiaoData">搜索</h2>
		</div>

		<div class="seach-w" v-if="seahinfo">
			<van-dropdown-menu>
				<van-dropdown-item v-model="value1" :options="option1" />
				<van-dropdown-item v-model="value2" :options="option2" />
				<van-dropdown-item v-model="value3" :options="option3" />
			</van-dropdown-menu>
			<ul>
				<li v-for='item in mlist'>
					<div class="t-g-imh">
						<img :src="item.cover" alt="" />
					</div>
					<p class="mingc">{{item.title}} </p>

					<div class="t-g-f-t">
						<div class="t-g-f-j">
							<p>&yen;{{item.now_price}} </p>
						</div>
						<div class="t-g-f-b" @click="addhouwuAdd(item.id)">
							<img src="../../static/img/gwuc.jpg" />
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="seach-s" v-if="!seahinfo">
			<div class="history">
				<h1>历史搜索</h1>
				<h2><i slot="icon" class="icon iconfont ">&#xe614;</i>清楚记录</h2>
			</div>
			<ul class="seach-lst">
				<li v-for="(item,index) in list" @click="seachDataindfo()">
					{{item.name}}
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { seachData } from '@/api/api'
	import { addshopcar } from '@/api/mine'
	
	export default {
		data() {
			return {
				seach: '',
				seahinfo: false,
				value1: 0,
				value2: 'a',
				value3: 'd',
				mlist: [],
				option1: [{
					text: '综合',
					value: 0
				}],
				option2: [{
						text: '价格低',
						value: 'a'
					},
					{
						text: '价格高',
						value: 'b'
					}
				],
				option3: [{
						text: '销量高',
						value: 'd'
					},
					{
						text: '销量低',
						value: 'e'
					}
				],
				list: [{
						name: '换帝国'
					}, {
						name: '换帝国换帝国'

					},
					{
						name: '句子'
					},
					{
						name: '换帝国'
					}, {
						name: '换帝国换帝国'

					},
					{
						name: '句子'
					}
				]
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		methods: {
			back() {
				this.$router.go(-1)

			},
			quxiaoData() {
				let data = {
					word: this.seach,
					page: 1,
					now_price: 'asc',
					sold_num: 'asc'
				}
				seachData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						if(res.data.data.length == 0) {
							Notify({
								type: 'success',
								message: '没有您要早的商品，个人中心可以提需求'
							});
							this.seahinfo = false
						} else {
							this.mlist = res.data.data
							this.seahinfo = true

						}

					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			seachDataindfo() {
//				this.seahinfo = true
			},
			addhouwuAdd(idt) {
				let data = {
					token: this.TokenId,
					cid: idt,
					num: 1,
					type: 1,
					classify: 1
				}
				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
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
	.wrapper {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: #E1E1E1;
		overflow: auto;

		display: flex;
		flex-direction: column;
		.seach-w {
			flex: 1;
			overflow: auto;
			ul {
				height: 90%;
				overflow: auto;
				padding: 0 20px;
				box-sizing: border-box;
				li {
					width: 345px;
					height: 496px;
					background: #fff;
					margin-top: 20px;
					padding: 20px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					.t-g-imh {
						height: 305px;
						width: 305px;
						img {
							height: 305px;
							width: 305px;
						}
					}
					.mingc {
						font-size: 24px;
						font-weight: 500;
						line-height: 32px;
						color: rgba(51, 51, 51, 1);
						margin: 30px 0 20px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.t-g-f-t {
						height: 50px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.t-g-f-b {
							img {
								height: 80px!important;
								width: 80px;
							}
						}
					}
					.t-g-f-j {
						p {
							font-size: 26px;
							font-weight: 500;
							/*text-decoration: line-through;*/
							color: rgba(255, 101, 1, 1);
							.yuanjia {
								font-size: 26px;
								margin-left: 10px;
								font-weight: 500;
								text-decoration: line-through;
								color: #C1C1C1!important;
							}
						}
					}
				}
				li:nth-child(n) {
					float: left;
				}
				li:nth-child(2n) {
					float: right;
				}
			}
		}
		.seach-s {
			flex: 1;
			padding: 20px 20px 0;
			background: #fff;
			box-sizing: border-box;
			.seach-lst {
				display: flex;
				flex-wrap: wrap;
				padding-top: 20px;
				li {
					font-size: 28px;
					border: 2px solid rgba(225, 225, 225, 1);
					border-radius: 21px;
					padding: 10px 20px;
					margin-right: 20px;
					margin-bottom: 20px;
				}
			}
			.history {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 40px;
				h1 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				h2 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					i {
						margin-right: 6px;
					}
				}
			}
		}
		.s-e {
			height: 90px;
			display: flex;
			background: #fff;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			h3 {
				font-weight: 500;
				color: #999;
				padding-left: 20px;
				height: 100%;
				display: flex;
				align-items: center;
				.icon {
					font-size: 38px;
				}
			}
			h2 {
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: 500;
				color: #999;
				padding-right: 20px;
				height: 100%;
				display: flex;
				align-items: center;
			}
			p {
				width: 70%;
				height: 68px;
				background: rgba(245, 245, 245, 1);
				border-radius: 32px;
				display: flex;
				align-items: center;
				padding-left: 20px;
				box-sizing: border-box;
				i {
					font-size: 36px;
					color: #999999;
					margin-right: 20px;
				}
				input {
					background: none;
					border: none;
					font-size: 36px;
					color: #999;
				}
			}
		}
	}
</style>