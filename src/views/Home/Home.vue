<template>
	<div class="wrapper">
		<div class="mai-t">
			<div class="mai-head">
				<div class="mai-t-l" @click="kefuData">
					<i slot="icon" class="icon iconfont " >&#xe665;</i>
					
				</div>
				<div class="mai-t-c" @click="seachData">
					<i slot="icon" class="icon iconfont " >&#xe615;</i>养生花茶
				</div>
				<div class="mai-t-r" @click="messData()">					
					<i slot="icon" class="icon iconfont " >&#xe61e;</i>				
				</div>
			</div>
			<div class="mai-sw">
				<mt-swipe>
					<mt-swipe-item v-for='(item,index) in lunb' :key='index'>
						<img :src="item.image" style="width:100%;height: 100%;border-radius:16px;" alt="" />
					</mt-swipe-item>

				</mt-swipe>
			</div>
		</div>

		<div class="nav-l">
			<div class="nav-t">
				<div class="la-b-a">
				<i slot="icon" class="icon iconfont " >&#xe61f;</i>
					
				</div>
				<div class="marquee_box ">					
					<ul class="marquee_list" :class="{marquee_top:animate}">
						<li v-for="(item, index) in announcementArr" :key="index">
							<span>{{item.title}}</span>
						</li>
					</ul>
				</div>
				<p @click="messData()">更多</p>
			</div>
			<ul class="nav-list">
				<li v-for='(item,index) in list' class="list-n">
					<img :src="item.img" alt="" />
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>

		<div class="te-s">
			<p class="zhuanq">特色专区</p>
			<div class="ttui">
				<div class="zhide gm">
					<h2>值得买的</h2>
					<h3>TOP清单</h3>
					<p class="imgh">
						<img src="http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg" alt="" />
						<img src="http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg" alt="" />
					</p>
				</div>
				<div class="zhide">
					<h2>值得买的</h2>
					<h3>TOP清单</h3>
					<p class="imgh">
						<img src="http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg" alt="" />
						<img src="http://a.hiphotos.baidu.com/image/h%3D300/sign=a62e824376d98d1069d40a31113eb807/838ba61ea8d3fd1fc9c7b6853a4e251f94ca5f46.jpg" alt="" />
					</p>
				</div>

			</div>
		</div>

		<div class="haol">
			<div class="haob">
				<img v-if='hud' :src="hud.image" />
			</div>
		</div>
		<timeout></timeout>
		<tuangou></tuangou>
		<div class="haol">
			<div class="haob">
				<img v-if='hud1' :src="hud1.image" />
			</div>
		</div>
		<navlist></navlist>
	</div>
</template>

<script>
	import Timeout from '@/views/Home/Timeout'
	import Tuangou from '@/views/Home/Tuangou'
	import Navlist from '@/views/Home/Navlist'
	import { lunboData, shangpingData, indexmessage } from '@/api/api'

	export default {
		data() {
			return {
				list: [{
						name: '新鲜蔬菜',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					},
					{
						name: '肉禽蛋品',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '粮油米面',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '酒水饮料',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '调味干货',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '水产海鲜',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '餐厨用品',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '火锅专用',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}, {
						name: '烧烤专用',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					},
					{
						name: '会员专享',
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
					}

				],
				announcementArr: [],
				animate: false,
				lunb: [],
				hud: '',
				hud1: ''
			}
		},
		components: {
			Timeout,
			Tuangou,
			Navlist
		},
		create() {
			this.fundd;

		},
		mounted() {
			var that = this
			fundd: {
				let parem = {
					page: 1
				}
				indexmessage(parem).then(res => {
					if(res.data.code == 200) {
						that.announcementArr = res.data.data.notice
						setInterval(this.showMarquee, 2000);
					}
				})
				lunboData().then(res => {
					if(res.data.code == 200) {
						let lunbt = res.data.data;
						let lunbDt = lunbt.filter(function(item) {
							return item.type == 1
						})
						let lunbDhd = lunbt.filter(function(item) {
							return item.type == 2
						})
						let lunbDhd1 = lunbt.filter(function(item) {
							return item.type == 3
						})
						console.log(lunbDt, lunbDhd, lunbDhd1)
						that.lunb = lunbDt
						that.hud = lunbDhd[0]
						that.hud1 = lunbDhd1[0]

					}
				})

			}

		},
		methods: {
			showMarquee: function() {
				this.animate = true;
				setTimeout(() => {
					this.announcementArr.push(this.announcementArr[0]);
					this.announcementArr.shift();
					this.animate = false
				}, 1000)
			},
			messData(){
					this.$router.push('/home/mecenter')
				
			},
			kefuData(){
					this.$router.push('/home/chat')
				
			},
			seachData(){
				
					this.$router.push('/home/seach')
				
			}
		}
	};
