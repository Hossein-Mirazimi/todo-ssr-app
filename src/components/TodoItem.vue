<template>
  <div class="relative flex items-center justify-start p-3 group rounded-2xl bg-primary-card">
    <button
      v-if="!task.isCompleted"
      class="default-focus border-3 focus:outline-none bg-opacity-0 hover:bg-opacity-40 px-2 py-2 transition-colors duration-100 ease-in-out rounded-lg"
      style="border-color: rgb(255, 255, 255);"
      @click="updateIsCompleteTask(task.id)"
    ></button>
    <button
      v-else
      class="default-focus text-primary-background hover:bg-opacity-50 focus:outline-none flex justify-center items-center transition-colors duration-100 ease-in-out rounded-lg"
      style="height:22px;min-width:22px;border-color:rgb(255, 255, 51);background-color:rgb(255, 255, 51);"
      @click="updateIsCompleteTask(task.id)"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 20 20"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        data-v-91ec745a=""
      >
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-91ec745a=""></path>
      </svg>
    </button>
    <p class="pr-8 ml-3 text-white" :class="{'line-through': task.isCompleted}">
      {{ task.name }}
    </p>
    <div class="focus:outline-none absolute right-0 mr-2 rounded-lg">
      <div class="relative flex text-left">
        <button
          class="default-focus hover:opacity-100 z-10 p-2 transition-opacity duration-200 ease-in-out rounded-lg opacity-50"
          @click="showMenu = !showMenu"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
        <div
          class="origin-top-right absolute right-0 top-5 z-50 mt-2 w-56 rounded-md shadow-lg bg-secondary-background ring-1 ring-black ring-opacity-5 divide-y divide-primary-background"
          :class="{ 'invisible': !showMenu }"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div v-if="!task.isCompleted" class="py-1">
            <button
              class="default-focus hover:bg-secondary-card flex w-full px-4 py-2 text-sm text-left text-gray-200"
              role="menuitem"
            >
              <div class="default-focus flex flex-row w-full text-left text-white">
                Edit
              </div>
            </button>
          </div>
          <div class="py-1">
            <button
              class="default-focus hover:bg-secondary-card block w-full px-4 py-2 text-sm text-left text-gray-200"
              role="menuitem"
              @click="removeTask"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import type { Task } from '../store/todo'
import { useTodoStore } from '../store/todo'

const { task } = defineProps<{ task: Task }>()

const { updateIsCompleteTask, removeTaskFromCollection } = useTodoStore()

const showMenu = ref(false)

const removeTask = () => {
  removeTaskFromCollection(task.id)
  showMenu.value = false
}
</script>
