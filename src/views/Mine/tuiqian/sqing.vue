<template>
	<div class="suoya">
		<headt message='退押金'></headt>
		<div class="suoya-t">
			请提交退款需求，我们将会尽快为您处理！
		</div>
		<div class="you-x">
			<div>
				<h2>联系人：</h2><input v-model="name" type="text" placeholder="请填写联系人" />
			</div>

		</div>
		<div class="you-x">
			<div class="">
				<h2>联系方式：</h2><input v-model="mobile" type="text" placeholder="请填写联系电话" />
			</div>

		</div>
		<div class="you-x">
			<div>
				<h2>退押金事宜：</h2><input v-model="remark" type="text" placeholder="请填" />
			</div>

		</div>

		<div class="btnd">
			<button @click="suoyaoData">提交申请</button>
		</div>
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	import { mapGetters } from 'vuex'
	import { Notify,Toast } from 'vant';
	import { yajintuiData } from '@/api/mine'
	export default {
		data() {
			return {
				name: '',
				mobile: '',
				remark: ''
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
		methods: {
			suoyaoData() {
				let order_id= this.$route.query.id;
				let deposit =this.$route.query.dept;
				console.log(deposit,order_id)
				if(!this.name) {
					Notify({
						type: 'warning',
						message: '需要输入名字'
					});
					return

				}
				if(!this.mobile) {
					Notify({
						type: 'warning',
						message: '需要输入手机号'
					});
					return

				}
				var reg = /^1[3456789]\d{9}$/;
				if(!reg.test(this.mobile)) {
					Notify({
						type: 'warning',
						message: '需要正确手机号'
					});
					return
				}
				let data={
					token:this.TokenId,
					order_id:order_id,
					name:this.name,
					mobile:this.mobile,
					remark:this.remark,
					deposit:deposit
					
				}
				yajintuiData(data).then(res => {
					console.log(res)
					if(res.data.code ==200){
				
						Toast.success(res.data.msg)
						this.$router.go(-1)						
						this.name ='';
						this.mobile='';
						this.remark =''
						
						
						
						
					}else{
						Toast.fail(res.data.msg)						
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.suoya {
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
				font-weight: 500;
				border: 0;
				color: rgba(255, 255, 255, 1);
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(88, 214, 89, 1));
				border-radius: 40px;
			}
		}
		.s-y-b {
			width: 100%;
			height: 280px;
			padding: 37px 0 0 40px;
			display: flex;
			margin-top: 20px;
			background: #fff;
			h2 {
				font-size: 28px;
				font-weight: 600;
				width: 160px;
				color: rgba(51, 51, 51, 1);
			}
			textarea {
				border: none;
				width: 500px;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 204, 204, 1);
				margin-top: -8px;
			}
		}
		.suoya-t {
			width: 100%;
			height: 80px;
			line-height: 80px;
			font-size: 26px;
			padding-left: 40px;
			margin: 30px 0 20px;
			box-sizing: border-box;
			font-weight: 500;
			color: rgba(63, 185, 77, 1);
			background: rgba(63, 185, 77, .2);
		}
		.you-x {
			width: 100%;
			height: 100px;
			padding: 0 40px;
			box-sizing: border-box;
			background: #fff;
			div {
				border-bottom: 2px solid #ddd;
				width: 100%;
				height: 98px;
				display: flex;
				align-items: center;
				h2 {
					font-size: 28px;
					font-weight: 600;
					width: 190px;
					color: rgba(51, 51, 51, 1);
				}
				input {
					width: 70%;
					font-size: 28px;
					height: 100%;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
	}
</style>