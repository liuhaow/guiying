<template>
	<div class="suoya">
		<headt message='检疫证明'></headt>
		<div class="suoya-t">
			请填写邮箱地址，我们将发送到您的邮箱！
		</div>
		<div class="you-x">
			<h2>邮箱账号：</h2><input v-model="email" type="text" placeholder="请输入邮箱" />
		</div>
		<div class="s-y-b">
			<h2>备注：</h2>
			<textarea name="" rows="" v-model="remark" cols="" placeholder="您有其他的要求可以告知我们！"></textarea>
		</div>
		<div class="btnd">
			<button @click="suoyaoData">提交需求</button>
		</div>
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	import { mapGetters } from 'vuex'
	import { Notify } from 'vant';
	import { jinasqInfo } from '@/api/mine'
	
	
	export default {
		data() {
			return {
				email:'',
				remark:''			
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
				if(!this.email){
				 	Notify({ type: 'warning', message: '需要输入邮箱' });
				 	return
				 }
				var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				 if(!reg.test(this.email)){
				 	Notify({ type: 'warning', message: '输入正确邮箱' });
				 	return
				 }
				 			 	
				let data={
					token:this.TokenId,
					email:this.email,
					remark:this.remark,
					order_id:this.$route.params.id
				}
				jinasqInfo(data).then(res=>{
					console.log(res)
					if(res.data.code==200){
						Notify({ type: 'success', message: res.data.msg });
					}else{
				 		Notify({ type: 'warning', message: res.data.msg });
						
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
				border: 0;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
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
			display: flex;
			align-items: center;
			padding-left: 40px;
			box-sizing: border-box;
			background: #fff;
			h2 {
				font-size: 28px;
				font-weight: 600;
				width: 160px;
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
</style>