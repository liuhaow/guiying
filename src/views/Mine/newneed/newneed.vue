<template>
	<div class="suoya">
		<headt message='填写新品信息'></headt>
		<div class="suoya-t">
			没有找到你想要的商品？请填写需求我们将为您找货！
		</div>
		<div class="you-x">
			<div>
				<h2>名称：</h2><input type="text" placeholder="请填写商品名称" />
			</div>

		</div>
		<div class="you-x">
			<div class="" @click="showPicker=true">
				<h2>分类：</h2><p>{{value}}</p>
			</div>

		</div>

		<div class="btnd">
			<button @click="nextData()">下一步</button>
		</div>
		<van-popup v-model="showPicker" position="bottom">
			<van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
		</van-popup>
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	export default {
		data() {
			return {
				showPicker: false,
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				value:'请选择商品分类'
			}
		},
		components: {
			headt
		},

		methods: {
			onConfirm(value) {
				this.value = value;
				this.showPicker = false;
			},
			nextData(){
					this.$router.push('/mine/addxuqu')
			}
		}

	}
</script>

<style lang="stylus" scoped>
	.suoya {
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
		.s-y-b {
			width: 100%;
			height: 280px;
			padding: 37px 0 0 40px;
			display: flex;
			margin-top: 20px;
			background: #fff;
			h2 {
				font-size: 28px;
				font-weight: 600;
				width: 160px;
				color: rgba(51, 51, 51, 1);
			}
			textarea {
				border: none;
				width: 500px;
				font-size: 28px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(204, 204, 204, 1);
				margin-top: -8px;
			}
		}
		.suoya-t {
			width: 100%;
			height: 80px;
			line-height: 80px;
			font-size: 26px;
			padding-left: 40px;
			margin: 30px 0 20px;
			box-sizing: border-box;
			font-weight: 500;
			color: rgba(63, 185, 77, 1);
			background: rgba(63, 185, 77, .2);
		}
		.you-x {
			width: 100%;
			height: 100px;
			padding: 0 40px;
			box-sizing: border-box;
			background: #fff;
			div {
				border-bottom: 2px solid #ddd;
				width: 100%;
				height: 98px;
				display: flex;
				align-items: center;
				h2 {
					font-size: 28px;
					font-weight: 600;
					width: 190px;
					color: rgba(51, 51, 51, 1);
				}
				p {
					width: 70%;
					font-size: 28px;

					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
	}
</style>