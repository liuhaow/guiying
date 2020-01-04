<template>
	<div class="addxuqu">
		<headt message='消息详情'></headt>
		<div class="a-d-d">
				{{contenct}}
		</div>

	</div>
</template>

<script>
	import headt from '@/components/heda'
	export default {
		data() {
			return {
				contenct:''
			}
		},
		components: {
			headt
		},
		mounted(){
			this.contenct = this.$route.query.contd;

		},
		methods: {


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
			margin-top: 20px;
			padding:20px;
			box-sizing: border-box;
			font-size: 32px;
			letter-spacing: 3px;
			text-indent: 20px;

		}
	}
</style>