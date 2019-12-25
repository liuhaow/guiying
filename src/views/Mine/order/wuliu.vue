<template>
	<div class="wuliu">
		<headt message='物流信息'></headt>
		<div class="wu-l">
			<van-steps direction="vertical" :active="0">
				<van-step>
					<h3>【城市】物流状态1</h3>
					<p>2016-07-12 12:40</p>
				</van-step>
				<van-step>
					<h3>【城市】物流状态2</h3>
					<p>2016-07-11 10:00</p>
				</van-step>
				<van-step>
					<h3>快件已发货</h3>
					<p>2016-07-10 09:30</p>
				</van-step>
				<van-step>
					<h3>【城市】物流状态1</h3>
					<p>2016-07-12 12:40</p>
				</van-step>
				<van-step>
					<h3>【城市】物流状态2</h3>
					<p>2016-07-11 10:00</p>
				</van-step>
				<van-step>
					<h3>快件已发货</h3>
					<p>2016-07-10 09:30</p>
				</van-step>
			</van-steps>
		</div>
		<baokuan message='猜您喜欢'></baokuan>
	</div>
</template>

<script>
	import headt from '@/components/heda'
	import baokuan from '@/components/baokuan'

	export default {
		data() {
			return {
				active: 0
			}
		},
		components: {
			headt,
			baokuan
		},
	}
</script>

<style scoped lang="stylus">
	.wuliu {
		height: 100%;
		overflow: auto;
		.wu-l{
			min-height: 500px;
			background: #fff;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			
		}
	}
</style>