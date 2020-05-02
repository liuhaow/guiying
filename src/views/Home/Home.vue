<template>
	<div class="wrapper">
		<div class="nreprp" v-if="newpro">
			<div class="nreprp-m">
				<div class="nr-m-p">
					<h5 class="banbi" @click="newdataclose()">
						<img src="../../assets/img/shib.png"/>
					</h5>
					<h2 class="c-jiang">新人红包限时领</h2>
					<div class="new-nac">
						<div class="j-q-a">
							<h3>
								<span>&yen;</span>{{nuewx.used_amount}}
							</h3>
							<h4>
								<span>新人专享</span>
								<span>{{countDownList}}</span>
								
							</h4>
						</div>
						<button @click="qushiyongdata()">去使用</button>
					</div>
					<ul class="n-ew-l">
						<li v-for="(item,index) in liebiao" :key='index'>
							<img :src="item.cover" alt="" />
							<div class="x-n-qig">
								<p>{{item.title}}</p>
								<h2>
									<span >
										&yen;{{item.now_price}}
									</span>
									<button @click="newxiadan(item.id)">去下单</button>
								</h2>
							</div>
						</li>
					</ul>
					<div class="c-new-k" @click="qushiyongdata()">
						查看更多
					</div>
				</div>
			</div>
		</div>

		<div class="h-t-o-u" :style="{backgroundImage: 'url(' + coverImgUrl + ')', backgroundSize:'cover'}">

			<div class="mai-t">
				<div class="mai-head">
					<div class="mai-t-l" @click="kefuData">
						<i slot="icon" class="icon iconfont ">&#xe665;</i>

					</div>
					<div class="mai-t-c" @click="seachData">
						<i slot="icon" class="icon iconfont ">&#xe615;</i>养生花茶
					</div>
					<div class="mai-t-r" @click="messData()">
						<i slot="icon" class="icon iconfont ">&#xe61e;</i>
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
						<i slot="icon" class="icon iconfont ">&#xe61f;</i>

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
					<li v-for='(item,index) in list' :style="colochos" class="list-n" @click="tiaozhuan(index,item.id)">
						<img :src="item.logo" alt="" />
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
			<div class="haol" @click="tiaozhuadata()">
				<div class="haob">
					<img v-if='hud1' :src="hud1.image" />
				</div>
			</div>
		</div>
		<div class="te-s">
			<p class="zhuanq">特色专区</p>
			<div class="ttui">
				<div class="zhide gm" @click="fashData(1)">
					<h2>值得买的</h2>
					<h3>TOP清单</h3>
					<p class="imgh">
						<img src="../../assets/xia.png" alt="" />
						<img src="../../assets/xia1.png" alt="" />
					</p>
				</div>
				<div class="zhide" @click="fashData(2)">
					<h2>值得买的</h2>
					<h3>TOP清单</h3>
					<p class="imgh">
						<img src="../../assets/xia.png" alt="" />
						<img src="../../assets/xia1.png" alt="" />

					</p>
				</div>

			</div>
		</div>

		<timeout></timeout>
		<tuangou></tuangou>
		<div class="haol">
			<div class="haob" @click="tianzhuanhuyuan">
				<img v-if='hud' :src="hud.image" />
			</div>
		</div>
		<navlist></navlist>
		<tabbar tabName='0'></tabbar>
	</div>
</template>

