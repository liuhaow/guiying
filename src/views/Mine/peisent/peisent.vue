<template>
	<div class="addxuqu">
		<div class="sqing" v-if='sucd'>
			<div class="scred">
				<h3>申请成功！需重新登录</h3>
				<ul>
					<li @click="sucd = false">取消</li>
					<li @click="quedingData">确定</li>
				</ul>
			</div>
		</div>
		<headt message='配送员申请'></headt>
		<div class="a-d-d">
			<div class="p-t-f">
				<div>
					<h2>姓名</h2> <input type="" v-model="name" placeholder="请输入您的姓名" name="" id="" value="" />
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>手机号</h2> <input type="" v-model="mobile" placeholder="请填写您的手机号" name="" id="" value="" />
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>备注</h2> <input type="" v-model="remark" placeholder="还有其他的问题可以留言我们！" name="" id="" value="" />
				</div>
			</div>

		</div>
		<div class="btnd">
			<button @click="nextData()">提交</button>
		</div>
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	import { peisongdata, peisqingdata } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	export default {
		data() {
			return {
				name: '',
				mobile: '',
				remark: '',
				sucd: false
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
				token: this.TokenId
			}
			peisongdata(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					if(res.data.data.status == 0) {
						Notify({
							type: 'danger',
							message: '审核中，请耐心等待'
						});
					} else if(res.data.data.status == 2) {
						Notify({
							type: 'danger',
							message: '审核中失败，请重新提交审核'
						});
					} else if(res.data.data.status == 1) {
						this.sucd = true
					}

				} else {

				}
			})
		},
		methods: {
			...mapActions([
				'setSignOut'
			]),
			quedingData() {
				var that =this
				that.setSignOut()
				that.$router.push('/need/login')
				
			},
			nextData() {
				if(!this.name||!this.mobile){
					Notify({ type: 'warning', message: '数据不能为空' });
					return
				}
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.mobile)){
					Notify({ type: 'warning', message: '手机号错误' });				
					return
				}
				let data = {
					token: this.TokenId,
					name: this.name,
					mobile: this.mobile,
					remark: this.remark
				}
				peisqingdata(data).then(res => {
					if(res.data.code == 200) {
						Notify({
							type: 'success',
							message: res.data.msg
						});
						this.name='';
						this.mobile ='';
						this.remark =''
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
		overflow: auto;
		.sqing {
			height: 100%;
			width: 100%;
			background: rgba(0, 0, 0, .5);
			z-index: 343;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			.scred {
				width: 548px;
				height: 268px;
				background: rgba(255, 255, 255, 1);
				border-radius: 18px;
				h3 {
					height: 159px;
					line-height: 159px;
					text-align: center;
					font-size: 38px;
				}
				ul {
					width: 100%;
					display: flex;
					border-top: 2px solid #ccc;
					li {
						height: 108px;
						width: 50%;
						line-height: 108px;
						text-align: center;
						font-size: 30px;
						color: #212FEB;
					}
					li:nth-child(1) {
						border-right: 2px solid #ccc;
					}
				}
			}
		}
		.btnd {
			margin-top: 160px;
			width: 100%;
			justify-content: center;
			display: flex;
			button {
				width: 90%;
				height: 80px;
				font-size: 28px;
				font-family: PingFang SC;
				border: none;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
				border-radius: 40px;
			}
		}
		.a-d-d {
			.p-t-f {
				height: 100px;
				padding: 0 20px;
				box-sizing: border-box;
				background: #fff;
				div {
					border-bottom: 2px solid #DDDDDD;
					height: 98px;
					display: flex;
					align-items: center;
					h2 {
						width: 190px;
						font-size: 28px;
						font-family: PingFang SC;
						display: flex;
						align-items: center;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						padding-left: 15px;
					}
					input {
						font-size: 28px;
						width: 480px;
						height: 94px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}
</style>