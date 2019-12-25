<template>
	<div class="addxuqu">
		<headt message='手机号修改'></headt>
		<div class="a-d-d">
			<div class="a-d-d-lst">
				<div class="a-d-r">
					<input type="number" v-model='nich' placeholder="请输入要更换手机号" />
					<i slot="icon" class="icon iconfont " @click="qingchuDtat">&#xe65c;</i>
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
	export default {
		data() {
			return {
				nich: ''
			}
		},
		components: {
			headt
		},
		methods: {
			qingchuDtat() {
				this.nich = ''
			},
			nextData() {}
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
			bottom: 180px;
			width: 100%;
			display: flex;
			justify-content: center;
			button {
				width: 580px;
				height: 80px;
				background: rgba(63, 185, 77, 1);
				border-radius: 40px;
				font-size: 28px;
				color: #fff;
			}
		}
		.a-d-d {
			margin-top: 20px;
			.a-d-d-lst {
				height: 140px;
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