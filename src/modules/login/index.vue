<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginFormData"
      class="login-form"
      :rules="loginFormRules"
      label-width="100px"
    >
      <div class="form-logo"></div>
      <el-form-item label="User Name" prop="userName">
        <el-input v-model="loginFormData.userName"/>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginFormData.password" show-password/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="primary-btn" @click="handleLogin" :loading="isLoading">Log in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import $http from '@/services/httpClient'
export default {
  name: 'LoginModule',
  data () {
    return {
      isLoading: false,
      loginFormData: {
        userName: '',
        password: ''
      },
      loginFormRules: {
        userName: [
          { required: true, min: 6, max: 10, message: 'Please enter a valid user name between 6 to 10 characters' }
        ],
        password: [
          { required: true, min: 6, max: 10, message: 'Please enter a valid password between 6 to 10 characters' }
        ]
        
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        await this.$refs.loginForm.validate()
        this.login()
      } catch (error) {}
    },
    login () {
      setTimeout(() => {
        localStorage.setItem('loggedInUser', this.loginFormData.userName)
        this.$router.replace('/home')
      },2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  background: #0C365A;
  .login-form {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 45%;
    left: 45%;
    margin: -150px 0 0 -150px;
    background: #fff;
    border-radius: 16px;
    padding: 30px 60px 20px;
    .form-logo {
      mask: url(/img/logo.svg) no-repeat center;
      width: auto;
      height: 50px;
      background: green;
      padding-bottom: 30px;
    }
    &.el-form {
      .el-form-item {
        margin-bottom: 40px;
      }
    }
    .primary-btn {
      margin: 1rem 30%;
    }
  }
}

</style>