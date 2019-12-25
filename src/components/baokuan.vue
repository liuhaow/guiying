<template>
	<div class="boakuan">
		<van-divider :style="{ color: '#9999', borderColor: '#999', padding: '0 40px' }">
			{{message}}
		</van-divider>
		<div class="bao-k">
			<ul>
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
	export default {
		props: ['message'],

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
		}
	}
</script>

<style scoped lang="stylus">
	.boakuan {
		.bao-k {
			ul {
				padding: 0 10px;
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				li {
					width: 49%;
					height: 560px;
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
				li:nth-child(n) {
					float: left;
				}
				li:nth-child(2n) {
					float: right;
				}
			}
		}
	}
</style>