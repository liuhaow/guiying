<template>
	<div class="tuan">
		<div class="xmiao">
			<p>今日团购</p>
			<h2 @click="moreData">更多</h2>
		</div>
		<div class="tlist">
			<ul class="tlist-u">
				<li v-for='(item,index) in tlist' >
					<img :src="item.img" class="mimgs" alt="" @click="mshaData(1)" />
					<p class="tutile">{{item.title}}</p>
					<div class="tu-f">
						<p>
							<span class="tgj">团购价</span>
							<span>&yen;9.9</span>
						</p>
						<h2></h2>
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
				tlist: [{

						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水 ',
						miaos: '90',
						yu: '109'
					},
					{
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',

						title: '兴业馆广西皇帝柑贡柑新鲜水果 ',
						miaos: '90',
						yu: '109'
					},
					{
						img: 'http://img1.imgtn.bdimg.com/it/u=4119692727,446131490&fm=11&gp=0.jpg',
						title: '兴业馆广西皇帝柑贡柑新鲜水果  ',
						miaos: '90',
						yu: '109'
					}
				]
			}

		},
		methods:{
			moreData() {
				this.$router.push('/group')

			},
			mshaData(){
				this.$router.push('/home/pintuan/2')
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tuan {
		height: 516px;
		width: 100%;
		background: #fff;
		padding: 0 20px;
		box-sizing: border-box;
		.tlist {
			.tlist-u {
				width: 100%;
				display: flex;
				justify-content: space-between;
				li {
					width: 222px;
					.mimgs {
						width: 222px;
						height: 222px;
					}
					.tutile {
						font-size: 24px;
						font-family: PingFang SC;
						font-weight: 500;

						color: rgba(51, 51, 51, 1);
						line-height: 30px;
						margin: 27px 0 18px;
					}
					.tu-f {
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						p {
							display: flex;
							flex-direction: column;
							width: 140px;
							.tgj {
								width: 140px;
								height: 20px;
								display: block;
								margin-bottom: 6px;
								font-size: 16px!important;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(255, 101, 1, 1);
							}
							span {
								font-size: 48px;
								font-family: PingFang SC;
								font-weight: 500;
								color: rgba(255, 101, 1, 1);
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
		.xmiao {
			height: 80px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p {
				font-size: 36px;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
			h2 {
				font-size: 30px;
				font-weight: 500;
				color: rgba(63, 185, 77, 1);
				height: 100%;
				display: flex;
				align-items: center;
				padding: 0 20px;
			}
		}
	}
</style>