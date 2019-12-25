<template>
	<div class="mor-t">
		<i slot="icon" class="icon iconfont " @click="back">&#xe60d;</i> {{message}}
	</div>
</template>

<script>
	export default {
		props: ['message'],
		data() {
			return {}
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.mor-t {
		height: 88px;
		position: relative;
		line-height: 88px;
		text-align: center;
		background: #fff;
		font-size: 36px;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
		margin-bottom: 2px;
		i {
			font-size: 34px;
			height: 88px;
			line-height: 88px;
			width: 80px;
			font-weight: 600;
			position: absolute;
			left: 0;
			text-align: center;
			color: #C1C1C1;
		}
	}
</style>