<template>
	<div class="tuihuo">
		<headt message='退货'></headt>
		<div class="wu-l">
			<div class="wu-l-t">
				<h2><span>退货原因</span> <span>订单号 59595989595959</span></h2>
				<van-radio-group v-model="radio">
					<van-cell-group>
						<van-cell title="质量问题" clickable @click="radio = '1'">
							<van-radio slot="right-icon" name="1" />
						</van-cell>
						<van-cell title="物流速度太慢" clickable @click="radio = '2'">
							<van-radio slot="right-icon" name="2" />
						</van-cell>
						<van-cell title="不想要了" clickable @click="radio = '3'">
							<van-radio slot="right-icon" name="3" />
						</van-cell>
						<van-cell title="其他原因" clickable @click="radio = '4'">
							<van-radio slot="right-icon" name="4" />
						</van-cell>
					</van-cell-group>
				</van-radio-group>
			</div>

			<div class="wu-l-n">
				<p><span>退款金额:</span> &yen;68.00</p>
				<p><span>退款说明:</span> <input type="text" placeholder="选填" /></p>

			</div>
			<div class="sh-ch">
				<h2>上传凭证</h2>
				<van-uploader v-model="fileList" multiple :max-count="3" />
			</div>
			<div class="t-j-s">
				<button>提交申请</button>
				<p>提示：申请提交72小时内商家会做出处理，请耐心等待！</p>
			</div>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'

	export default {
		data() {
			return {
				radio: '',
				fileList: []
			}
		},
		components: {
			headt

		},
		methods: {
			chakanData(idt) {
				this.$router.push('/myorder/wuliu/2')
			}
		}
	}
</script>

<style scoped lang="stylus">
	.tuihuo {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		overflow: auto;
		display: flex;
		flex-direction: column;
		.wu-l {
			flex: 1;
			overflow: auto;
			.t-j-s {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				button {
					width: 580px;
					height: 88px;
					background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
					border-radius: 44px;
					font-size: 30px;
					font-family: PingFang SC;
					border: none;
					font-weight: 500;
					margin: 40px 0 20px;
					color: rgba(255, 255, 255, 1);
				}
				p {
					font-size: 24px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}
			}
			.sh-ch {
				height: 280px;
				background: #FFFFFF;
				width: 100%;
				margin-top: 20px;
				>>>.van-uploader {
					padding-left: 40px;
				}
				h2 {
					font-size: 26px;
					padding: 20px 20px 30px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			.wu-l-n {
				height: 200px;
				margin-top: 20px;
				p {
					display: flex;
					align-items: center;
					padding-left: 30px;
					box-sizing: border-box;
					height: 100px;
					color: #FF6501;
					background: #fff;
					font-size: 26px;
					span {
						display: block;
						width: 150px;
						height: 25px;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(51, 51, 51, 1)!important;
					}
					input {
						width: 70%;
						height: 100%;
						color: #999999!important;
					}
				}
			}
			.wu-l-t {
				h2 {
					height: 88px;
					display: flex;
					justify-content: space-between;
					background: #fff;
					padding: 0 25px;
					box-sizing: border-box;
					align-items: center;
					span {
						font-size: 26px;
						font-weight: 500;
					}
					span:nth-child(1) {
						color: rgba(51, 51, 51, 1);
					}
					span:nth-child(2) {
						color: #999999;
					}
				}
			}
		}
	}
</style>