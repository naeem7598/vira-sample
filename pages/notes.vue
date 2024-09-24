<template>
  <div class="h-100 w-100 d-flex justify-content-center align-items-center">
    <div class="col-12 col-sm-4">
      <div class="card shadow-lg" style="border: none">
        <div class="card-body ">
          <div class="p-3">
            <Input @change="addTask"/>
            <div class="my-4">
              <ActionTask @completeAll="completeAllTask" @deleteAll="deleteCompleted"></ActionTask>
            </div>
            <TaskList :items="filteredList" @update="updateList" @deleteItem="deleteItemList"></TaskList>
            <div class="mt-4">
              <FilterTask @filterChange="filterListChange" :task-count="unCompletedCount"></FilterTask>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import Input from "../components/notes/input.vue";
import ActionTask from "../components/notes/actionTask.vue";
import TaskList from "../components/notes/taskList.vue";
import FilterTask from "../components/notes/filterTask.vue";
import type {TaskDto} from "@/core/model/taskDto";
import {storeToRefs} from "pinia";
import {notesStore} from "~/store/notes";

const {addItem, deleteItem,completeAll,updateItem,deleteAllCompleted, getItems} = notesStore();
const {items} = storeToRefs(notesStore());

const taskList = ref<Array<TaskDto>>(getItems);

const selectedFilter = ref<number>(1);
const filteredList = computed(() => {
  if (selectedFilter.value === 3)
    return taskList.value.filter(x => x.isComplete);
  else if (selectedFilter.value === 2)
    return taskList.value.filter(x => !x.isComplete);
  else
    return taskList.value;
});

const unCompletedCount = computed<number>(() => {
  return taskList.value.filter(x => !x.isComplete).length;
});

const addTask = (value: string) => {
  if (value) {
    const task: TaskDto = {title: value, isComplete: false};
    addItem(task);
  }
}
const completeAllTask= () => {
  completeAll();
}
const updateList = (task: TaskDto) => {
  updateItem(task);
}
const deleteCompleted = () => {
  deleteAllCompleted();
}
const filterListChange = (e: number) => {
  selectedFilter.value = e;
}
const deleteItemList = (taskTitle: string) => {
  deleteItem(taskTitle);
}

</script>

<style scoped>

</style>