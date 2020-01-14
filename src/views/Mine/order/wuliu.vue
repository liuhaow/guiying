<template>
	<div class="wuliu">
		<headt message='物流信息'></headt>
		<div class="alllike">
			<div class="wu-l">
				<van-steps direction="vertical" :active="0">
					<van-step v-for='(item,index) in wuliu' :key='index'>
						<h3 v-if="item.status==0">已接单</h3>
						<h3 v-if="item.status==1">等待揽收</h3>
						<h3 v-if="item.status==2">配送员已接单</h3>
						<h3 v-if="item.status==3">配送中</h3>
						<h3 v-if="item.status==4">已送达</h3>
						<p>{{item.time}}</p>
					</van-step>
				</van-steps>
			</div>
			<baokuan message='猜您喜欢'></baokuan>
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	import baokuan from '@/components/baokuan'
	import { mapGetters, mapActions } from 'vuex'
	import { Notify } from 'vant';
	import { Wuliudata } from '@/api/mine'
	export default {
		data() {
			return {
				active: 0,
				wuliu: []
			}
		},
		components: {
			headt,
			baokuan
		},
		computed: {
			...mapGetters({
				TokenId: 'TokenId'
			})
		},
		mounted() {
			let data = {
				token: this.TokenId,
				order_id: this.$route.params.id
			}
			console.log(data)
			Wuliudata(data).then(res => {
				console.log(res)
				if(res.data.code == 200) {
					Notify({
							type: 'success',
							message: res.data.msg
						});
					this.wuliu = res.data.data
				}else {
						Notify({
							type: 'warning',
							message: res.data.msg
						});

					}
			})
		}
	}
</script>

<style scoped lang="stylus">
	.wuliu {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		
		overflow: auto;
		.alllike{
			flex: 1;
			overflow: auto;
		}
		.wu-l {
			background: #fff;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
		}
	}
</style>