<template>
	<div class="jiany">
		<headt message='商务钥匙电子协议'></headt>
		<div class="m-k-n">
			<h2>本协议是您(或您代表的个体工商户、企业等，以下简称商户) 与菜牛商城的运营方嘉兴熙门菜市电子商务有限公司(以下简称 为公司")之间就钥匙托管服务等相关事宜所订立的契约。公司相 关人员已经就协议条款向商户做了明确的解释，请再次仔细阅读 本协议，点击”同意以上协议”按钮后，本协议即构成对双方具有约 束力的法律文件.
			</h2>
			<h2> 协议内容</h2>
			<h2> 1.为了享受公司给商户提供的更优质的服务体验，商户同意将自 己经营的广]店钥匙通过公司指定人员交给公司委托保管，针对商 户当日21点前发送的订单公司力求在次日8点前完成配送。</h2>
			<h2> 2.商户同意:公司委托的提供配送服务的司机可以使用商户提供 的钥匙进入其门店内放置其在菜牛商城所订购的商品。</h2>
			<h2>3.公司保证司机均为经过公司严格筛选，相关档案已在公司备 案的优秀司机。 4.商户及商户门店内所有工作人员均知悉并保证: 1)自物品损坏或丢失之日起，在48小时之内联系公司客服人员。2)将贵重物品妥善保管于司机无法直接接触的区域。贵重物品不 仅包括手机、首饰、现金等，还包括易于变现的财物。</h2>
			<h2>5.因商户自己未能妥善保管贵重物品或将钥匙擅自交付他人而导 致的损失，公司将不承担任何责任，但公司同意协助商户报案并 提供必要的配合。</h2>
			<h2> 6.如为公司提供配送服务的司机使用托管钥匙给商户造成其他 财、物的直接损失在2000元以下，经调查核实后，由公司按照商 城上显示的赔付规则(如有)对商户进行先行赔付。</h2>
			<h2>7.公司和商户均确认:公司修改本服务流程或终止本项服务的， 可以通过在菜牛商城发布公告的形式作出。公告发出后，双方共 同办理钥匙返还等事项。公司将钥匙返还商户后，不再就商户的 财物遗失、破损等承担任何责任。</h2>
			<h2> 我已阅读并同意上述协议 此协议需要您当面和菜牛销售或者司机签署，以便进行钥匙交接</h2>

		</div>
		<div class="m-k-f">
			<p>
				<img src="../../../../static/img/choss.png" alt="" v-if="xuan !=1"/>
				<img src="../../../../static/img/chos.png" v-else /> 同意即表示同意
				<span>
					《商务钥匙托管服务电子协议》
				</span>
			</p>
			<button v-if='xuan==1' >已同意</button>
			<button class="hui" v-else @click='qianshuData'>同意</button>

		</div>

	</div>
</template>

<script>
	import headt from '../../../components/heda'
	import { mapGetters } from 'vuex'
	import { Notify,Toast } from 'vant';
	import { mykeyData ,yaokeydaya} from '@/api/mine'

	export default {
		data() {
			return {
				xuan: 1
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		components: {
			headt
		},
		mounted() {
			let  data= {
				token:this.TokenId
			}
		yaokeydaya(data).then(res=>{

			if(res.data.code ==200){
				this.xuan =res.data.data
			}
		})
		},
		methods: {
			qianshuData() {
				let data = {
					token: this.TokenId,
				}
				mykeyData(data).then(res => {

					if(res.data.code == 200) {
						Toast.success(res.data.msg)
						this.xuan = 1
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
	.jiany {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-bottom: 190px;
		box-sizing: border-box;
		overflow: auto;
		.m-k-n {
			flex: 1;
			background: #fff;
			overflow: auto;
			h2 {
				margin-top: 20px;
				padding: 0 10px;
				box-sizing: border-box;
				text-indent: 30px;
				line-height: 46px;
				font-size: 30px;

				overflow: auto;
			}
		}
		.m-k-f {
			height: 190px;
			position: fixed;
			bottom: 0;
			width: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			p {
				font-size: 24px;
				color: #CCCCCC;
				margin-bottom: 20px;
				img {
					height: 48px;
					width: 48px;
				}
				span {
					color: #40BA4E!important;
				}
			}
			.hui {
				background: #ccc!important;
			}
			button {
				height: 80px;
				width: 90%;
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
				border-radius: 40px;
				font-size: 26px;
				border: 0;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>