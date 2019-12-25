<template>
	<div class="navlist">
		<mt-navbar v-model="selected">
			<mt-tab-item id="1" class='quanbu'>全部</mt-tab-item>
			<mt-tab-item id="2">新鲜蔬菜</mt-tab-item>
			<mt-tab-item id="3">肉禽蛋品 </mt-tab-item>
			<mt-tab-item id="4">粮油米面</mt-tab-item>
			<mt-tab-item id="5">酒水饮料</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<ul class="nav-mian">
					<li v-for="(item,index) in tlist">
						<div class="nav-l"><img :src="item.cover" alt="" /></div>
						<div class="nav-r">
							<p class="nav-title">{{item.title}}</p>
							<div class="nav-z-k">
								<p><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
								<h2></h2>
							</div>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<ul class="nav-mian">
					<li v-for="(item,index) in tlist">
						<div class="nav-l"><img :src="item.cover" alt="" /></div>
						<div class="nav-r">
							<p class="nav-title">{{item.title}}</p>
							<div class="nav-z-k">
								<p><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
								<h2></h2>
							</div>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<ul class="nav-mian">
					<li v-for="(item,index) in tlist">
						<div class="nav-l"><img :src="item.cover" alt="" /></div>
						<div class="nav-r">
							<p class="nav-title">{{item.title}}</p>
							<div class="nav-z-k">
								<p><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
								<h2></h2>
							</div>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<ul class="nav-mian">
					<li v-for="(item,index) in tlist">
						<div class="nav-l"><img :src="item.cover" alt="" /></div>
						<div class="nav-r">
							<p class="nav-title">{{item.title}}</p>
							<div class="nav-z-k">
								<p><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
								<h2></h2>
							</div>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
			<mt-tab-container-item id="5">
				<ul class="nav-mian">
					<li v-for="(item,index) in tlist">
						<div class="nav-l"><img :src="item.cover" alt="" /></div>
						<div class="nav-r">
							<p class="nav-title">{{item.title}}</p>
							<div class="nav-z-k">
								<p><span class="zh-j">&yen;{{item.now_price}}</span><span class="yu-j">&yen;{{item.old_price}}</span></p>
								<h2></h2>
							</div>
						</div>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	import { shangpingData} from '@/api/api'
	
	export default {
		data() {
			return {
				active: true,
				selected: '1',
				tlist: []
			}
		},
		mounted() {
			let data={
				type:0,
				page:1
			}
			shangpingData(data).then(res=>{
				console.log(res)
				if(res.data.code == 200){
					this.tlist = res.data.data
				}
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.navlist {
		width: 100%;
		min-height: 900px;
		background: #fff;
		.mint-navbar {
			height: 100px;
			background: #fff;
			display: flex;
			.mint-tab-item {
				padding: 0!important;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30px;
				.mint-tab-item-label {
					color: #333;
				}
			}
		}
		.mint-tab-container {
			margin-top: 30px;
		}
		.nav-mian {
			li {
				display: flex;
				height: 173px;
				margin-bottom: 20px;
				.nav-l {
					width: 250px;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						height: 150px;
						width: 150px;
					}
				}
				.nav-r {
					width: 500px;
					height: 170px;
					border-bottom: 2px solid #f5f5f5;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.nav-title {
						font-size: 24px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						margin-bottom: 32px;
					}
					.nav-z-k {
						display: flex;
						justify-content: space-between;
						padding-right: 28px;
						box-sizing: border-box;
						p {
							.zh-j {
								color: #ff6501;
								font-size: 36px;
							}
							.yu-j {
								font-size: 26px;
								margin-left: 20px;
								font-weight: 500;
								text-decoration: line-through;
								color: #C1C1C1!important;
							}
						}
						h2 {
							width: 48px;
							height: 48px;
							background: linear-gradient(-36deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
							border-radius: 50%;
						}
					}
				}
			}
		}
	}
</style>