<template>
	<div class="totles">
		<div class="all-t">
			<div class="mai-t-c" @click="seachData">
				<i slot="icon" class="icon iconfont ">&#xe615;</i>养生花茶
			</div>
		</div>
		<div class="all-list">
			<ul class="a-l-s-t">
				<li v-for="(item,index) in leftl" @click="changestyle(index)" :class="{'xuan':chose===index}">{{item.name}}</li>
			</ul>
				
			<ul class="a-l-r" v-if="chose ==0">
				<li v-for="item in mlist">
					<img :src="item.img" class="mlistimg" />
					<div class="a-l-t-d">
						<p>{{item.title}}</p>
						<div class="listxi">
							<h2>
								<span>&yen;{{item.miaos}}</span><br />
								<span>&yen;{{item.yu}}</span>
							</h2>
							<h3>
								<img src="../../../static/gw.jpg"/>
							</h3>
						</div>
					</div>
				</li>
			</ul>
			<ul class="a-l-r" v-if="chose == 1">
				<li v-for="item in mlist">
					<img :src="item.img" class="mlistimg" />
					<div class="a-l-t-d">
						<p>{{item.title}}</p>
						<div class="listxi">
							<h2>
								<span>&yen;{{item.miaos}}</span><br />
								<span>&yen;{{item.yu}}</span>
							</h2>
							<h3>
								<img src="../../../static/gw.jpg"/>
							</h3>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				chose: 0,
				leftl: [{
						name: '每日推荐'
					},
					{
						name: '豆制品'
					},
					{
						name: '新鲜水果'
					},
					{
						name: '肉禽蛋'
					},
					{
						name: '海鲜水产'
					},
					{
						name: '乳品烘焙'
					},
					{
						name: '火锅来了'
					},
					{
						name: '米面粮油'
					},
					{
						name: '调味品'
					}
				],
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
					}, {

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
					}, {

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
		methods: {
			seachData() {},
			changestyle(index) {
				this.chose = index

			},

		}
	}
</script>

<style lang="stylus" scoped>
	.totles {
		padding: 20px 0 100px;
		background: #fff;
		display: flex;
		box-sizing: border-box;
		height: 100%;
		flex-direction: column;
		.all-t {
			display: flex;
			justify-content: center;
			height: 70px;
			div {
				width: 636px;
				height: 64px;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba(245, 245, 245, 1);
				border-radius: 32px;
				font-size: 30px;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				i {
					font-size: 38px!important;
					margin-right: 15px;
				}
			}
		}
		.all-list {
			flex: 1;
			overflow: auto;
			display: flex;
			justify-content: space-between;
			background: #fff;
			.a-l-s-t {
				width: 180px;
				height: 100%;
				overflow: auto;
				background: #E1E1E1;
				.xuan {
					background: #fff;
					color: #000000!important;
				}
				li {
					width: 180px;
					height: 80px;
					line-height: 80px;
					text-align: center;
					border-bottom: 2px solid #DAD6D6;
					font-size: 28px;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					background: #E1E1E1;
				}
			}
			.a-l-r {
				width: 72%;
				height: 100%;

				overflow: auto;
				li {
					height: 220px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.mlistimg {
						height: 180px;
						width: 180px;
					}
					.a-l-t-d {
						width: 350px;
						height: 218px;
						border-bottom: 2px solid #E1E1E1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						p {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							line-height: 34px;
							color: rgba(51, 51, 51, 1);
						}
						.listxi{
							margin-top: 60px;
							display: flex;
							justify-content: space-between;
							h2 {
								span:nth-child(1) {
									color: #FB0E3A;
									font-size: 32px;
									
								}
								span:nth-child(2) {
									font-size: 28px;
									font-weight: 500;
									text-decoration: line-through;
									color: #ccc;
								}
							}
							h3{
								img{
									width:48px;
									height: 48px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>