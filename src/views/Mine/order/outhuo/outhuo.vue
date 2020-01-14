<template>
	<div class="wuliu">
		<headt message='退货进度' ></headt>


		<div class="wu-l">
			<div class="zhisuss" v-if='idtcgty==7'>
				<h4 class="chuli"> 订单正在处理中，耐心等待</h4>			
			</div>

			<div class="zhisuss" v-if='idtcgty==8'>
				<img src="../../../../../static/img/zhipay.png" alt="" />
				<h2>商家同意退款</h2>
				<h4> 退款金额：<span>{{dainfo.money}}元</span></h4>
				<p>退款成功时间：{{dainfo.agree_time}}</p>
				<div class="btnf">
					<button class="jixu" @click="goumaiagin">继续购买</button>
				</div>
			</div>
			
			<div class="zhisuss" v-if='idtcgty==10'>
				<img src="../../../../../static/img/shib.png" alt="" />
				<h2>很抱歉，您的申请失败！</h2>
				<p>商家拒绝了您的申请</p>
				<div class="btnd">
					<button class="xiuh" @click="tuihuoData()">修改申请</button><button class="jixu" @click="goumaiagin">继续购买</button>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters } from 'vuex'
	import { Notify } from 'vant';

	import { tuihuojindu } from '@/api/mine'

	export default {
		data() {
			return {
				idtcgty: '',
				dainfo:''

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
			let data ={
				token:this.TokenId,
				order_id:this.$route.params.id
			}
			tuihuojindu(data).then(res=>{
				if(res.data.code == 200){
					this.idtcgty= res.data.data.status,
					this.dainfo = res.data.data
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});

				}
			})
		},

		methods: {
			pingjiaData(idt) {
				this.$router.push('/myorder/pingjia/2')
			},
			tuihuoData() {

				this.$router.push({
					path: '/myorder/sqingth',
					query: {
						idt: this.dainfo.order_id,
						totle: this.dainfo.money
					}
				})
			},
			goumaiagin(){
				this.$router.push('/home')
				
			}
		}
	}
</script>

<style scoped lang="stylus">
	.wuliu {
		height: 100%;
		overflow: auto;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.wu-l {
			flex: 1;
			overflow: auto;
			display: flex;
			background: #FFFFFF;
			flex-direction: column;
			.zhisuss {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.chuli{
					font-size: 40px;
					font-weight: 600px;
					color: #333;
				}
				img {
					height: 92px;
					width: 92px;
				}
				h2 {
					font-size: 42px;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					margin: 40px 0 20px;
				}
				h4 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					margin: 20px 0;
					span {
						color: #FF6501!important;
					}
				}
				p {
					font-size: 30px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					margin-bottom: 90px;
				}
				.btnf{
					display: flex;
					justify-content: center;
					width: 70%;
					.jixu {
						color: #999999;
						background: #3FB94D;
						color: #fff;
						border: 2px solid #3FB94D!important;
						width: 240px;
						height: 80px;
						border-radius: 40px;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
					}
				}
				.btnd {
					display: flex;
					justify-content: space-between;
					width: 70%;
					button {
						width: 240px;
						height: 80px;
						border: 2px solid rgba(153, 153, 153, 1);
						border-radius: 40px;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
					}
					.xiuh {
						color: #999999;
						background: none;
					}
					.jixu {
						color: #999999;
						background: #3FB94D;
						color: #fff;
						border: 2px solid #3FB94D!important;
					}
				}
			}
		}
	}
</style>