<script>
	import Timeout from '@/views/Home/Timeout'
	import Tuangou from '@/views/Home/Tuangou'
	import Navlist from '@/views/Home/Navlist'
	import tabbar from "@/components/abbar"
	import { mapGetters, mapActions } from 'vuex'

	import { Dialog } from 'vant';
	import { lunboData, shangpingData, indexmessage, indexList, newyouhui, newpeipodata, colorhuoqudata } from '@/api/api'

	export default {
		data() {
			return {
				newpro: false,
				colochos: {
					color: ''
				},
				list: [],
				announcementArr: [],
				animate: false,
				lunb: [{
					image: ''
				}],
				hud: '',
				coverImgUrl: '',
				hud1: '',
				liebiao: [],
				nuewx: '',
				actEndTime: '',
				countDownList: '00:00:00'

			}
		},
		components: {
			Timeout,
			Tuangou,
			Navlist,
			tabbar
		},
		create() {
			this.fundd();

		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			var that = this
			if(!this.TokenId) {

			} else {
				let pdet = {
					token: this.TokenId
				}
				newyouhui(pdet).then(res => {
					if(res.data.code == 200) {
						this.liebiao = res.data.data.commodity
						this.nuewx = res.data.data.coupons
						if(res.data.data.is_coupons == 1) {
							this.newpro = true
							this.actEndTime = res.data.data.coupons.valid_end_time;

							this.countDown()
						} else {
							this.newpro = false

						}

					}
				})
			}
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
						let banjin = lunbt.filter(function(item) {
							return item.type == 6
						})
						console.log(that.coverImgUrl)
						console.log(lunbDt, lunbDhd, lunbDhd1, banjin)
						that.coverImgUrl = banjin[0].image
						that.lunb = lunbDt
						that.hud = lunbDhd[0]
						that.hud1 = lunbDhd1[0]

					}
				})
				indexList().then(res => {
					if(res.data.code == 200) {
						that.list = res.data.data
					}
				})
				colorhuoqudata().then(res => {
					if(res.data.code == 200) {
						that.colochos={
							color: res.data.data +'!important'
						}
					}
				})

			}

		},

		methods: {
			...mapActions(
				[

					'chooseilt',
					'settaber'

				]
			),
			newdataclose() {
				this.newpro = false
				let data = {
					token: this.TokenId
				}
				newpeipodata(data).then(res => {

				})
			},
			timeFormat(param) {　　　　　　
				return param < 10 ? '0' + param : param;　　　　
			},
			countDown(it) {　　　　　　
				var interval = setInterval(() => {　　　　　　　　　　　　　　　　
					let newTime = new Date().getTime();　　　　　　　　　　　　　　　　
					let endTime = new Date(this.actEndTime).getTime();　　　　　　　　
					let obj = null;　　　　　　　　　　　　　　　　
					if(endTime - newTime > 0) {　　　　　　　　　　
						let time = (endTime - newTime) / 1000;　　　　　　　　　　　　
						let hou = parseInt(time % (60 * 60 * 24) / 3600);　　　　　　　　　　
						let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);　　　　　　　　　　
						let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);　　　　　　　　　　
						obj = {　　　　　　　　　　　　

							　　　　　　　　　　　　
							hou: this.timeFormat(hou),
							　　　　　　　　　　　　min: this.timeFormat(min),
							　　　　　　　　　　　　sec: this.timeFormat(sec)　　　　　　　　　　
						};　　　　　　　　
					} else { // 活动已结束，全部设置为'00'
						　　　　　　　　　　
						obj = {　　　　　　　　　　　　
							hou: '00',
							min: '00',
							sec: '00'　　　　　　　　　　
						};　　　　　　　　　　
						clearInterval(interval);　　　　　　　　
					}　　　　　　　　
					this.countDownList = obj.hou + ':' + obj.min + ':' + obj.sec;　　　　　　
				}, 1000);　　　　
			},
			showMarquee: function() {
				this.animate = true;
				setTimeout(() => {
					this.announcementArr.push(this.announcementArr[0]);
					this.announcementArr.shift();
					this.animate = false
				}, 1000)
			},
			messData() {
				this.$router.push('/home/mecenter')

			},
			tiaozhuadata(){
				this.$router.push('/youh')
				
			},
			tianzhuanhuyuan(){
				this.$router.push('/vip/Vipmeber')

				
			},
			kefuData() {
				console.log(1)

				if(this.TokenId == '') {
					console.log(2)
					Dialog.confirm({
						title: '提示',
						message: '需要登录'
					}).then(() => {
						this.$router.push('/need/login')
					}).catch(() => {});

					return
				}

				this.$router.push('/home/chat')
			},
			seachData() {

				this.$router.push('/home/seach')

			},
			fashData(idt) {
				this.$router.push({
					path: '/home/fash',
					query: {
						ty: idt
					}
				})

			},
			qushiyongdata() {
				this.chooseilt(0)
				this.$router.push('/overall')
			},
			newxiadan(idt) {
				var that = this
				that.$router.push('/overall/detail/' + idt)
			},

			tiaozhuan(idt, idd) {
				console.log(idt)
				this.chooseilt(idd)
				if(idt == 9) {
					this.$router.push('/vip/Vipmeber')

				} else {
					this.$router.push('/overall')
					this.settaber(1)
				}

			}
		}
	};
</script>

