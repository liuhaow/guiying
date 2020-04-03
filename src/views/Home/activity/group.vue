<template>
	<div class="addxuqu">
		<headt message='今日团购'></headt>
		<div class="a-d-d">
			<ul>
				<li v-for='item in mlist'>
					<div class="t-g-imh" @click="tuanDatail(item.id)">
						<img :src="item.goods_cover" alt="" />
					</div>
					<p class="mingc">{{item.goods_name}} </p>

					<div class="t-g-f-t">
						<div class="t-g-f-j">
							<p>秒杀价：&yen;{{item.show_price}} <span class="yuanjia">&yen;{{item.old_price}}</span></p>
						</div>
						<!--<div class="t-g-f-b" @click="addhouwuAdd(item.goods_id)">
							<!--<img src="../../../../static/img/jgwc.png" />
						</div>-->
					</div>
				</li>
			</ul>

		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { hometugou } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	import { addshopcar } from '@/api/mine'

	import { Notify } from 'vant';
	export default {
		data() {
			return {
				mlist: []
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
				page: 1
			}
			hometugou(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.mlist = res.data.data
				}
			})
		},
		methods: {
			tuanDatail(idt) {
				this.$router.push('/pintu/pintuan/' + idt)

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
				let data = {
					token: this.TokenId,
					cid: idt,
					num: 1,
					type: 1,
					classify: 2

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
	.addxuqu {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-bottom: 30px;
		box-sizing: border-box;
		overflow: auto;
		.a-d-d {
			flex: 1;
			overflow: auto;
			ul {
				height: 96%;
				overflow: auto;
				padding: 0 20px;
				box-sizing: border-box;
				li {
					width: 345px;

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
						margin: 20px 0 10px;
					}
					.t-g-f-t {
						height: 48px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.t-g-f-b {
							img {
								height: 48px;
								width: 48px;
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
	}
</style>