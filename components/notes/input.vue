<template>
  <div class="input-container">

    <input v-model="inputValue" type="text" placeholder="متن خود را تایپ نمایید..." class="input-with-icon"
           @keyup.enter="onchange"/>
    <span class="input-icon" >
      <img src="public/img/Frame.svg">
  </span>
    <button class="btn plus-icon" v-if="inputValue" @click="onchange">
      <img width="20" height="20" src="public/img/plus-icon.svg">
    </button>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['change']);
const inputValue = ref<string>('');
const onchange = () => {
  emit('change', inputValue.value);
  inputValue.value = '';
}
</script>

<style scoped>
.input-container {
  position: relative;
  /*width: 300px;*/
  margin: 0 auto;
}


.input-with-icon {
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 2px solid #007bff;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}


.input-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}
.plus-icon{
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #000000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
button {

}
.icon {
  width: 20px;
  height: 20px;
  fill: #007bff;
}

</style>