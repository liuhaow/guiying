<template>
	<div class="d-t-i-l">
		<headt :message='name'></headt>
		<div class="d-c-o-n">
			{{content}}
		</div>
			
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import { mapGetters, mapActions } from 'vuex'
	
	import { questiondetail} from '@/api/api'
	
	export default {
		data() {
			return {
				content:'' ,
				name:''
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
			let idt= this.$route.params.id
			let data={
				token:this.TokenId,
				problem_id:idt
				
			}
				questiondetail(data).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.name= res.data.data.name;
						this.content =res.data.data.content
					}
				})

		},
		methods: {
			xiangqingData(idt,cnt){
				console.log(idt,cnt)
				this.$router.push({ path: '/mine/qdetail/'+idt });
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.d-t-i-l {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		overflow: auto;
		.d-c-o-n{
			flex: 1;
			overflow: auto;
			background: #fff;
			padding-top: 20px;
			font-size: 28px;
			color: #333;
			line-height: 42px;
			text-indent: 15px;
			letter-spacing: 4px;
		}
	}
</style>