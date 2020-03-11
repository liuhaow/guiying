<template>
	<div class="wuliu">

		<div class="hadef">
			评论状态
		</div>
		<div class="wu-l">
			<div class="j-y-t">
				<h2><img src="../../../../static/img/succs.png" alt="" />评价成功</h2>
				<p>坚持写真实内容丰富的评价，共建更好的购物体验！</p>
				<div class="">
					<button @click="fanhuidata">返回首页</button><button @click="jixugoshoping">继续购物</button>
				</div>
			</div>
			<div class="baoku">
			<baokuand v-on:click="myclick"></baokuand>
				
			</div>

		</div>

	</div>
</template>

<script>

	import baokuand from '@/components/baokuand'
	export default {
		data() {
			return {
				
			}
		},
		components: {

			baokuand
		},
		methods: {
			myclick(){},
			fanhuidata(){
				this.$router.push('/home')
				
			},
			jixugoshoping(){
				this.$router.push('/overall')
				
			}
		}
	}
</script>

<style scoped lang="stylus">
	.wuliu {
		height: 100%;
		overflow: auto;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.hadef{
			height: 80px;
			line-height: 80px;
			font-size: 38px;
			text-align: center;
			background: #fff;
			font-weight: 600;
		}
		.wu-l {
			flex: 1;
			overflow: auto;
			display: flex;
			flex-direction: column;
			.baoku{
				flex: 1;
				overflow: auto;
			}
			
			.j-y-t {
				height: 379px;
				background: linear-gradient(-36deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				h2 {
					font-size: 40px;
					color: rgba(255, 255, 255, 1);
					img {
						height: 40px;
						width: 40px;
						margin-right: 20px;
					}
				}
				p {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(255, 255, 255, .8);
					margin: 32px 0 56px;
				}
				div {
					display: flex;
					width:70%;
					justify-content: space-around;
					button {
						width: 180px;
						height: 62px;
						border: 2px solid rgba(255, 255, 255, 1);
						border-radius: 31px;
						font-size: 26px;
						background: none;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
					}
				}
			}
		}
	}
</style>