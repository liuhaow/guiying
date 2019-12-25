<template>
	<div class="addxuqu">
		<headt message='在线客服'></headt>
		<div class="a-d-d">
			<div class="p-t-f">
				<div>
					<h2>姓名</h2> <input type="" placeholder="请输入您的姓名" name="" id="" value="" />
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>手机号</h2> <input type="" placeholder="请填写您的手机号" name="" id="" value="" />
				</div>
			</div>
			<div class="p-t-f">
				<div>
					<h2>备注</h2> <input type="" placeholder="还有其他的问题可以留言我们！" name="" id="" value="" />
				</div>
			</div>

		</div>
		<div class="btnd">
			<button @click="nextData()">提交</button>
		</div>
	</div>
</template>

<script>
	import headt from '../../../../components/heda'
	export default {
		data() {
			return {
				fileList: [{
						url: 'https://img.yzcdn.cn/vant/leaf.jpg'
					},
					
				]
			}
		},
		components: {
			headt
		},
		methods: {
			suoyaoData(idt) {

			},
			nextData(){}
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
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}
</style>