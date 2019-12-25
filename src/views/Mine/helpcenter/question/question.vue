<template>
	<div class="addxuqu">
		<headt message='常见问题'></headt>
		<div class="a-d-d">
			<ul>
				<li v-for='(item,index) in fileList' :key='index'>
					<p class="tit-l">{{item.name}}</p>

					<h2 v-for="(idtd) in item.son " >
						<span>{{idtd.name}}</span> 
						<i slot="icon" class="icon iconfont " @click="xiangqingData(idtd.id)">&#xe644;</i>
						
					</h2>
				</li>
			</ul>
			<div class="f-t-e-r">
				<div class="">
					<h2> 网站链接：</h2>
					<h2>http://www.51yuansu.com/ </h2>
				</div>
				<div class="">
					<h2> 网站链接：</h2>
					<h2>http://www.51yuansu.com/ </h2>

				</div>
				<div class="">
					<h2> 网站链接：</h2>
					<h2>http://www.51yuansu.com/ </h2>

				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { questiondata } from '@/api/api'
	export default {
		data() {
			return {
				fileList: []
			}
		},
		components: {
			headt
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data = {
				token: this.TokenId
			}
			questiondata(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					this.fileList = res.data.data
				}
			})

		},
		methods: {
			xiangqingData(idt) {
				this.$router.push({
					path: '/mine/qdetail/' + idt
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
		box-sizing: border-box;
		overflow: auto;
		.a-d-d {
			flex: 1;
			overflow: auto;
			background: #fff;
			.f-t-e-r {
				padding-bottom: 100px;
				div {
					display: flex;
					padding-left: 20px;
					box-sizing: border-box;
					h2 {
						font-size: 28px;
						font-family: PingFang SC;
						margin-bottom: 20px;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
					}
				}
			}
			ul {
				li {
					margin-bottom: 20px;
					.tit-l {
						height: 88px;
						line-height: 88px;
						padding: 0 20px;
						box-sizing: border-box;
						font-size: 30px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
					h2 {
						height: 120px;
						line-height: 120px;
						border-bottom: 2px solid #ccc;
						padding: 0 20px;
						box-sizing: border-box;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						display: flex;
						justify-content: space-between;
						align-items: center;
						i {
							font-size: 34px;
							height: 98px;
							line-height: 90px;
							width: 60px;
							font-weight: 500;
							text-align: center;
							color: #C1C1C1;
						}
					}
				}
			}
		}
	}
</style>