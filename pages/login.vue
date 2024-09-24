<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <form @submit.prevent="login" class="p-5">
      <div class="input-group ">
        <label for="username ">نام کاربری</label>
        <input class="form-control w-100 mt-1"
               v-model="loginForm.username"
               required type="text"
               placeholder="لطفا نام کاربری را وارد کنید"
               id="username"/>
      </div>
      <div class="input-group mt-3">
        <label for="password">کلمه عبور</label>
        <input class="form-control w-100 mt-1"
               v-model="loginForm.password"
               required
               type="password"
               placeholder="لطفا رمز عبور را وارد کنید"
               id="password"/>
      </div>

      <button class="btn btn-primary w-100 mt-5" type="submit">ورود</button>
    </form>
  </div>

</template>

<script lang="ts" setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from "~/store/auth";

const router = useRouter();

interface LoginForm {
  username: string;
  password: string;
}

let loginForm = ref<LoginForm>({
  username: "12345678910",
  password: "123456"
});
const {authenticateUser} = useAuthStore();
const {authenticated} = storeToRefs(useAuthStore());
const login = async () => {
  await authenticateUser(loginForm.value);
  console.log(authenticated)
  if (authenticated.value) {
    router.push('/');
  }
}
</script>

<style scoped>

</style>