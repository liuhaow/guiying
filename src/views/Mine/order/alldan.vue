<template>
	<div class="alldan">
		<headt message='商品清单'></headt>
		<div class="all-list">
			<div class="all-t">
				<span>商品</span>
				<span>共5件</span>
			</div>
			<ul class="splist">
				<li v-for='(item,index) in mlist' :key='index'>
					<img :src="item.img" />
					<div class="x-qing">
						<h3>浙江省 杭州市 余杭区好运街风雅乐府好 运路</h3>
						<h4>单价：<span>¥{{item.yu}}</span>数量：<span>{{item.num}}</span></h4>
						<p>&yen;{{item.totle}}</p>
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
						num: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						totle: 50

					},
					{

						num: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						totle: 50

					},
					{

						num: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						totle: 50

					},
					{

						num: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						totle: 50

					},
					{

						num: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						totle: 50

					},{

						num: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						totle: 50

					}

				]
			}
		},
		components: {
			headt

		},
	}
</script>
<style scoped lang="stylus">
	.alldan {
		overflow: auto;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.all-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			overflow: auto;
			.splist {
				flex: 1;
				overflow: auto;
				width: 100%;
				li {
					width: 96%;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					height: 200px;
					background: rgba(255, 255, 255, 1);
					border-radius: 8px;
					padding: 0 20px;
					box-sizing: border-box;
					margin: 0 auto 20px;
					img {
						height: 152px;
						width: 152px;
						margin-right: 20px;
					}
					.x-qing {
						height: 168px;
						width: 474px;
						h3 {
							font-size: 28px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							overflow: hidden; 
							text-overflow: ellipsis; 
							white-space: nowrap;
							padding-top: 10px;
						}
						h4 {
							font-size: 24px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
							margin: 20px auto 40px;
						}
						p {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
							text-align: right;
						}
					}
				}
			}
			.all-t {
				height: 80px;
				width: 96%;
				padding: 0 20px;
				background: #fff;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				margin-top: 30px;
				margin-bottom: 2px;
				align-items: center;
				span {
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}
		}
	}
</style>