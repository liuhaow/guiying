<template>
	<div class="suoya">
		<headt message='资质证明'></headt>
		<div class="z-z-m">
			<ul>
				<li v-for='(item,index) in mlist' :key='index'>
				<img :src="item.image" alt="" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headt from '../../../components/heda' 
	import { zhiziZming } from '@/api/mine'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	export default {
		data() {
			return {
			mlist:[]
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
				token:this.TokenId
			}
			zhiziZming(data).then(res => {
				if(res.data.code == 200){
					this.mlist= res.data.data
				}
			})
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
					padding-top: 50px;
					background: #fff;
					display: flex;
					justify-content: center;
					img{
						width: 700px;
						height: 500px;
					}
				}
			}
		}
		
	}
</style>