<template>
	<div class="wuliu">
		<headt message='交易成功'></headt>
		<div class="wu-l">
			<div class="j-y-t">
				<h2><img src="../../../../static/img/succs.png" alt="" />评价成功</h2>
				<p>坚持写真实内容丰富的评价，共建更好的购物体验！</p>
				<div class="">
					<button>返回首页</button><button>继续购物</button>
				</div>
			</div>
			<ul class="baokuan">

				<li v-for='(item,index) in mlist' :key='index'>
					<div class="bao-t-img">
						<img :src="item.img" />
					</div>
					<p class="bao-cont">{{item.title}}</p>
					<div class="bao-f">
						<h2>&yen;{{item.miaos}}</h2>
						<h3></h3>
					</div>

				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'

	export default {
		data() {
			return {
				mlist: [{
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{

						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{

						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{

						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{

						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					}

				]
			}
		},
		components: {
			headt

		},
		methods: {

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
		.wu-l {
			flex: 1;
			overflow: auto;
			display: flex;
			flex-direction: column;
			.baokuan {
				display: flex;
				overflow: auto;
				flex: 1;
				flex-wrap: wrap;
				padding: 0 20px;
				box-sizing: border-box;
				justify-content: space-between;
				li {
					width: 49%;
					height: 496px;
					background: rgba(255, 255, 255, 1);
					border-radius: 10px;
					padding: 0 20px;
					box-sizing: border-box;
					margin-bottom: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.bao-t-img {
						width: 100%;
						height: 360px;
						display: flex;
						justify-content: center;
						align-items: center;
						img {
							width: 300px;
							height: 300px;
						}
					}
					.bao-cont {
						font-size: 26px;
						font-family: PingFang SC;
						font-weight: 500;
						line-height: 34px;
						color: rgba(51, 51, 51, 1);
					}
					.bao-f {
						display: flex;
						justify-content: space-between;
						padding-bottom: 30px;
						h2 {
							font-size: 34px;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(251, 114, 24, 1);
						}
						h3 {
							width: 48px;
							height: 48px;
							background: linear-gradient(-36deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
							border-radius: 50%;
						}
					}
				}
			}
			.j-y-t {
				height: 379px;
				background: linear-gradient(-36deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 40px;
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