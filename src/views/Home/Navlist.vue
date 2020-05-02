<template>
	<div class="navlist">
		<div class="nav-ul">
			<ul>
				<li class='issueli' v-for='(item,index) in list' :key='index' @click="changestyle(index,item.id)" :class="{'chost':selected==index+1}">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="scroller" ref='scroller'>

			<scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
				<ul class="nav-mian">
					<li v-for="(item,index) in tlist" :key='index'>
						<div class="nav-l" @click="checkdetail(item.id)">
							<img :src="item.cover" alt="" />
						</div>
						<div class="nav-r">
							<p class="nav-title" @click="checkdetail(item.id)">{{item.title}}</p>
							<div class="nav-z-k">
								<p @click="checkdetail(item.id)"><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
								<h2 @click="addhouwuAdd(item)">
									<img src="../../../static/img/jgwc.png"/>
								</h2>
							</div>
						</div>
					</li>
				</ul>
			</scroller>

		</div>

	</div>
</template>

<script>
	import { shangpingData, indexList } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify, Toast, Dialog } from 'vant';

	import { addshopcar } from '@/api/mine'
	export default {
		data() {
			return {
				active: true,
				selected: 1,
				tlist: [],
				list: [],
				isLoading: true,
				page: 0
			}
		},

		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data = {
				type: 0,
				page: 1
			}

			indexList().then(res => {
				if(res.data.code == 200) {
					this.list = res.data.data
				}
			})
		},
		methods: {

			//上拉加载
			infinite: function() {
				console.log('infinite')
				var that = this
				that.page = that.page + 1

				let data = {
					type: that.selected,
					page: that.page
				}
				shangpingData(data).then(res => {
					if(res.data.code == 200) {
						if(res.data.data.length > 0) {
							if(that.tlist.length > 0) {
								that.tlist.concat(res.data.data)
								let dtw = res.data.data
								that.tlist = that.tlist.concat(dtw)
							} else {
								that.tlist = res.data.data
							}
							that.$refs.myscroller.finishInfinite(true);
						} else {
							that.$refs.myscroller.finishInfinite(true);

						}
					} else {
						that.$refs.myscroller.finishInfinite(true);
					}
				})
			},
			//下拉刷新 
			refresh: function() {
				console.log('refresh')
				var that = this
				let data = {
					type: that.selected,
					page: 1
				}
				that.page = 1
				shangpingData(data).then(res => {
					if(res.data.code == 200) {
						this.tlist = res.data.data
						this.$refs.myscroller.finishPullToRefresh()
					} else {

					}
				})

			},

			changestyle(index, idt) {
				this.selected = idt;
				let data = {
					type: idt,
					page: 1
				}
				shangpingData(data).then(res => {

					if(res.data.code == 200) {
						this.tlist = res.data.data
					}
				})

			},
			checkdetail(idt) {
				var that = this
				that.$router.push('/overall/detail/' + idt)
			},
			addhouwuAdd(idt) {
				if(this.TokenId == '') {
					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});
					return
				}
				let kind
				if(idt.is_sku == 0) {
					kind = 0
				} else if(idt.is_sku == 1) {
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
					if(res.data.code == 200) {
						Toast.success(res.data.msg);
					} else if(res.data.code == 100002) {
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
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.navlist {
		width: 100%;
		background: #fff;
		.nav-ul {
			height: 100px;
			background: #FFF;
			ul {
				overflow-x: auto;
				white-space: nowrap;
				width: auto;
				li {
					width: 178px;
					height: 100px;
					background: #fff;
					line-height: 100px;
					position: relative;
					text-align: center;
					font-size: 32px;
					color: #333;
					display: inline-block;
				}
				.chost {
					color: #3FB94D!important;
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
			}
		}
		.scroller {
			position: relative;
			height: 1000px;
		}
		.nav-mian {
			li {
				display: flex;
				height: 173px;
				margin-bottom: 20px;
				.nav-l {
					width: 250px;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						height: 150px;
						width: 150px;
					}
				}
				.nav-r {
					width: 500px;
					height: 170px;
					border-bottom: 2px solid #f5f5f5;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.nav-title {
						font-size: 28px;
						line-height: 34px;
						font-family: PingFang SC;
						font-weight: 500;
						height: 80px;
						padding-top: 15px;
						box-sizing: border-box;
						color: rgba(51, 51, 51, 1);
					}
					.nav-z-k {
						display: flex;
						position: relative;
						justify-content: space-between;
						padding-right: 28px;
						height: 70px;
						align-items: center;
						box-sizing: border-box;
						p {
							width: 80%;
							height: 70px;
							line-height: 70px;
							.zh-j {
								color: #ff6501;
								font-size: 36px;
							}
							.yu-j {
								font-size: 26px;
								margin-left: 20px;
								font-weight: 500;
								text-decoration: line-through;
								color: #C1C1C1!important;
							}
						}
						h2 {
							img {
								width: 48px;
								height: 48px;
								border-radius: 50%;
							}
						}
					}
				}
			}
		}
	}
</style>