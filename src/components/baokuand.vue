<template>
	<div class="guess-i">
		<van-divider :style="{ color: '#9999', borderColor: '#999', padding: '0 40px' }">
			爆款推荐
		</van-divider>
		<ul class="guess-list">
			<li v-for="(item,index) in mlist">
				<div class="list-t" @click="checkdetail(item.id)">
					<img :src="item.cover" />
				</div>
				<p @click="checkdetail(item.id)">{{item.title}}</p>
				<div class="goumai">
					<h2 @click="checkdetail(item.id)">&yen;{{item.now_price}}</h2>
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
	import { addshopcar, hotgoudata } from '@/api/mine'
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
				page: 1
			}
			hotgoudata(data).then(res => {
				if(res.data.code == 200) {
					this.mlist = res.data.data
				}
			})
		},
		
		methods: {
			checkdetail(idt) {
				var that = this
				that.$router.push('/overall/detail/' + idt)
			},
			addhouwuAdd(idt) {
				var that = this
				let kind
				if(idt.is_sku == 0) {
					kind = 0
				} else if(idt.is_sku == 1) {
					kind = idt.sku_id
				}
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
					sku_id:kind

				}
				addshopcar(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						that.$emit("click");
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
		margin-top: 30px;
		width: 100%;
		.guess-list {
			justify-content: space-around;
			flex-wrap: wrap;
			display: flex;
			li {
				width: 360px;

				background: #fff;
				margin-bottom: 10px;
				border-radius: 10px;
				padding: 0 20px 20px;
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
					line-height: 50px;
					font-weight: 500;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 50px;
					color: rgba(51, 51, 51, 1);
				}
				.goumai {
					display: flex;

					justify-content: space-between;
					align-items: center;
					h2 {
						font-size: 34px;
						font-family: PingFang SC;
						width: 70%;
						height: 50px;
						line-height: 50px;
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