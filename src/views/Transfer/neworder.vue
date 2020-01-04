<template>
	<div class="neword">
		<ul v-if='list.lenght !=0'>
			<li v-for="(item,index) in list" :key='index'>
				<div class="quhuo">
					<h2>
						<img src='../../../static/img/doizy.png'/>
						<span>取货</span>
					</h2>
					<h3>{{quhuo}}</h3>
				</div>
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
				<h4 class="jiedan" @click="jiedanInfo(item.id)">立即接单</h4>
			</li>
		</ul>

	</div>
</template>

<script>
	import { peisongqu, peisongdata, jiedanData } from '@/api/api'
	import { Notify } from 'vant';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				quhuo: '',
				list: []
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
			peisongqu(data).then(res => {
				if(res.data.code == 200) {
					this.quhuo = res.data.data
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});
				}
			})
			this.listdata()
		},
		methods: {
			listdata() {
				let data = {
					token: this.TokenId
				}
				peisongdata(data).then(res => {
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
			jiedanInfo(idt) {
				var that = this
				let data = {
					order_id: idt,
					type: 2,
					token: that.TokenId
				}
				jiedanData(data).then(res => {
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
						that.listdata()

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
		ul {
			height: 100%;
			overflow: auto;
			padding-top: 20px;
			box-sizing: border-box;
			li {
				margin: 0 auto 20px;
				width: 96%;
				height: 422px;
				background: rgba(255, 255, 255, 1);
				border-radius: 16px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
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
						flex: 1;
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
	}
</style>