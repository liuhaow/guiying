<template>
	<div class="viplist">
		<headt message='会员专区'></headt>

		<div class="allpin">
			<ul>
				<li v-for="(item,index) in tlist" :key='index'>
					<img class="spimg" src="http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg" alt="" />
					<div class="hy-list">
						<div class="hy-l-l">
							<h2>兴业馆广西皇帝柑贡柑新鲜水果</h2>
							<h3>&yen;9.9 <span class="hyuajia">会员价</span> <span class="zhek">&yen;9.9</span></h3>
						</div>
						<div class="goumai">
							<img src="../../../static/img/jgwc.png" alt="" />
						</div>
					</div>

				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { shangpingData } from '@/api/api'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				selected: 0,
				tlist:[]
			}
		},
		components: {
			headt
		},
		mounted() {
			let datad = {
				type: 10,
				page: 1
			}
			shangpingData(datad).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.tlist = res.data.data.splice(0, 4)
				}
			})
		},
		methods: {
			changestyle(index) {
				this.selected = index
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.viplist {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.allpin {
			flex: 1;
			background: #fff;
			overflow: auto;
			ul {
				height: 100%;
				overflow: auto;
				li {
					height: 180px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.spimg {
						height: 150px;
						margin-left: 30px;
						width: 150px;
					}
					.hy-list {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 70%;
						height: 100%;
						border-bottom: 2px solid #E1E1E1;
						.hy-l-l {
							height: 70%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							h3 {
								font-size: 24px;
								color: rgba(63, 185, 77, 1);
								display: flex;
								font-weight: 600;
								align-items: center;
								.hyuajia {
									display: block;
									width: 88px;
									height: 32px;
									line-height: 32px;
									text-align: center;
									margin: 0 20px;
									background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
									border-radius: 16px;
									color: #fff!important;
								}
								.zhek {
									color: #666666!important;
								}
							}
						}
						.goumai {
							img {
								width: 55px;
								height: 55px;
								margin: 70px 30px 0 0;
							}
						}
					}
				}
			}
		}
		.nav-ul {
			height: 100px;
			background: #FFF;
			ul {
				overflow-x: auto;
				white-space: nowrap;
				width: auto;
				li {
					width: 178px;
					height: 100px;
					background: #fff;
					line-height: 100px;
					position: relative;
					text-align: center;
					font-size: 32px;
					color: #333;
					display: inline-block;
				}
				.chost {
					color: #3FB94D!important;
				}
				.chost:after {
					content: '';
					position: absolute;
					z-index: 22;
					width: 36px;
					height: 4px;
					left: 40%;
					top: 80px;
					background: linear-gradient(-36deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
					border-radius: 2px;
				}
			}
		}
	}
</style>