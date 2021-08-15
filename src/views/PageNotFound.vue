<template>
	<div class="page-not-found">
		<div class="text-center">
			<h1 class="title-404">404</h1>
			<div class="sub-title-404">
				Page not found!
			</div>
			<p class="desc-404">
				Sorry, the page you requested could not be found.
			</p>

			<div class="navigation-buttons">
				<el-button type="primary" @click="goBack" icon="el-icon-back" plain>Back</el-button>
				<el-button type="primary" @click="goHome" plain>
					<i class="fa fa-home"></i>
					<span>Home</span>
				</el-button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'PageNotFound',
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-not-found{
	align-items: center;
  background-color: #FBFBFB;
  width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 100px 0;
	.text-center{
		text-align: center;
	}

	.title-404 {
		font-size: 70px;
		font-weight: bold;
		margin-bottom: 40px;
	}

	.sub-title-404 {
		font-size: 50px;
		line-height: 1em;
		font-weight: 300;
		color: #111;
		margin-bottom: 30px;
	}

	.desc-404 {
		margin-bottom: 50px;
	}
}
</style>
