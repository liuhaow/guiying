<template>
	<div class="addxuqu">
		<headt message='意见与反馈'></headt>
		<div class="a-d-d">
			<textarea v-model="title" placeholder="我们想听听你的心声，如果愿意，你也可以留下联系方式，我们期待与你的真诚沟通。"></textarea>
			<p>{{this.titleMaxLength - this.title.length}}/150</p>
		</div>
		<div class="btnd">
			<button @click="nextData()">提交</button>
		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	export default {
		data() {
			return {

				title: '',
				titleMaxLength: 150
			}
		},
		components: {
			headt
		},
		watch: {
			title() {
				if(this.title.length > this.titleMaxLength) {
					this.title = String(this.title).slice(0, this.titleMaxLength);
				}
			}
		},
		methods: {
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
			margin-top: 160px;
			width: 100%;
			justify-content: center;
			display: flex;
			button {
				width: 580px;
				height: 80px;
				background: rgba(63, 185, 77, 1);
				border-radius: 40px;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);

			}
		}
		.a-d-d {
			height: 480px;
			background: #fff;
			padding: 30px 20px;
			box-sizing: border-box;
			position: relative;
			margin-top: 40px;
			textarea {
				width: 100%;
				height: 300px;
				border: 0;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 204, 204, 1);
				line-height: 44px;
			}
			p {
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 204, 204, 1);
				line-height: 70px;
				position: absolute;
				right: 50px;
				bottom: 60px;
			}
		}
	}
</style>