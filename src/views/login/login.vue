<template>
	<div class="login">
		<div class="back">

			<!--<img @click="back" src="../../../static/img/fanhui.png" alt="" />-->
			
		</div>
		<div class="shur">
			<h4>输入手机号</h4>
			<p class="shouj">
				<input type="number" v-model="phonenub" name="" id="" value="" @keyup="getInputValue" placeholder="输入手机号" />
			</p>
			<div class="nextbu">
				<button class="nextbtn" v-if='shur'  @click='nextbuDinfo'>下一步</button>
				<button class="nextbtnt" v-if='!shur' @click='nextbuData'>下一步</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapActions } from "vuex";
	export default {
		data() {
			return {
				phonenub: '',
				shur: true
			}
		},
		methods:{
			...mapActions(
				[
					'setPoneNumb'
				]
			),
			back(){
				this.$router.go(-1)
			},
			getInputValue(){
				var that = this
				that.phonenub.length>=11?that.shur = false:that.shur=true
			},
			nextbuDinfo(){
				var  that = this
				if(that.phonenub.length==''){				
					Toast({
						message: '亲 需要输入手机号的',
						iconClass: 'icon icon-error',
						position: 'center',
					});
				}else if(that.phonenub.length<11){
					Toast({
						message: '亲 手机号位数不够哟',
						iconClass: 'icon icon-error',
						position: 'center',
					});
				}
			},
			nextbuData(){
				var  that = this
				var reg = 11 && /^[1]([3-9])[0-9]{9}$/;
				if(!reg.test(that.phonenub)){
					Toast({
						message: '亲 手机号输入错误',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				this.setPoneNumb(that.phonenub);
				that.phonenub=''
				this.$router.push('/need/code')
				
				
				
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
		.shouj {
			height: 120px;
			display: flex;
			align-items: center;
			border-bottom: 4px solid #DAD6D6;
			input {
				width: 100%;
				height:100%;
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