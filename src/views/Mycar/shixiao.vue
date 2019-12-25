<template>
	<div class="sh-x">
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<h2 class="s-x-l">失效</h2>
				<div class="s-x-r">
					<img :src="item.img" alt="" />
					<div>
						<p>{{item.title}}</p>
						<p>
							&yen;{{item.sellPrice}}
						</p>
					</div>
				</div>

			</li>
		</ul>
		<div class="qingkong">
			<button>清空失效商品</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 2,
						title: '小罐茶 心意茶叶礼盒茶特级大红袍18罐茶叶礼盒装礼物送礼佳品',
						sellPrice: 50,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						selected: false,
						num: 4
					},
					{
						id: 2,
						title: '小罐茶 心意茶叶礼盒茶特级大红袍18罐茶叶礼盒装礼物送礼佳品',
						sellPrice: 50,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						selected: false,
						num: 4
					},
					{
						id: 2,
						title: '小罐茶 心意茶叶礼盒茶特级大红袍18罐茶叶礼盒装礼物送礼佳品',
						sellPrice: 50,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						selected: false,
						num: 4
					},
				]
			}
		}
	}
</script>

<style scoped lang="stylus">
	.sh-x {
		margin-top: 20px;
		.qingkong {
			width: 100%;
			background: #fff;
			padding:30px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			button {
				font-size: 26px;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				width: 280px;
				height: 68px;
				background: #fff;			
				border: 2px solid #E1E1E1!important;
				border-radius: 34px;
			}
		}
		ul {
			li {
				height: 205px;
				display: flex;
				align-items: center;
				background: #fff;
				.s-x-l {
					width: 90px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					background: rgba(204, 204, 204, 1);
					border-radius: 13px;
					font-size: 20px;
					font-family: PingFang SC;
					font-weight: 500;
					margin: 0 20px;
					color: rgba(249, 249, 249, 1);
				}
				.s-x-r {
					border-bottom: 2px solid #E1E1E1;
					height: 100%;
					display: flex;
					align-items: center;
					img {
						width: 166px;
						height: 166px;
						border-radius: 8px;
						margin-right: 26px;
					}
					div {
						height: 170px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						padding-right: 20px;
						p:nth-child(1) {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
							line-height: 36px;
						}
						p:nth-child(2) {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
					}
				}
			}
		}
	}
</style>