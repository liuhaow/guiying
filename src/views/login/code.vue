<template>
	<div class="login">
		<div class="back">
			<img @click="back" src="../../../static/img/fanhui.png" alt="" />
		</div>
		<div class="shur">
			<h4>输入验证码</h4>
			<div class="checkbt">
				<p>
					{{phone}}
				</p>
				<h3 class="shouj"><input type="number" v-model="code" placeholder="输入验证码" /><button :disabled="disabled" @click="checkout">{{btnxt}}</button></h3>
				<!--<h5>注意：(操作需要  先点击获取验证码 然后输入 1234  做测试用  正式版会获取真的验证码)</h5>-->
			</div>
			<div class="nextbu">

				<button class="nextbtnt" @click='nextbuData'>登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	import { getSmsCode, loginInfo } from '@/api/api'
	import { Notify } from 'vant';
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
		methods: {
			...mapActions(
				[
					'setPoneNumb', 'setToken', 'setUserData'
				]
			),
			back() {
				this.$router.go(-1)
			},
			getInputValue() {
				var that = this
				that.phonenub.length >= 11 ? that.shur = false : that.shur = true
			},
			checkout() {
				this.time = 60;
				this.disabled = true;
				this.timer();
				let data = {
					mobile: this.phone,
					event: 'mobilelogin'
				}
				getSmsCode(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
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
			nextbuData() {
				var that = this
				if(!that.code) {
					Toast({
						message: '输入验证码',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}

				let data = {
					mobile: this.phone,
					captcha: this.code
				}
				loginInfo(data).then(res => {
					if(res.data.code == 200) {
						that.setToken(res.data.data.token)
						that.setUserData(res.data.data);
						Notify({
							type: 'success',
							message: '登录成功'
						});
						setTimeout(function(){
							if(res.data.data.is_delivery == 0) {
							that.$router.push('/home')
						} else if(res.data.data.is_delivery == 1) {
							that.$router.push('/peisong/transfer')
						}
						},2000)
						

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
	.login {
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		background: #fff;
	}
	
	.back {
		img {
			height: 36px;
			width: 36px;
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
		.checkbt {
			h5 {
				margin-top: 20px;
				font-size: 32px;
				line-height: 40px;
				color: #FF0000;
			}
			p {
				font-size: 38px;
				color: #333;
				padding-bottom: 20px;
			}
			.shouj {
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 4px solid #DAD6D6;
				input {
					width: 60%;
					border: none;
					font-size: 34px;
					color: #333;
					padding-left: 10px;
				}
				button {
					border: 0;
					width: 30%;
					height: 80px;
					color: #4673EC;
					font-size: 32px;
					background: #3FB94D;
				}
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
			.nextbtn {
				background: rgba(63, 185, 77, .5);
			}
			.nextbtnt {
				background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
			}
		}
	}
</style>