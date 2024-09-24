<template>
  <div class="loading-parent" v-if="isLoading">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/store/auth";
import {storeToRefs} from "pinia";
const {loading} = storeToRefs(useAuthStore());
const isLoading = computed(() => {
  return loading.value
});

</script>

<style scoped lang="scss">

.loading-parent {
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 20000;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);
}

.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}

</style>