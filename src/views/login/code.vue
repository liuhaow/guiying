<template>
	<div class="login">
		<div class="back">
			<img @click="back" src="../../assets/back.jpg" alt="" />
		</div>
		<div class="shur">
			<h4>输入验证码</h4>
			<div class="checkbt">
				<p>
					{{phone}}
				</p>
				<button :disabled="disabled" @click="checkout">{{btnxt}}</button>
			</div>
			<div class="nextbu">

				<button class="nextbtnt"  @click='nextbuData'>登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	import { getSmsCode,loginInfo} from '@/api/api'
	
	export default {
		data() {
			return {
				btnxt: '获取验证码',
				disabled: false,

				time: 0,
				code: '',
			}
		},
		computed: {
			...mapGetters({
				phone: 'phonenum'
			})
		},
		methods:{
			...mapActions(
				[
					'setPoneNumb','setToken','setUserData'
				]
			),
			back(){
				this.$router.go(-1)
			},
			getInputValue(){
				var that = this
				that.phonenub.length>=11?that.shur = false:that.shur=true
			},
			checkout() {
					this.time = 60;
					this.disabled = true;
					this.timer();
					let data ={
						mobile:'13573790187',
						event:'mobilelogin'
					}
					getSmsCode(data).then(res => {
						console.log(res)
					})
				

			},
			timer() {
				if(this.time > 0) {
					this.time--;
					this.btnxt = this.time + "s";
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btnxt = "获取验证码";
					this.disabled = false;
				}
			},
			nextbuData(){
				let data={
					mobile:this.phone,
					captcha:1234
				}
				loginInfo(data).then(res => {
						if(res.data.code == 200){
							this.setToken(res.data.data.token)
							this.setUserData(res.data.data);
							this.$router.push('/home')
							
						}
					})
			}
		}
	}
</script>

<style lang="stylus" scoped>
.login{
	position: absolute;
	right:0;
	left: 0;
	top: 0;
	bottom: 0;
	background: #fff;
}
	.back {
		img {
			height: 36px;
			width: 20px;
			padding: 40px
		}
	}
	
	.shur {
		padding: 0 48px;
		h4 {
			font-size: 56px;
			margin: 200px 0 114px;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}
		.shouj {
			height: 78px;
			display: flex;
			align-items: center;
			border-bottom: 4px solid #DAD6D6;
			input {
				width: 100%;
				border: none;
				font-size: 34px;
				color: #999;
				padding-left: 10px;
			}
		}
		.nextbu {
			margin-top: 120px;
			text-align: center;
			button {
				width: 620px;
				height: 88px;
				border: none;
				border-radius: 44px;
				font-size: 34px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
			.nextbtn{
				background: rgba(63, 185, 77, .5);
				
			}
			.nextbtnt{
				background:linear-gradient(90deg,rgba(63,185,77,1),rgba(110,202,115,1));
			}
		}
	}
</style>