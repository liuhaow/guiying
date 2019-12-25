<template>
	<div class="suoya">
		<headt message='资质证明'></headt>
		<div class="z-z-m">
			<ul>
				<li v-for='(item,index) in 10'><img src="https://img.yzcdn.cn/vant/leaf.jpg" alt="" /></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headt from '../../../components/heda'
	export default {
		data() {
			return {}
		},
		components: {
			headt
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.suoya {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;

		box-sizing: border-box;
		overflow: auto;
		.z-z-m{
			height:100%;
			overflow: auto;
			padding-bottom: 20px;
			background: #fff;
			ul{
				li{
					width:100%;
					padding-top: 120px;
					background: #fff;
					display: flex;
					justify-content: center;
					img{
						width: 700px;
						height: auto;
					}
				}
			}
		}
		
	}
</style>