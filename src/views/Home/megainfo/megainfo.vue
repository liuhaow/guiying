<template>
	<div class="addxuqu">
		<headt message='消息中心'></headt>
		<div class="a-d-d">
			<ul>
				<li v-for='(item,index) in mlist' :key='index' @click="detailData(item.content)">
					<div class="m-s-a-t">
						公告
					</div>
					<div class="m-s-a-f">
						<h2>{{item.title}}</h2>
						<h4>{{item.create_time}}</h4>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { indexmessage } from '@/api/api'
	import { Notify } from 'vant';

	export default {
		data() {
			return {
				mlist: []
			}
		},
		components: {
			headt
		},
		mounted() {
			let data = {
				page: 1
			}
			indexmessage(data).then(res => {
				if(res.data.code == 200) {
					this.mlist = res.data.data.notice
				} else {
					Notify({
						type: 'warning',
						message: res.data.msg
					});
				}
			})
		},
		methods: {
			detailData(idt) {
				this.$router.push({
					path: '/home/mgeList',
					query: {
						contd: idt
					}
				})

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
		padding-bottom: 30px;
		box-sizing: border-box;
		overflow: auto;
		.a-d-d {
			flex: 1;
			overflow: auto;
			ul {
				li {
					width: 95%;
					height: 200px;
					background: #fff;
					padding-top: 20px;
					padding-bottom: 30px;
					margin: 20px auto 0;
					border-radius: 8px;
					display: flex;
					.m-s-a-t {
						width: 65px;
						height: 26px;
						background: linear-gradient(90deg, rgba(63, 185, 77, 1), rgba(110, 202, 115, 1));
						font-size: 22px;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
					}
					.m-s-a-f {
						height: 100%;
						width: 70%;
						display: flex;
						justify-content: space-between;
						margin-left: 27px;
						flex-direction: column;
						h2 {
							font-size: 30px;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);
						}
						h3 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 400;
							line-height: 36px;
							color: rgba(51, 51, 51, 1);
						}
						h4 {
							font-size: 26px;
							font-family: PingFang SC;
							font-weight: 400;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}
	}
</style>