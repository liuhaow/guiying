<template>
	<div class="jiany">
		<headt message='退押金'></headt>
		<div class="jiany-l">
			<ul>
				<li v-for='(item,index) in list' :key='index'>
					<div class="j-t">
						<h2>{{item.create_time}}</h2>
						<h3>有押金</h3>
					</div>
					<div class="j-n">
						<ul>
							<li >
								<img v-for='(idt ,indx) in item.pro' :src="idt.cover" />
							</li>
						</ul>
						<h2>查看全部》</h2>
					</div>
					<div class="j-f">
						<button @click="shengqingData(item.id,item.deposit)">可退{{item.deposit}}</button>
					</div>
				</li>
			</ul>
		</div>
		<!--<mt-cell title='标题' is-link></mt-cell>-->
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	import { mapGetters, mapActions } from 'vuex'
	import { jinayiListInfo } from '@/api/mine'
	export default {
		data() {
			return {
				select: 2,
				chd: 2,
				list: []
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
			let data={
				token:this.TokenId,
				page:1,
				type:1
			}
			jinayiListInfo(data).then(res=>{
				console.log(res)
				if(res.data.code==200){
					this.list=res.data.data
				}
			})
		},
		methods: {
			shengqingData(idt,dept) {
				var that = this
				that.$router.push({
					path:'/mine/sqing',
					query:{
						id:idt,
						dept:dept
						
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.jiany {
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
		.jiany-l {
			ul {
				li {
					margin-bottom: 15px;
					div {
						padding: 0 36px 0 40px;
						box-sizing: border-box;
					}
					.j-t {
						display: flex;
						height: 80px;
						align-items: center;
						padding: 0 36px 0 40px;
						justify-content: space-between;
						background: #FFFFFF;
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1);
						}
						h3 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(8, 194, 26, 1);
						}
					}
					.j-n {
						height: 260px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						ul {
							li {
								margin: 0!important;
								img {
									height: 150px;
									width: 150px;
									margin-right: 20px;
								}
							}
						}
						h2 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(51, 51, 51, 1)
						}
					}
					.j-f {
						width: 100%;
						height: 120px;
						background: rgba(255, 255, 255, 1);
						display: flex;
						justify-content: flex-end;
						align-items: center;
						border-radius: 8px;
						button {
							width: 200px;
							height: 56px;
							border: 0;
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 500;
							color: rgba(255, 255, 255, 1);
							background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
							border-radius: 28px;
						}
					}
				}
			}
		}
	}
</style>