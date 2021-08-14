<template>
  <div class="home-module">
    <el-button type="text" class="sign-out-btn" @click="handleSignOut">Sign out</el-button>
    <template v-if="isAuthenticated">
      <admin-home v-if="isAdmin"></admin-home>
      <user-home v-else></user-home>
    </template>
  </div>
</template>

<script>
import AdminHome from './components/AdminHome'
import UserHome from './components/UserHome'
export default {
  name: 'HomeModule',
  components: {
    AdminHome,
    UserHome
  },
  data () {
    return  {
      isAuthenticated: false
    }
  },
  computed: {
    isAdmin () {
      return this.$route?.query?.role === 'admin'
    }
    
  },
  created() {
    this.validateLoggedInUser()
  },
  methods: {
    validateLoggedInUser () {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(!loggedInUser) {
        this.$router.replace('/login')
      }
      this.isAuthenticated = loggedInUser
    },
    handleSignOut () {
      localStorage.removeItem('loggedInUser')
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-module {
    width: 100%;
    height: 100%;
    .sign-out-btn {
      position: absolute;
      top: 0;
      right: 1rem;
    }
  }
</style>