<template>
	<div class="jiany">
		<headt message='商务钥匙电子协议'></headt>
		<div class="m-k-n">


		</div>
		<div class="m-k-f">
			<p>
				<img src="../../../../static/img/choss.png" alt="" v-if="xuan==1" @click="xuan=2" />
				<img src="../../../../static/img/chos.png" v-else alt="" @click="xuan=1" /> 同意即表示同意
				<span>
					《商务钥匙托管服务电子协议》
				</span>
			</p>
			<button v-if='xuan==1' class="hui">同意</button>
			<button v-else @click='qianshuData'>同意</button>

		</div>

	</div>
</template>

<script>
	import headt from '../../../components/heda'
	import { mapGetters } from 'vuex'
	import { Notify } from 'vant';
	import { mykeyData } from '@/api/mine'

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

		},
		methods: {
			qianshuData() {
				let data = {
					token: this.TokenId,
				}
				mykeyData(data).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.list = res.data.data
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
				text-indent: 50px;
				line-height: 44px;
				font-size: 32px;
				height: 1000px;
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