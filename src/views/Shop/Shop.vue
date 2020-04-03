<template>
	<div class="totles">
		<div class="all-t">
			<div class="mai-t-c" @click="seachData">
				<i slot="icon" class="icon iconfont ">&#xe615;</i>输入您要的物品
			</div>
		</div>
		<div class="all-list">
			<ul class="a-l-s-t">
				<li v-for="(item,index) in leftl" @click="changestyle(index,item.id)" :class="{'xuan':chose===index}">{{item.name}}</li>
			</ul>
			<div class="scroller" ref='scroller'>
				<scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">

			<ul class="a-l-r" ref="myscrollerul">
				<li v-for="(item,index) in tlist" :key='index'>
					<img :src="item.cover" class="mlistimg" @click="checkdetail(item.id)" />
					<div class="a-l-t-d">
						<p @click="checkdetail(item.id)">{{item.title}}</p>
						<div class="listxi">
							<h2 @click="checkdetail(item.id)">
								<span class="newp">&yen;{{item.now_price}}</span><br />
								<span class="oldp">&yen;{{item.old_price}}</span>
							</h2>
							<h3 @click="addhouwuAdd(item.id)">
								<img src="../../../static/img/jgwc.png"/>
							</h3>
						</div>
					</div>
				</li>
			</ul>
			</scroller>

			</div>
		</div>
		<tabbar tabName='2'></tabbar>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { shangpingData,indexList } from '@/api/api'
	import { Notify } from 'vant';
	import { addshopcar } from '@/api/mine'
	import tabbar from "@/components/abbar"

	export default {
		data() {
			return {
				chose: 0,
				leftl: [],
				tlist: [],
				page:0
			}
		},
		components: {
			tabbar
		},
		mounted() {
			indexList().then(res => {
				if(res.data.code == 200) {
					this.leftl = res.data.data

				}else{
					
				}
			})
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		methods: {
			...mapActions(
				[
					'chooseilt'
				]
			),
			seachData() {
				this.$router.push('/home/seach')

			},
			checkdetail(idt) {
				var that = this
				that.$router.push('/overall/detail/' + idt)
			},
			changestyle(index,idt) {
				var  that = this
				that.chose = index
				that.page=1
				
				let data = {
					type: idt,
					page: 1
				}		

				shangpingData(data).then(res => {

					if(res.data.code == 200) {
						that.tlist = res.data.data
					}
				})

			},
			//上拉加载
			infinite: function() {
				console.log('infinite')
				var that = this
				that.page = that.page + 1
				console.log(that.page)
				let data = {
					type: that.chose+1,
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
					}else{
						that.$refs.myscroller.finishInfinite(true);						
					}
				})
			},
			//下拉刷新 
			refresh: function() {
				console.log('refresh')
				var that = this
				let data = {
					type: that.chose+1,
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
			addhouwuAdd(idt) {
				let data = {
					token: this.TokenId,
					cid: idt,
					num: 1,
					type: 1,
					classify: 1

				}
				addshopcar(data).then(res => {
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
	.totles {
		padding: 20px 0 100px;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		height: 100%;
		flex-direction: column;
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
					font-size: 38px!important;
					margin-right: 15px;
				}
			}
		}
		.all-list {
			flex: 1;
			overflow: auto;
			display: flex;
			justify-content: space-between;
			background: #fff;
			.a-l-s-t {
				width: 180px;
				height: 100%;
				overflow: auto;
				background: #E1E1E1;
				.xuan {
					background: #fff;
					color: #000000!important;
				}
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
						}
						.listxi {
							margin-top: 60px;
							display: flex;
							justify-content: space-between;
							align-items: center;
							h2 {
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