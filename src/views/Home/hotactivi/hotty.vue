<template>
	<div class="fash">
		<headt message='新鲜品尝'></headt>
		<div class="main-f">
			<div class="f-h-b">
				<van-swipe indicator-color="white">

					<van-swipe-item v-for='(item,index) in lunb' :key="index">
						<img :src="item.image" alt="" />
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="nav-ul">
				<ul>
					<li class='issueli' v-for='(item,index) in list' @click="changestyle(index)" :class="{'chost':selected===index}">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="list-inf">
				<van-divider :style="{ color: '#fff', borderColor: '#fff', padding: '0 16px' }">
					新品力荐
				</van-divider>
				<ul>
					<li v-for="(item,index) in listd" :key='index'>
						<img class="Imgt" :src="item.cover" alt=""  @click="checkdetail(item.id)"/>
						<p>{{item.title}}</p>
						<div class="di-bu">
							<h2>&yen;{{item.now_price}}</h2>
							<h3 @click="addhouwuAdd(item.id)"><img src="../../../../static/img/jgwc.png"/></h3>
						</div>
					</li>

				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { Newtryinfo, Newtryinfotype, Newlotype } from '@/api/api'
	import { addshopcar } from '@/api/mine'
	
	export default {
		data() {
			return {
				selected: 0,
				list: [{
						name: '新鲜蔬菜'
					},
					{
						name: '肉禽蛋品'
					},
					{
						name: '粮油米面'
					},
					{
						name: '酒水饮料'

					},
					{
						name: '调味干货'

					},
					{
						name: '水产海鲜'

					},
					{
						name: '餐厨用品'

					},
					{
						name: '火锅专用'

					},
					{
						name: '烧烤专用'
					},
					{
						name: '会员专享'
					}

				],
				listd: [],
				lunb: []
			}
		},
		components: {
			headt

		},
		mounted() {
			let tzt;
			let data = {
				types: 1,
				ty: this.$route.query.ty,
				page: 1
			}
			Newtryinfo(data).then(res => {
				if(res.data.code == 200) {
					this.listd = res.data.data
				}
			})

			if(this.$route.query.ty == 1) {
				tzt = 4
			} else if(this.$route.query.ty == 2){
				tzt= 5
			}
			let pary = {
				t: tzt
			}
			Newlotype(pary).then(res => {
				if(res.data.code == 200) {
					this.lunb = res.data.data
				}
			})
		},
		methods: {
			changestyle(itd) {
				this.selected = itd;
				let data = {
					types: itd + 1,
					page: 1,
					ty: this.$route.query.ty,

				}
				Newtryinfo(data).then(res => {
					if(res.data.code == 200) {
						this.listd = res.data.data
					}
				})
			},
			checkdetail(idt) {
				var that = this
				that.$router.push('/overall/detail/' + idt)
			},
			addhouwuAdd(idt) {
				if(this.TokenId == '') {
					console.log(123)
					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
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
<style scoped lang="stylus">
	.fash {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		.main-f {
			flex: 1;
			background: #50B46C;
			overflow: auto;
			.list-inf {
				ul {
					display: flex;
					flex-wrap: wrap;
					padding: 0 10px;
					box-sizing: border-box;
					margin-top: 30px;
					li {
						width: 32%;
						height: 400px;
						background: #fff;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						padding: 0 10px;
						box-sizing: border-box;
						margin-bottom: 10px;
						margin-right: 8px;
						border-radius: 5px;
						.Imgt {
							width: 200px;
							height: 200px;
						}
						p {
							font-size: 26px;
							color: #333;
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin: 30px 0 30px;
							line-height: 30px;
						}
						.di-bu {
							display: flex;
							width: 100%;
							justify-content: space-between;
							align-items: center;
							h2 {
								font-size: 34px;
								color: #FF6501;
							}
							h3 {
								img {
									height: 50px;
									width: 50px;
								}
							}
						}
					}
				}
			}
			.nav-ul {
				height: 90px;
				background: #FFF;
				ul {
					overflow-x: auto;
					white-space: nowrap;
					width: auto;
					li {
						width: 178px;
						height: 90px;
						background: #fff;
						line-height: 100px;
						position: relative;
						text-align: center;
						font-size: 28px;
						color: #333;
						display: inline-block;
					}
					.chost {
						color: #3FB94D!important;
					}
				}
			}
		}
		.f-h-b {
			height: 400px;
			>>>.van-swipe {
				height: 100%;
				.van-swipe__track {
					.van-swipe-item {
						img {
							width: 100%!important;
							height: 100%!important;
						}
					}
				}
			}
		}
	}
</style>