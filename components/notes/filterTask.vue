<template>
<div class="d-flex justify-content-between align-items-center  border-top">
  <div class="mt-3">
    <span>تسک مانده</span>
    <span>{{taskCount}}</span>
  </div>
  <div class="d-flex align-items-center h-100 mt-3">
    <a class="link-secondary " @click="onChange(1)">همه</a>
    <a class="link-secondary  mx-3" @click="onChange(2)">تکمیل نشده ها</a>
    <a class="link-secondary " @click="onChange(3)">تکمیل شده ها</a>
  </div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  taskCount: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['filterChange'])

const onChange = (e:number) => {
  emit('filterChange',e);
}
</script>

<style scoped>
a{
  text-decoration: none;
  cursor: pointer;
}
</style>