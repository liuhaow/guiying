<template>
	<div class="neword">
		<ul v-if='shif' class="peis-z">
			<li v-for="(item,index) in list" :key='index' class="peis-list">
				<!--<div class="quhuo" @click="sendDetail()">
					<h2>
						<img src='../../../static/img/doizy.png'/>
						<span>取货</span>
					</h2>
					<h3>浙江省嵊州市高新区海智中心3幢409室</h3>
				</div>-->
				<div class="quhuo">
					<h2>
						<img src='../../../static/img/doizy.png'/>
						<span>送达</span>
					</h2>
					<div class="gongda">
						<h3>{{item.addr}}</h3>
						<p><span>联系人：{{item.name}}</span> <span>联系电话：{{item.mobile}}</span></p>
					</div>

				</div>
				<h5 class="q-d-xiang">商品清单</h5>
				<ul class="q-d-l" @click="">
					<li v-for='(ite,index ) in item.pro' :key='index'>
						<img :src="ite.cover" alt="" />
						<div>
							<p> {{ite.commodity_name}}</p>
							<p><span>{{ite.commodity_num}}</span>件</p>
						</div>
					</li>
				</ul>
				<h4 class="jiedan" @click="jiedanInfo(item.id)">确定送达</h4>

			</li>
		</ul>
		<div class="m-d-d" v-else>
			<img src="../../../static/img/kong.png" alt="" />

			<h2>你还没有已送达订单</h2>
			<h3>快去最新订单接单吧~</h3>
		</div>
	</div>
</template>

<script>
	import { peisongzHong,jiedanData } from '@/api/api'
	import { Notify } from 'vant';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				shif: true,
				list: []

			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			this.peisonlist()
		},
		methods: {
			peisonlist() {
				let data = {
					token: this.TokenId
				}
				peisongzHong(data).then(res => {
					if(res.data.code == 200) {
						this.list = res.data.data
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			sendDetail() {
				this.$router.push('/peisong/peidetail')
			},
			jiedanInfo(idt) {
				var that = this
				let data = {
					order_id: idt,
					type: 3,
					token: that.TokenId
				}
				jiedanData(data).then(res => {
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
						that.peisonlist()
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
	.neword {
		width: 100%;
		height: 100%;
		overflow: auto;
		.peis-z {
			height: 100%;
			overflow: auto;
			padding-top: 20px;
			box-sizing: border-box;
			.peis-list {
				margin: 0 auto 20px;
				width: 96%;
				background: rgba(255, 255, 255, 1);
				border-radius: 16px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.q-d-l {
					li {
						display: flex;
						align-items: center;
						height: 200px;
						padding: 0 30px;
						box-sizing: border-box;
						border-bottom: 2px solid #E1E1E1;
						img {
							height: 152px;
							width: 152px;
							margin-right: 20px;
						}
						div {
							display: flex;
							height: 70%;
							flex-direction: column;
							justify-content: space-between;
							p {
								font-size: 28px;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(51, 51, 51, 1);
								line-height: 38px;
							}
						}
					}
				}
				.jiedan {
					height: 80px;
					background: rgba(63, 185, 77, 1);
					line-height: 80px;
					text-align: center;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					border-radius: 0 0 16px 16px;
					color: rgba(255, 255, 255, 1);
				}
				.q-d-xiang {
					height: 80px;
					line-height: 80px;
					background: #fff;
					padding-left: 20px;
					box-sizing: border-box;
					border-top: 2px solid #E1E1E1;
					font-size: 30px;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}
				.quhuo {
					display: flex;
					height: 170px;
					align-items: center;
					h2 {
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 140px;
						font-size: 22px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(204, 204, 204, 1);
						img {
							height: 36px;
							width: 36px;
							margin-bottom: 4px;
						}
					}
					h3 {
						font-size: 34px;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 40px;
					}
					.gongda {
						p {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							display: flex;
							justify-content: space-between;
							margin-top: 20px;
						}
					}
				}
			}
		}
		.m-d-d {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: 100%;
			width: 100%;
			img {
				width: 213px;
				height: 227px;
				padding-top: 100px;
			}
			h2 {
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				margin: 50px 0 41px;
			}
			h3 {
				font-size: 32px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>