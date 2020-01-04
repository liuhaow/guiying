<template>
	<div class="shenpt">
		<ul class='s-p-t'>
			<li>发票抬头</li>
			<li>申请时间</li>
		</ul>
		<ul class="s-p-l">
			<li v-for='(item,index) in shen' :key='index'>
				<div>
					<p>{{item.name}}</p>
					<h2>{{item.create_time}}</h2>
				</div>

			</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { fapiaokpInfo } from '@/api/mine'
	export default {
		data() {
			return {
				shen:[],
				
			}
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data={
				token:this.TokenId
			}
			fapiaokpInfo(data).then(res=>{
				console.log(res)
				if(res.data.code == 200){
					this.shen = res.data.data
				}
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.shenpt {
		.s-p-t {
			padding: 10px 20px;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			background: #fff;
			li {
				height: 100px;
				line-height: 100px;
				text-align: center;
				border-bottom: 2px solid #ddd;
			}
			li:nth-child(1) {
				width: 50%;
			}
			li:nth-child(2) {
				width: 50%;
			}
		}
		.s-p-l {
			height: 900px;
			overflow: auto;
			li {
				background: #fff;
				padding: 10px 20px;
				box-sizing: border-box;
				div {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 100px;
					border-bottom: 2px solid #ddd;
					p {
						width: 50%;
						text-align: center;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}
					h2 {
						width: 50%;
						text-align: center;
						font-size: 28px;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
				}
			}
		}
	}
</style>