<template>
	<div class="jifen">
		<div class="j-f-d-h" v-if='duih'>
			<div class="j-f-t-c">
				<div class="duihaun">
					<h3>是否兑换当前积分？</h3>
					<h4>您当前有{{datinfo.score}}积分</h4>
					<div class="dui-btn">
						<h2 @click="duih=false">取消</h2>
						<h2 class="makes" @click="makeData">确定</h2>
					</div>
				</div>
				<img @click="duih=false" src="../../../../static/img/gbi.png" alt="" />
			</div>
		</div>

		<div class="j-f-t">
			<h2 @click="back"><img src="../../../../static/img/fanhui.png" alt="" /></h2>
			<h3>我的积分</h3>
			<h4 @click="jifenData()">积分规则</h4>
		</div>
		<div class="ji-info">
			<div class="j-f-b-n">
				<div class="j-f-b-n-l">
					<h3>我的积分</h3>
					<h4>{{datinfo.score}}<span>={{datinfo.money}}元</span></h4>
				</div>
				<h2 class="j-f-b-n-r" @click="duih=true"> 兑换积分</h2>
			</div>

			<div class="qiand">
				<div class="qiand-t">
					<h2>连签30天，共可获15元买菜金</h2>
					<h3>连签<span>{{datinfo.continuous}}</span>天</h3>
				</div>
				<div class="qiand-n">
					<ul>
						<li v-for="(item,index) in list" :key='index' :class="{'actt':item.selt}">
							<div class="" v-if="item.selt">
								<img src="../../../../static/img/qiand.png" alt="" />
								<h2>签到</h2>
							</div>
							<div class="" v-else>
								<img src="../../../../static/img/jifen.png" alt="" />
								<h2>未签到</h2>
							</div>

						</li>
					</ul>
				</div>
				<div class="qiand-f">
					<button class="qianw" v-if="is_qd==0" @click="qidaodyInfo">每日签到+50积分</button>
					<button class="qiang" v-else>今日已签到，明天再来吧~</button>

				</div>
			</div>
			<div class="qiandao">
				<h3>积分明细</h3>
				<ul>
					<li v-for='(item,index) in listinfo' :key='index'>
						<div class="q-d-ao">
							<h2 v-if='item.type == 1'>签到</h2>
							<h2 v-else>兑换</h2>
							<p> <span>{{item.create_time}}</span></p>
						</div>
						<h4 v-if='item.type == 1'> +{{item.score}} </h4>
						<h4 v-else class="jians"> -{{item.score}} </h4>

					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { jifenDatainfo, qiandaoinfo, jifnlistinfo, jifnduihuaninfo } from '@/api/mine'
	export default {
		data() {
			return {
				duih: false,
				continuous: '',
				datinfo: '',
				is_qd: '0',
				listinfo: [],
				list: [{
						selt: false
					},
					{

						selt: false
					},
					{

						selt: false
					},
					{

						selt: false
					},
					{

						selt: false
					},
					{

						selt: false
					},
					{

						selt: false
					}
				]
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			this.huoquedetai()
			this.huoqulist()

		},
		methods: {
			huoquedetai() {
				let data = {
					token: this.TokenId
				}
				jifenDatainfo(data).then(res => {
					if(res.data.code == 200) {
						this.datinfo = res.data.data;
						let continuous = res.data.data.continuous%7;
						
						
						for(var i=0;i< continuous;i++){
							this.list[i].selt = true
						}						
						this.is_qd = res.data.data.is_qd
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			huoqulist() {
				let pary = {
					token: this.TokenId,
					page: 1
				}
				jifnlistinfo(pary).then(res => {
					if(res.data.code == 200) {
						this.listinfo = res.data.data
					} else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});
					}
				})
			},
			back() {
				this.$router.go(-1)
			},
			makeData() {
				let data = {
					token: this.TokenId
				}
				jifnduihuaninfo(data).then(res => {
					if(res.data.code == 200) {
						this.huoquedetai()
						this.huoqulist()
						this.duih = false
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
			},
			jifenData() {
				this.$router.push('/jifen/jifenrule')
			},
			qidaodyInfo() {
				let data = {
					token: this.TokenId
				}
				qiandaoinfo(data).then(res => {
					if(res.data.code == 200) {
						this.huoquedetai()
						this.huoqulist()
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
	.jifen {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: auto;
		display: flex;
		flex-direction: column;
		.ji-info {
			flex: 1;
			overflow: auto;
		}
		.j-f-d-h {
			height: 100%;
			position: fixed;
			width: 100%;
			background: rgba(0, 0, 0, .5);
			z-index: 99;
			.j-f-t-c {
				position: fixed;
				left: 50%;
				top: 50%;
				width: 420px;
				height: 400px;
				margin-left: -210px;
				margin-top: -200px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				.duihaun {
					width: 420px;
					height: 300px;
					background: rgba(255, 255, 255, 1);
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.dui-btn {
						display: flex;
						height: 88px;
						border-top: 2px solid #E1E1E1;
						h2 {
							width: 50%;
							height: 88px;
							line-height: 88px;
							text-align: center;
							font-size: 26px;
							color: #999;
						}
						.makes {
							border-left: 2px solid #E1E1E1;
							color: #FC9C15!important;
						}
					}
					h3 {
						font-size: 30px;
						color: rgba(51, 51, 51, 1);
						text-align: center;
						margin: 44px 0 0px;
					}
					h4 {
						font-size: 26px;
						text-align: center;
						color: rgba(252, 156, 21, 1);
					}
				}
				img {
					height: 60px;
					margin-top: 30px;
					width: 60px;
				}
			}
		}
		.qiand {
			height: 460px;
			width: 96%;
			background: rgba(255, 255, 255, 1);
			border-radius: 18px;
			margin: -150px auto 0;
			.qiand-t {
				height: 135px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30px;
				box-sizing: border-box;
				h2 {
					font-size: 30px;
					color: #000;
				}
				h3 {
					font-size: 30px;
					color: #999;
					span {
						margin-left: 5px;
					}
				}
			}
			.qiand-f {
				display: flex;
				justify-content: center;
				margin-top: 60px;
				.qianw {
					color: rgba(228, 163, 71, 1);
					background: linear-gradient(0deg, rgba(247, 210, 78, 1), rgba(245, 244, 154, 1));
				}
				.qiang {
					background: #E1E1E1;
					color: #999999;
				}
				button {
					width: 670px;
					height: 80px;
					font-size: 30px;
					line-height: 80px;
					text-align: center;
					border: none;
					border-radius: 40px;
				}
			}
			.qiand-n {
				ul {
					overflow-x: auto;
					white-space: nowrap;
					width: auto;
					padding-left: 20px;
					box-sizing: border-box;
					.actt {
						background: #f6f6f6!important;
						div{
							h2{
								color: #999!important;
							}
						}
					}
					li {
						width: 96px;
						height: 146px;
						background: #FFF9D9;
						margin-right: 28px;
						display: inline-block;
						border-radius: 10px;
						div {
							height: 100%;
							width: 100%;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							img {
								height: 60px;
								width: 60px;
								margin-bottom: 10px;
							}
							h2 {
								font-size: 26px;
								color: rgba(252, 156, 21, 1);
							}
						}
					}
				}
			}
		}
		.qiandao {
			width: 96%;
			background: #FFF;
			margin: 30px auto 0;
			border-radius: 18px;
			padding: 20px 20px;
			box-sizing: border-box;
			h3 {
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: bold;
				height: 80px;
				line-height: 80px;
				color: rgba(0, 0, 0, 1);
			}
			ul {
				background: #fff;
				max-height: 1000px;
				overflow: auto;
				li {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 194px;
					border-bottom: 2px solid #E1E1E1;
					.q-d-ao {
						height: 160px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						h2 {
							font-size: 30px;
							color: rgba(0, 0, 0, 1);
							margin-bottom: 30px;
						}
						p {
							font-size: 24px;
							color: rgba(153, 153, 153, 1);
						}
					}
					h4 {
						font-size: 36px;
						color: rgba(252, 156, 21, 1);
					}
					.jians {
						color: #3FB94D!important;
					}
				}
			}
		}
		.j-f-b-n {
			height: 420px;
			background: url(../../../../static/img/tiuy.png) no-repeat;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px 60px;
			box-sizing: border-box;
			background-size: cover;
			.j-f-b-n-l {
				h3 {
					font-size: 36px;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
					margin-bottom: 30px;
				}
				h4 {
					font-size: 80px;
					color: rgba(255, 255, 255, 1);
					span {
						font-size: 24px!important;
					}
				}
			}
			.j-f-b-n-r {
				width: 180px;
				height: 64px;
				background: linear-gradient(0deg, rgba(247, 210, 78, 1), rgba(245, 244, 154, 1));
				box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.3);
				border-radius: 32px;
				font-size: 30px;
				font-weight: 500;
				line-height: 64px;
				text-align: center;
				color: rgba(228, 163, 71, 1);
			}
		}
		.j-f-t {
			display: flex;
			height: 100px;
			background: #fff;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			box-sizing: border-box;
			h2 {
				height: 100px;
				line-height: 100px;
				padding: 0 20px;
				img {
					height: 36px;
					width: 40px;
				}
			}
			h3 {
				font-size: 36px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			h4 {
				font-size: 30px;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>