<template>
	<div class="adress">
		<div class="mor-t">
			<img @click="back" src="../../../../static/img/fanhui.png" alt="" />选择收货地址
		</div>
		<div class="adress-l">
			<div style="height: 100%;overflow: auto;">
				<ul>
					<li v-for="(item,index) in fileList" :key='index'>
						<van-swipe-cell>
							<van-cell :border="false">
								<div class="ad-t">
									<h2><span class="spn-a">{{item.name}}</span><span>{{item.mobile}}</span></h2>
									<h3>{{item.area}}{{item.addr}}</h3>
								</div>
								<div class="ad-f">
									<div class="ad-f-l">
										<h2 :class="{'morende':item.moren ==1 }">
									<img src="../../../../static/img/chos.png"  v-if="item.is_default ==1 " alt="" />
									<img src="../../../../static/img/choss.png" @click="shezhimoData(item)" v-else="" alt="" />								
									设为默认
								</h2>
									</div>
									<div class="ad-f-r">
										<h3 @click="qiehuandizhi(item)">切换为此地址</h3>
										<h4 @click="bianjiData(item.id)">编辑</h4>
									</div>
								</div>
							</van-cell>
							<template slot="right">
								<van-button square type="danger" @click='delData(item.id,item.is_default)' text="删除" />
							</template>
						</van-swipe-cell>
					</li>
				</ul>
			</div>
		</div>
		<div class="addAredd">
			<button @click="tianAddate">+ 添加收货地址</button>
		</div>
	</div>
</template>

<script>
	import { AddrlistInfo, ShezhiAddr, delAddressdata } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	export default {
		data() {
			return {
				fileList: []
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			var that = this
			let data = {
				token: this.TokenId
			}
			AddrlistInfo(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					that.fileList = res.data.data
					that.fileList.forEach((item)=>{
						if(item.is_default ==1){
							that.getaDta(item)						
						}
					})
				} else {
					Notify({
						type: 'danger',
						message: res.data.msg
					});
				}
			})

		},
		methods: {
			...mapActions(
				[
					'getaDta',
					'qiehuandata'
				]
			),
			back() {
				this.$router.go(-1)
			},
			delData(idt, modt) {
				var that = this;
				let data = {
					aid: idt,
					token: that.TokenId
				}
				let pary={
					token: that.TokenId
					
				}
				delAddressdata(data).then(res => {
					if(res.data.code == 200) {
						if(modt == 1) {
							localStorage.removeItem('getadrss')
						}
						AddrlistInfo(pary).then(res => {

							if(res.data.code == 200) {
								that.fileList = res.data.data
							} else {
								Notify({
									type: 'danger',
									message: res.data.msg
								});
							}
						})
					}
				})
			},
			tianAddate() {
				var that = this
				that.$router.push('/mine/adddizhi')
			},
			bianjiData(idt) {
				var that = this
				that.$router.push('/mine/bianji/' + idt)
			},
			qiehuandizhi(ite) {
				var that = this
				that.qiehuandata(ite)

				that.$router.go(-1)

			},
			shezhimoData(ite) {
				var that = this

				let data = {
					token: that.TokenId,
					addr_id: ite.id
				}
				ShezhiAddr(data).then(res => {
					if(res.data.code == 200) {
						that.getaDta(ite)
						let index = that.fileList.findIndex(item => {
							return item.id == ite.id
						})
						for(let i in that.fileList) {
							that.fileList[i].is_default = 0
						}
						that.fileList[index].is_default = 1;
						Notify({
							type: 'success',
							message: res.data.msg
						});

					} else {
						Notify({
							type: 'danger',
							message: res.data.msg
						});

					}
				})

			}
		}
	}
</script>

<style lang="stylus" scoped>
	>>>.van-swipe-cell__right {
		display: flex;
		align-items: center;
	}
	
	>>>.van-cell {
		padding: 0!important;
		background: none!important;
	}
	
	.adress {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-bottom: 20px;
		.adress-l {
			flex: 1;
			overflow: auto;
			ul {
				li {
					width: 710px;
					height: 252px;
					background: rgba(255, 255, 255, 1);
					padding: 0 15px;
					box-sizing: border-box;
					border-radius: 8px;
					margin: 20px auto 0;
					.ad-t {
						height: 170px;
						border-bottom: 2px solid #E1E1E1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						h2 {
							font-size: 30px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(0, 0, 0, 1);
							margin-bottom: 35px;
							.spn-a {
								margin-right: 20px;
							}
						}
						h3 {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
					.ad-f {
						display: flex;
						justify-content: space-between;
						height: 80px;
						align-items: center;
						.ad-f-l {
							.morende {
								color: rgba(63, 185, 77, 1)!important;
							}
							h2 {
								font-size: 26px;
								font-family: PingFang SC;
								font-weight: 400;
								color: #333;
								img {
									height: 38px;
									width: 38px;
									margin-right: 5px;
								}
							}
						}
						.ad-f-r {
							display: flex;
							align-items: center;
							h3 {
								width: 168px;
								height: 42px;
								border: 2px solid rgba(225, 225, 225, 1);
								border-radius: 3px;
								font-size: 24px;
								font-family: PingFang SC;
								font-weight: 400;
								line-height: 42px;
								text-align: center;
								color: rgba(0, 0, 0, 1);
								margin-right: 30px;
							}
							h4 {
								width: 128px;
								height: 42px;
								line-height: 42px;
								text-align: center;
								border: 2px solid rgba(225, 225, 225, 1);
								border-radius: 3px;
								font-size: 24px;
								font-family: PingFang SC;
								font-weight: 400;
								color: rgba(0, 0, 0, 1);
							}
						}
					}
				}
			}
		}
		.addAredd {
			position: fixed;
			bottom: 170px;
			display: flex;
			width: 100%;
			justify-content: center;
			button {
				width: 336px;
				height: 80px;
				border: 2px solid rgba(204, 204, 204, 1);
				border-radius: 40px;
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
		.adress-l {
			height:
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
				top: 20px;
			}
		}
	}
</style>