<template>
<div class="d-flex justify-content-between  border-bottom" >
  <button class="btn" style="color:  #999999;" @click="complete">
    <img src="public/img/check-icon.svg">
    <span>تکمیل همه تسک ها</span>
  </button>
  <button class="btn" style="color:  #999999;" @click="deleteAll">
    <span>حذف تکمیل‌شده‌ها</span>
  </button>
</div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['completeAll','deleteAll']);
const complete = () => {
  emit('completeAll');
}
const deleteAll = () => {
  emit('deleteAll');
}
</script>

<style scoped>

</style>