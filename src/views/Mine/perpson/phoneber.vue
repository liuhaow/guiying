<template>
	<div class="addxuqu">
		<headt message='手机号修改'></headt>
		<div class="a-d-d">
			<div class="a-d-d-lst">
				<div class="a-d-r">
					<input type="number" v-model='mobile' placeholder="请输入要更换手机号" />
					<i slot="icon" class="icon iconfont " @click="qingchuDtat">&#xe65c;</i>
				</div>

			</div>
			<div class="a-d-d-lst">

				<div class="a-d-r">
					<input type="number" v-model='captcha' placeholder="输入验证码" />
					<button :disabled="disabled" @click="checkout">{{btnxt}}</button>

				</div>
			</div>

		</div>
		<div class="btnd">
			<button>确定</button>
		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { getSmsCode } from '@/api/api'
	import { Notify } from 'vant';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				mobile: '',
				btnxt: '获取验证码',
				disabled: false,
				time: 0,
				captcha:''

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
			qingchuDtat() {
				this.mobile = ''
			},
			nextData() {},
			timer() {
				if(this.time > 0) {
					this.time--;
					this.btnxt = this.time + "s";
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btnxt = "获取验证码";

				}
			},
			checkout() {
				var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
				if(!reg.test(this.mobile)) {
					Notify({
						type: 'warning',
						message: '输入手机号不正确'
					});
				} else {
					this.time = 60;
					this.disabled = true;
					this.timer();
					let data={
						mobile:this.mobile,
						event:'changemobile'
					}
					getSmsCode(data).then(res => {
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
				}

			},
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
		padding-bottom: 30px;
		box-sizing: border-box;
		overflow: auto;
		.btnd {
			position: fixed;
			top: 370px;
			width: 100%;
			display: flex;
			justify-content: center;
			button {
				width: 580px;
				height: 80px;
				background: rgba(63, 185, 77, 1);
				border-radius: 40px;
				border: 0;
				font-size: 28px;
				color: #fff;
			}
		}
		.a-d-d {
			margin-top: 20px;
			.a-d-d-lst {
				height: 100px;
				background: #fff;
				padding: 0 34px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 2px;
				h2 {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 600;
					color: rgba(51, 51, 51, 1);
				}
				.a-d-r {
					display: flex;
					height: 100%;
					width: 100%;
					align-items: center;
					justify-content: space-between;
					input {
						width: 50%;
						font-size: 32px;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
					button {
						width: 150px;
						height: 80px;
						background: rgba(63, 185, 77, 1);
						border: 0;
						font-size: 28px;
						color: #fff;
					}
					i {
						font-size: 32px;
						color: #333;
						font-weight: 600;
						margin-left: 20px;
						width: 80px;
						line-height: 140px;
						text-align: center;
						height: 140px;
					}
				}
			}
		}
	}
</style>