<template>
	<div class="navlist">
		<div class="nav-ul">
			<ul>
				<li class='issueli' v-for='(item,index) in list' @click="changestyle(index,item.id)" :class="{'chost':selected==index+1}">
					{{item.name}}
				</li>
			</ul>
		</div>
		<div class="nav-list">
			<ul class="nav-mian">
				<li v-for="(item,index) in tlist">
					<div class="nav-l" @click="checkdetail(item.id)">
						<img :src="item.cover" alt="" />
					</div>
					<div class="nav-r">
						<p class="nav-title">{{item.title}}</p>
						<div class="nav-z-k">
							<p><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
							<h2 @click="addhouwuAdd(item.id)">
								<img src="../../../static/img/jgwc.png"/>
							</h2>
						</div>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import { shangpingData,indexList } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { Dialog } from 'vant';
	
	import { addshopcar } from '@/api/mine'
	export default {
		data() {
			return {
				active: true,
				selected: 1,
				tlist: [],
				list: []
			}
		},
		watch: {
			selected(newId) {
				let data = {
					type: newId,
					page: 1
				}
				shangpingData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.tlist = res.data.data
					}
				})
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
			shangpingData(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.tlist = res.data.data
				}
			})
			indexList().then(res => {
					if(res.data.code == 200) {
						this.list = res.data.data
					}
				})
		},
		methods: {
			changestyle(idt,idtd) {
				this.selected = idtd
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
						font-size: 24px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						margin-bottom: 32px;
					}
					.nav-z-k {
						display: flex;
						justify-content: space-between;
						padding-right: 28px;
						box-sizing: border-box;
						p {
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