<style lang="stylus" scoped>
	.wrapper {
		width: 100%;
		background: rgba(225, 225, 225, .3);
		padding-bottom: 98px;
		box-sizing: border-box;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}
	
	.h-t-o-u {
		background: url(../../assets/bjin.png) no-repeat;
		background-size: cover;
		padding-bottom: 20px;
	}
	
	.nreprp {
		height: 100%;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
		.nreprp-m {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.nr-m-p {
				width: 580px;
				height: 824px;
				display: flex;
				flex-direction: column;
				align-items: center;
				position: relative;
				background: linear-gradient(-10deg, rgba(235, 51, 43, 1), rgba(247, 147, 61, 1));
				border-radius: 16px;
				.banbi {
					position: absolute;
					bottom: -100px;
					img {
						height: 80px;
						width: 80px;
					}
				}
				.c-jiang {
					font-size: 60px;
					font-family: FZZhengHeiS-M-GB;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					padding: 51px 0 44px;
				}
				.c-new-k {
					width: 468px;
					height: 92px;
					line-height: 92px;
					text-align: center;
					font-size: 36px;
					color: #FA662A;
					background: linear-gradient(0deg, rgba(251, 181, 69, 1), rgba(253, 243, 154, 1));
					box-shadow: 0px 8px 0px 0px rgba(250, 102, 42, 1);
					border-radius: 46px;
				}
				.n-ew-l {
					width: 520px;
					height: 358px;
					margin: 10px 0 24px;
					overflow: auto;
					background: rgba(255, 255, 255, 1);
					border-radius: 16px;
					li {
						height: 174px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 10px;
						box-sizing: border-box;
						img {
							width: 140px;
							height: 140px;
							border-radius: 16px;
						}
						.x-n-qig {
							height: 140px;
							display: flex;
							width: 340px;
							flex-direction: column;
							justify-content: space-between;
							p {
								font-size: 32px;
								color: #333;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							h2 {
								display: flex;
								justify-content: space-between;
								span {
									font-size: 34px;
									color: #FB0E3A;
								}
								button {
									width: 120px;
									height: 46px;
									background: linear-gradient(90deg, rgba(255, 101, 1, 1), rgba(254, 149, 81, 1));
									border-radius: 23px;
									font-size: 26px;
									color: #fff;
									border: 0;
								}
							}
						}
					}
				}
				.new-nac {
					width: 520px;
					height: 160px;
					background: rgba(253, 239, 227, 1);
					border-radius: 16px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					button {
						width: 140px;
						height: 52px;
						background: linear-gradient(90deg, rgba(255, 101, 1, 1), rgba(254, 149, 81, 1));
						border-radius: 26px;
						font-size: 30px;
						color: #fff;
						border: 0;
						margin-right: 10px;
					}
					.j-q-a {
						display: flex;
						width: 345px;
						justify-content: space-around;
						align-items: center;
						h3 {
							font-size: 50px;
							color: rgba(235, 51, 43, 1);
							span {
								font-size: 24px!important;
							}
						}
						h4 {
							font-size: 28px;
							color: #EB332B;
							display: flex;
							flex-direction: column;
							span {
								margin: 10px 0;
							}
						}
					}
				}
			}
		}
	}
	
	.haol {
		height: 220px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.haob {
			width: 720px;
			height: 206px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.te-s {
		background: #fff;
		padding: 0px 20px 0;
		box-sizing: border-box;
		height: 366px;
		width: 100%;
		background: #fff;
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
		height: 540px;
		/*background: red;*/
		.nav-t {
			height: 80px;
			background: rgba(255, 255, 255, 1);
			border-radius: 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			padding-left: 40px;
			.la-b-a {
				display: flex;
				align-items: center;
				height: 100%;
				i {
					color: #FD8048;
					font-size: 34px;
				}
			}
			.marquee_box {
				display: block;
				position: relative;
				width: 60%;
				height: 50px;
				margin-left: -60px;
				overflow: hidden;
				.marquee_top {
					transition: all 0.5s;
					margin-top: -50px
				}
				.marquee_list {
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					li {
						height: 50px;
						line-height: 50px;
						font-size: 28px;
						color: #494949;
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
				height: 100%;
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
				color: #fff;
				margin: 30px 0;
				img {
					width: 96px;
					height: 96px;
					border-radius: 50%;
				}
				p {
					font-size: 24px;
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
		/*background: linear-gradient(0deg, rgba(69, 185, 84, 1) 0%, rgba(91, 231, 126, 1) 100%);*/
		/*background: red;*/
		.mai-head {
			height: 64px;
			display: flex;
			justify-content: center;
			align-items: center;
			.mai-t-l {
				height: 44px;
				width: 44px;
				i {
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
				i {
					font-size: 30px!important;
					margin-right: 4px;
				}
			}
			.mai-t-r {
				width: 38px;
				height: 44px;
				i {
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