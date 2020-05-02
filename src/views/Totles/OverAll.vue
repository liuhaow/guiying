<template>
	<div class="totles">
		<div class="all-t">
			<div class="mai-t-c" @click="seachData">
				<i slot="icon" class="icon iconfont ">&#xe615;</i>输入您要的物品
			</div>
		</div>
		<div class="nav-ul">
			<ul>
				<li class='issueli' v-for='(item,index) in leftl ' @click="changestyle(index,item.id)" :class="{'xuan':chose===index+1}">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="all-list">
			<ul class="a-l-s-t">
				<li v-for="(item,index) in list" @click="changefd(index,item.id)" :class="{'chost':selected===index+1}">{{item.name}}</li>
			</ul>
			<div class="scroller" ref='scroller'>
				<scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">

					<ul class="a-l-r">
						<li v-for="item in mlist">
							<img :src="item.cover" class="mlistimg" @click="checkdetail(item.id)" />
							<div class="a-l-t-d">
								<p @click="checkdetail(item.id)">{{item.title}}</p>
								<div class="listxi">
									<h2 @click="checkdetail(item.id)">
										<span class="newp">&yen;{{item.now_price}}</span><br />
										<span class="oldp">&yen;{{item.old_price}}</span>
									</h2>
									<h3 @click="addhouwuAdd(item)">
										<img src="../../../static/img/jgwc.png" />
									</h3>
								</div>
							</div>
						</li>
					</ul>
				</scroller>

			</div>
		</div>
		<tabbar tabName='1'></tabbar>

	</div>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import {
		shangpingData,
		dierleibei,
		xiaofenlei,
		indexList
	} from '@/api/api'
	import {
		Notify,
		Toast,
		Dialog
	} from 'vant';
	import {
		addshopcar
	} from '@/api/mine'

	import tabbar from "@/components/abbar"

	export default {
		data() {
			return {
				chose: 1,
				selected: 0,
				list: [],
				leftl: [],
				mlist: [],
				page: 0,
				listid: ''
			}
		},
		computed: {
			...mapGetters({
				lit: 'lit',
				TokenId: 'TokenId'
			})
		},
		components: {
			tabbar
		},
		created() {
			this.chose = this.lit;

		},
		mounted() {
			let litd = this.lit
			let pary = {
				type: litd
			}
			xiaofenlei(pary).then(res => {
				if (res.data.code == 200) {
					this.list = res.data.data
				}
			})
			indexList().then(res => {
				if (res.data.code == 200) {
					this.leftl = res.data.data
				}
			})
		},
		methods: {
			...mapActions(
				[
					'chooseilt'
				]
			),
			changefd(ind, idt) {
				console.log(idt)
				var that = this;
				that.selected = ind + 1;
				that.listid = idt;

				let data = {
					type: that.chose,
					type_son: idt,
					page: 1
				}
				dierleibei(data).then(res => {
					if (res.data.code == 200) {
						that.mlist = res.data.data
					} else {

					}
				})

			},
			seachData() {
				this.$router.push('/home/seach')

			},
			changestyle(index, idt) {
				var that = this
				that.chose = idt;
				that.selected = 0
				that.listid = '';
				that.chooseilt(idt)
				let data = {
					type: idt,
					page: 1
				}
				shangpingData(data).then(res => {
					if (res.data.code == 200) {
						that.mlist = res.data.data
					}
				})
				let pary = {
					type: idt
				}
				xiaofenlei(pary).then(res => {
					if (res.data.code == 200) {
						this.list = res.data.data
					}
				})

			},
			checkdetail(idt) {
				var that = this
				that.$router.push('/overall/detail/' + idt)
			},
			addhouwuAdd(idt) {
				if (this.TokenId == '') {
					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let kind
				if (idt.is_sku == 0) {
					kind = 0
				} else if (idt.is_sku == 1) {
					kind = idt.sku_id
				}
				let data = {
					token: this.TokenId,
					cid: idt.id,
					commodity_cover: idt.cover,
					commodity_old_price: idt.old_price,
					commodity_now_price: idt.now_price,
					commodity_title: idt.title,
					num: 1,
					type: 1,
					classify: 1,
					sku_id: kind
				}

				addshopcar(data).then(res => {
					console.log(res)
					if (res.data.code == 200) {
						Toast.success(res.data.msg);
					} else if (res.data.code == 100002) {
						Dialog.confirm({
							title: '提示',
							message: '需要登录'
						}).then(() => {
							this.$router.push('/need/login')
						}).catch(() => {});
						return
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			//上拉加载
			infinite: function() {
				console.log('infinite')
				var that = this
				that.page = that.page + 1
				if (that.selected > 0) {
					let data = {
						type: that.chose,
						type_son: that.listid,
						page: that.page
					}
					dierleibei(data).then(res => {
						if (res.data.code == 200) {
							if (res.data.data.length > 0) {
								let dtw = res.data.data
								that.mlist = that.mlist.concat(dtw)
								that.$refs.myscroller.finishInfinite(true);
							} else {
								that.$refs.myscroller.finishInfinite(true);
							}
						} else {
							that.$refs.myscroller.finishInfinite(true);
						}
					})
				} else {
					let data = {
						type: that.chose,
						page: that.page
					}
					shangpingData(data).then(res => {
						if (res.data.code == 200) {
							if (res.data.data.length > 0) {
								if (that.mlist.length > 0) {
									that.mlist.concat(res.data.data)
									let dtw = res.data.data
									that.mlist = that.mlist.concat(dtw)

								} else {
									that.mlist = res.data.data
								}

								that.$refs.myscroller.finishInfinite(true);
							} else {
								that.$refs.myscroller.finishInfinite(true);
							}
						} else {
							that.$refs.myscroller.finishInfinite(true);
						}
					})
				}

			},

			//下拉刷新 
			refresh: function() {
				console.log('refresh')
				var that = this
				that.page = 1
				if (that.selected > 0) {
					let data = {
						type: that.chose,
						type_son: that.listid,
						page: 1
					}
					dierleibei(data).then(res => {
						if (res.data.code == 200) {
							that.mlist = res.data.data
							that.$refs.myscroller.finishPullToRefresh()
						} else {
							that.$refs.myscroller.finishPullToRefresh()
						}
					})
				} else {
					let data = {
						type: that.chose,
						page: 1
					}
					shangpingData(data).then(res => {
						if (res.data.code == 200) {
							that.mlist = res.data.data
							that.$refs.myscroller.finishPullToRefresh()
						} else {
							that.$refs.myscroller.finishPullToRefresh()
						}
					})
				}

			}

		}
	}
</script>

<style lang="stylus" scoped>
	.chost {
		color: #3FB94D !important;
	}

	.chost:after {
		content: '';
		position: absolute;
		z-index: 22;
		width: 36px;
		height: 4px;
		left: 40%;
		top: 80px;
		background: linear-gradient(-36deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
		border-radius: 2px;
	}

	.totles {
		padding: 20px 0 100px;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		height: 100%;
		flex-direction: column;

		.nav-ul {
			height: 70px;
			background: #e1e1e1;

			ul {
				overflow-x: auto;
				white-space: nowrap;
				width: auto;

				.xuan {
					background: #fff;
					color: #000000 !important;
				}

				li {
					width: 178px;
					height: 70px;
					background: #e1e1e1;
					line-height: 70px;
					position: relative;
					text-align: center;
					font-size: 28px;
					color: #999;
					display: inline-block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.all-t {
			display: flex;
			justify-content: center;
			height: 70px;

			div {
				width: 636px;
				height: 64px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(245, 245, 245, 1);
				border-radius: 32px;
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);

				i {
					font-size: 38px !important;
					margin-right: 15px;
				}
			}
		}

		.all-list {
			flex: 1;
			overflow: auto;
			display: flex;
			background: #fff;
			justify-content: space-between;

			.a-l-s-t {
				width: 180px;
				height: 100%;
				overflow: auto;
				background: #E1E1E1;

				li {
					width: 180px;
					height: 80px;
					line-height: 80px;
					text-align: center;
					border-bottom: 2px solid #DAD6D6;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					background: #E1E1E1;
				}
			}

			.scroller {
				position: relative;
				width: 74%;
				height: 100%;
			}

			.a-l-r {
				width: 100%;
				height: 100%;
				overflow: auto;

				li {
					height: 220px;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.mlistimg {
						height: 180px;
						width: 180px;
					}

					.a-l-t-d {
						width: 350px;
						height: 218px;
						border-bottom: 2px solid #E1E1E1;
						display: flex;
						flex-direction: column;
						justify-content: center;

						p {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							line-height: 34px;
							color: rgba(51, 51, 51, 1);
							padding-bottom: 60px;
						}

						.listxi {
							
							display: flex;
							justify-content: space-between;
							align-items: center;

							h2 {
								width:79%;
								.newp {
									color: #FB0E3A;
									font-size: 32px;
								}

								.oldp {
									font-size: 28px;
									font-weight: 500;
									text-decoration: line-through;
									color: #ccc;
								}
							}

							h3 {
								img {
									width: 50px;
									height: 50px;
									margin-right: 20px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
