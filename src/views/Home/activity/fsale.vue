<template>
	<div class="addxuqu">
		<headt message='限时秒杀'></headt>
		<div class="a-d-d">
			<ul class="m-s-t">
				<li v-for='(item,index) in mlistd' @click="changestyle(index,item)" :class="{'actt':select==index}">
					<div class="d-t-m-e">
						<p v-if="item.status==2">
							<span>已结束</span>
							<span>{{item.end_time}}</span>
						</p>
						<p v-if="item.status==0">
							<span>即将开始</span>
							<span>{{item.start_time}}</span> 
						</p>
						<p v-if="item.status==1">
							<span >结束时间</span>
							<span>
								{{item.end_time}}
							</span> 
						</p>

					</div>

				</li>
			</ul>

			<div class="l-s-t-d">
				<ul class="xlist" v-if='mlist'>
					<li v-for='(item,index) in mlist'>
						<img :src="item.goods_cover" class="mimgs" alt="" />
						<div class="miao-l-r">
							<p class="mingc">{{item.goods_name}} </p>
							<p class="bili"><span class="bline"></span></p>
							<div class="mjia">
								<p>秒杀价：&yen;{{item.show_price}} <span class="yuanjia">&yen;{{item.old_price}}</span></p>
								<h3 class="zhenz" @click="mshaData(item.id)" v-if='statvd==1'>马上抢</h3>
								<h3 class="yijin"  v-if='statvd==2'>已结束</h3>
								<h3 class="yijin"  v-if='statvd==0'>敬请期待</h3>
								
								
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
	import { MkillList ,MkillInfoList} from '@/api/api'
	export default {
		data() {
			return {
				select: 0,
				mlistd: [],
				mlist: [],
				statvd:1
				
			}
		},
		components: {
			headt
		},
		mounted() {
			MkillList().then(res => {
				if(res.data.code == 200) {
					let mlistdt = res.data.data.time;
					let indext = mlistdt.findIndex(item => {
						return item.status == 1
					})
					console.log(indext)
					this.select = indext;
					this.mlistd = mlistdt;
					this.mlist = res.data.data.pro;
				}
			})
		},
		methods: {
			changestyle(index,infom) {
				this.select = index;
				this.statvd = infom.status
				let data ={
					status:infom.status,
					page:1,
					end_time:infom.end_time,
					start_time:infom.start_time
				}
				console.log(data)
				MkillInfoList(data).then(res=>{
					console.log(res)
					if(res.data.code ==200){
						this.mlist =res.data.data
					}
				})
			},
			mshaData(idt){
				this.$router.push('/home/msdetail/'+idt)
				
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
								.zhenz {
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
								.yijin {
									width: 160px;
									height: 58px;
									border: 2px solid #C1C1C1;
									border-radius: 29px;
									font-size: 26px;
									line-height: 58px;
									text-align: center;
									font-weight: 500;
									color: #ccc;
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
				width: 100%;
				display: inline;
				white-space: nowrap;
				overflow-x: scroll;
				float: left;
				overflow-y:hidden ;
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
							height: 90%;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
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