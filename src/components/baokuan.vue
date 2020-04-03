<template>
	<div class="guess-i">
		<van-divider :style="{ color: '#9999', borderColor: '#999', padding: '0 40px' }">
			猜你喜欢
		</van-divider>
		<ul class="guess-list">
			<li v-for="(item,index) in mlist">
				<div class="list-t" @click="checkdetail(item.id)">
					<img :src="item.cover" />
				</div>
				<p>{{item.title}}</p>
				<div class="goumai">
					<h2>&yen;{{item.now_price}}</h2>
					<h3 @click="addhouwuAdd(item)">
						<img src="../../static/img/jgwc.png" />
					</h3>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Notify,Toast } from 'vant';
	import { addshopcar, guessylove } from '@/api/mine'
	export default {
		data() {
			return {
				mlist: []
			}
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
			guessylove(data).then(res => {
				if(res.data.code == 200) {
					this.mlist = res.data.data
				}
			})
		},
		methods: {
			checkdetail(idt) {
				var that = this
				
			},
			addhouwuAdd(idt) {
				let data = {
					token: this.TokenId,
					cid: idt.id,
					commodity_cover:idt.cover,
					commodity_old_price:idt.old_price,
					commodity_now_price:idt.now_price,
					commodity_title:idt.title,
					num: 1,
					type: 1,
					classify: 1,
					sku_id:idt.sku_id

				}
				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						console.log(2121)
						Toast.success(res.data.msg);
//						Notify({
//							type: 'success',
//							message: res.data.msg
//						});
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
	.guess-i {
		margin-top: 60px;
		width: 100%;
		.guess-list {
			justify-content: space-around;
			flex-wrap: wrap;
			display: flex;
			li {
				width: 360px;
				height: 450px;
				background: #fff;
				margin-bottom: 10px;
				border-radius: 10px;
				padding: 0 20px;
				box-sizing: border-box;
				.list-t {
					width: 100%;
					height: 300px;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						width: 260px;
						height: 260px;
					}
				}
				p {
					font-size: 26px;
					line-height: 30px;
					font-weight: 500;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 30px;
					color: rgba(51, 51, 51, 1);
				}
				.goumai {
					display: flex;
					margin-top: 30px;
					justify-content: space-between;
					align-items: center;
					h2 {
						font-size: 34px;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FF6501;
					}
					h3 {
						img {
							width: 50px;
							height: 50px;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
</style>