<template>
  <header class="bg-white">
    <div class="d-flex justify-content-between flex-wrap p-3 ">
      <div class="right-header  ">
        <nav class="navbar navbar-expand-lg  ">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <nuxt-link class="nav-link active" to="/">صفحه اصلی</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="authenticated ? 'notes' : 'login'">یادداشت ها</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="left-header ">
        <div class="d-flex">
          <nuxt-link v-if="!authenticated && isLoginRoute !== '/login'" to="/login">ورود به حساب کاربری</nuxt-link>

          <div class="d-flex align-items-center justify-content-between" v-if="authenticated">
            <span class="ms-2">{{ user.FullName }}</span>
            <button class="btn btn-outline-danger" @click="logout">
              خروج از حساب کاربری
            </button>
          </div>

        </div>
      </div>
    </div>


  </header>
</template>

<script lang="ts" setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from "~/store/auth";

const router = useRouter();
const route = useRoute();
const isLoginRoute = computed(() => {
  return route.path
});
const user = computed(() => {
  const text = localStorage.getItem('user');
  if (!text)
    return ''
  return JSON.parse(text)
})
const {logUserOut} = useAuthStore();
const {authenticated} = storeToRefs(useAuthStore());
const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>

<style scoped lang="scss">
header {
  //position: fixed;
  //top: 0;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

  }

  .loginBtn {
    background-color: #04aa6d;
  }

}

.navbar-nav {
  flex-direction: row !important;

  .nav-item {
    margin-left: 10px;
  }
}
</style>