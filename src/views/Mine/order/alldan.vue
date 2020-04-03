<template>
	<div class="alldan">
		<headt message='商品清单'></headt>
		<div class="all-list">
			<div class="all-t">
				<span>商品</span>
				<span>订单号：{{xingq.order_num}}</span>
			</div>
			<h6 class="dizhi">地址：{{xingq.addr}}</h6>
			<h6 class="dizhi">下单时间：{{xingq.create_time}}</h6>
			
			<ul class="splist">
				<li v-for='(item,index) in xingq.commodity' :key='index'>
					<img :src="item.cover" />
					<div class="x-qing">
						<h3>{{item.commodity_name}}</h3>
						<h4>
							<span>单价：¥{{item.commodity_price}}</span>
							<span>数量：{{item.commodity_num}}</span>
							<span>押金：{{item.deposit}}</span>
						</h4>
						<p>&yen;{{item.total_price}}</p>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { orderallDetail } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	export default {
		data() {
			return {
				xingq:''
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
				token: this.TokenId,
				order_id: this.$route.params.id
			}
			orderallDetail(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.xingq= res.data.data
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});
				}
			})
		}
	}
</script>
<style scoped lang="stylus">
	.alldan {
		overflow: auto;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.all-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow: auto;
			.splist {
				flex: 1;
				overflow: auto;
				width: 100%;
				li {
					width: 96%;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					height: 240px;
					background: rgba(255, 255, 255, 1);
					border-radius: 8px;
					padding: 0 20px;
					box-sizing: border-box;
					margin: 0 auto 20px;
					img {
						height: 152px;
						width: 152px;
						margin-right: 20px;
					}
					.x-qing {
						height: 210px;
						width: 474px;
						h3 {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color:#000;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							padding-top: 10px;
						}
						h4 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
							margin: 20px auto 0px;
							display: flex;
							flex-direction: column;
							span{
								font-size: 26px;
								margin-bottom: 10px;
								color: #333;
							}
						}
						p {
							font-size: 32px;
							font-family: PingFang SC;
							font-weight: 600;
							color: rgba(51, 51, 51, 1);
							text-align: right;
						}
					}
				}
			}
			.dizhi{
				background: #fff;
				font-size: 32px;
				font-weight: 600;
				height: 80px;
				line-height: 80px;
				padding-left: 10px;
				box-sizing: border-box;
				width: 96%;
				margin-bottom: 6px;
			}
			.all-t {
				height: 80px;
				width: 96%;
				padding: 0 20px;
				background: #fff;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				margin-top: 30px;
				margin-bottom: 2px;
				align-items: center;
				span {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>