</script>

<style lang="stylus" scoped>
	.wrapper {
		width: 100%;
		background: #ccc;
		padding-bottom: 98px;
	}
	
	.haol {
		height: 280px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.haob {
			width: 721px;
			height: 206px;
			background: darkcyan;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.te-s {
		background: #fff;
		padding: 0px 20px 0;
		margin-top: 20px;
		box-sizing: border-box;
		height: 366px;
		width: 100%;
		background: yellow;
		.zhuanq {
			font-size: 36px;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			height: 98px;
			line-height: 98px;
			border-bottom: 2px solid #E1E1E1;
		}
		.ttui {
			display: flex;
			height: 266px;
			.gm {
				border-right: 2px solid #E1E1E1;
			}
			.zhide {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				padding-left: 30px;
				box-sizing: border-box;
				justify-content: center;
				h2 {
					font-size: 30px;
					font-weight: bold;
					color: rgba(252, 79, 79, 1);
				}
				h3 {
					font-size: 24px;
					font-weight: 400;
					margin: 10px 0;
					color: rgba(204, 204, 204, 1);
				}
				.imgh {
					height: 147px;
					width: 110px;
					display: flex;
					img {
						height: 147px;
						width: 110px;
						margin: 0 30px 0 0;
					}
				}
			}
		}
	}
	
	.nav-l {
		padding: 80px 27px 0;
		box-sizing: border-box;
		height: 500px;
		background: #fff;
		.nav-t {
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			padding-left: 40px;

			.la-b-a{
				position: absolute;
				left: 5px;
				top: 4px;
				i{
					color: #FD8048;
					font-size: 34px;
				}
			}
			.marquee_box {
				display: block;
				position: relative;
				width: 60%;
				height: 30px;
				overflow: hidden;

				.marquee_top {
					transition: all 0.5s;
					margin-top: -30px
				}
				.marquee_list {
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					li {
						height: 30px;
						line-height: 30px;
						font-size: 12px;
						padding-left: 20px;
					}
				}
			}
			p {
				font-size: 30px;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				padding: 0 20px;
				display: flex;
				align-items: center;
				height:100%;
			}
		}
		.nav-list {
			display: flex;
			flex-wrap: wrap;
			li {
				width: 20%;
				height: 130px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				margin: 30px 0;
				img {
					width: 96px;
					height: 96px;
					border-radius: 50%;
				}
				p {
					font-size: 24px;
					color: #4949449
				}
			}
		}
	}
	
	.mai-t {
		height: 429px;
		width: 100%;
		padding-top: 40px;
		box-sizing: border-box;
		position: relative;
		background: linear-gradient(0deg, rgba(69, 185, 84, 1) 0%, rgba(91, 231, 126, 1) 100%);
		.mai-head {
			height: 64px;
			display: flex;
			justify-content: center;
			align-items: center;
			.mai-t-l {
				height: 44px;
				width: 44px;

				i{
					font-size: 48px;
					color: #ffff;
				}
			}
			.mai-t-c {
				width: 530px;
				height: 64px;
				background: rgba(255, 255, 255, 1);
				border-radius: 32px;
				line-height: 64px;
				margin: 0 30px;
				text-align: center;
				font-size: 28px;
				color: #ccc;
				i{
					font-size: 30px!important;
					margin-right: 4px;
				}
			}
			.mai-t-r {
				width: 38px;
				height: 44px;
				i{
					font-size: 48px;
					color: #ffff;
				}
			}
		}
		.mai-sw {
			width: 710px;
			height: 360px;
			position: absolute;
			bottom: -60px;
			left: 20px;
			margin: 0 auto;
		}
	}
</style>