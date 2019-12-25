<template>
	<div class="addxuqu">
		<headt message='今日团购'></headt>
		<div class="a-d-d">
			<ul>
				<li v-for='item in mlist' @click="tuanDatail(1)">
					<div class="t-g-imh">
						<img :src="item.img" alt="" />
					</div>
					<p class="mingc">{{item.title}} </p>
					
					<div class="t-g-f-t">
						<div class="t-g-f-j">
<p>秒杀价：&yen;{{item.miaos}} <span class="yuanjia">&yen;{{item.yu}}</span></p>
						</div>
						<div class="t-g-f-b">
							<img src="../../../../static/gw.jpg" />
						</div>
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
					},{

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
					},{

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
				]
			}
		},
		components: {
			headt
		},
		methods: {
			tuanDatail(idt){
				this.$router.push('/home/pintuan/2')
				
			}
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
		.a-d-d {
			flex: 1;
			overflow: auto;
			ul {
				height: 96%;
				overflow: auto;
				padding: 0 20px;
				box-sizing: border-box;
				
				li {
					width: 345px;
					height: 496px;
					background: #fff;
					margin-top: 20px;
					padding: 20px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					.t-g-imh {
						height: 305px;
						width: 305px;
						img {
							height: 305px;
							width: 305px;
						}
					}
					.mingc {
						font-size: 24px;
						font-weight: 500;
						line-height: 32px;
						color: rgba(51, 51, 51, 1);
						margin: 20px 0 10px;
					}
					.t-g-f-t{
						height: 48px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.t-g-f-b{
							img{
								height: 48px;
								width: 48px;
							}
						}
					}
					.t-g-f-j{
						p {
							font-size: 26px;
							font-weight: 500;
							/*text-decoration: line-through;*/
							color: rgba(255, 101, 1, 1);
							.yuanjia {
								font-size: 26px;
								margin-left: 10px;
								font-weight: 500;
								text-decoration: line-through;
								color: #C1C1C1!important;
							}
						}
					}
				}
				li:nth-child(n){
					float: left;
				}
				li:nth-child(2n){
					float: right;
				}
			}
		}
	}
</style>