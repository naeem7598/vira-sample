<template>
  <div class="vh-100" style="background-color: #F1F3F6;">
    <Loading/>
    <Header></Header>
    <div class="mainContent ">
      <slot/>
    </div>

  </div>
</template>

<script setup lang="ts">

import Header from "@/components/header.vue";
import Loading from "@/components/Loading.vue";


</script>
<style lang="scss">

.mainContent {
  padding: 20px;
  height: 100%;
}

</style>