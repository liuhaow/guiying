<template>
	<div class="addxuqu">
		<headt message='限时秒杀'></headt>
		<div class="a-d-d">

				<ul class="m-s-t" >
					<li v-for='(item,index) in mlist' @click="changestyle(index)" :class="{'actt':select===index}">
						<div class="d-t-m-e" >						
							<p v-if="item.tf==1">
								即将结束
							</p>
							<h2 v-if="item.tf==1">00:25:12</h2>
							
							<p v-if="item.tf==2">
								即将开始
							</p>
							<h2 v-if="item.tf==2">00:25:12</h2>
							
							
						</div>

					</li>
				</ul>


			<div class="l-s-t-d">
				<ul class="xlist" v-if='mlist'>
					<li v-for='(item,index) in mlist'>
						<img :src="item.img" class="mimgs" alt="" />
						<div class="miao-l-r">
							<p class="mingc">{{item.title}} </p>
							<p class="bili"><span class="bline"></span></p>
							<div class="mjia">
								<p>秒杀价：&yen;{{item.miaos}} <span class="yuanjia">&yen;{{item.yu}}</span></p>
								<h3>马上抢</h3>
							</div>
						</div>
					</li>


				</ul>
			</div>

		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import BScroll from "better-scroll";
	export default {
		data() {
			return {
				select: 0,
				dt: 1,
				mlistd: [],
				mlist: [{
						tf: 1,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{
						tf: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{
						tf: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{
						tf: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{
						tf: 2,
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果 柑橘 皇帝柑2.5kg装 ',
						miaos: '90',
						yu: '109'
					},
					{
						tf: 2,
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
		created() {
			this.$nextTick(() => {
				this.personScroll();
			});
		},
		methods: {
			changestyle(index) {
				this.select = index

			},
			personScroll() {
				// 默认有六个li子元素，每个子元素的宽度为120px

				let width = this.mlist.length * 2.5;
				this.$refs.personTab.style.width = width + "rem";

				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.personWrap, {
							startX: 0,
							click: true,
							scrollX: true,
							// 忽略竖直方向的滚动
							scrollY: false,
							eventPassthrough: "vertical"
						});
					} else {
						this.scroll.refresh();
					}
				});
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
		padding-bottom: 98px;
		box-sizing: border-box;
		overflow: auto;
		.a-d-d {
			flex: 1;
			background: #fff;
			overflow: auto;
			display: flex;
			flex-direction: column;
			.l-s-t-d {
				flex: 1;
				overflow: auto;
				.xlist {
					height: 98%;
					overflow: auto;
					li {
						height: 260px;
						padding: 0 20px;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						margin: 30px 0;
						.mimgs {
							height: 220px;
							width: 220px;
						}
						.miao-l-r {
							width: 458px;
							height: 100%;
							border-bottom: 2px solid #e1e1e1;
							padding-top: 20px;
							box-sizing: border-box;
							display: flex;
							flex-direction: column;
							.mingc {
								font-size: 26px;
								font-weight: 500;
								line-height: 32px;
								color: rgba(51, 51, 51, 1);
							}
							.bili {
								width: 300px;
								height: 26px;
								background: rgba(63, 185, 77, .1);
								border-radius: 13px;
								margin: 25px 0 40px;
								.bline {
									display: block;
									width: 120px;
									height: 26px;
									background: rgba(63, 185, 77, 1);
									border-radius: 13px;
								}
							}
							.mjia {
								display: flex;
								justify-content: space-between;
								align-items: center;
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
								h3 {
									width: 160px;
									height: 58px;
									border: 2px solid rgba(63, 185, 77, 1);
									border-radius: 29px;
									font-size: 26px;
									line-height: 58px;
									text-align: center;
									font-weight: 500;
									color: rgba(63, 185, 77, 1);
								}
							}
						}
					}
				}
			}
			.father {
				height: 100px;
				width: 100%;
				overflow: auto;
				touch-action: none;
			}
			.m-s-t {

				width:100%;display: inline;white-space: nowrap;overflow-x:scroll;float:left;overflow-y:hidden
				li {
					width: 200px;
					height: 100px;
					background: #fff;
					background: #262c41;
					display: inline-block;
					color: #fff;
					.d-t-m-e {
						height: 100px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						color: #fff;
						p {
							font-size: 32px;
							margin: 10px 0;
						}
						h2 {
							font-size: 24px;
						}
					}
				}
				.actt {
					background: #3FB94D!important;
				}
			}
		}
	}
</style>