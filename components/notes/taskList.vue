<template>
  <div class="overflow-y-scroll " style="height: 300px">
    <template v-if="items.length > 0">
      <div class="list-item mt-3" v-for="item of listItem">
        <div class="">
          <input class="form-check-input ms-3" type="checkbox" v-model="item.isComplete" @change="onChange(item)">
          <label class="form-check-label fs-5">{{ item.title }}</label>
        </div>
        <div class="deleteIcon">
          <button class="btn" @click="deleteItem(item.title)">
            <img width="20" height="20" src="public/img/delete-icon.svg">
          </button>
        </div>
      </div>
    </template>
    <div class="d-flex justify-content-center " v-else>
      <span class="p-5 text-secondary fs-4">یادداشتی وجود ندارد</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {TaskDto} from "@/core/model/taskDto";

const props = defineProps({
  items: {
    type: Array < TaskDto >,
    default: () => []
  }
});
const listItem = computed<Array<TaskDto>>(() => {
  return props.items;
})
const emit = defineEmits(['update', 'deleteItem']);
const onChange = (item: TaskDto) => {
  emit('update', item);
}
const deleteItem = (item: string) => {
  emit('deleteItem', item);
}
</script>

<style scoped lang="scss">
input[type="checkbox"] {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border-color: black;
}

.form-check .form-check-input {
  float: right !important;
}

.list-item {
  display: flex;
  justify-content: space-between;
}

.deleteIcon {
  display: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #000000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

}


.list-item:hover {
  .deleteIcon {
    display: block;
  }
}

</style>