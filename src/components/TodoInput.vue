<template>
  <form class="css-0" @submit.prevent="submit">
    <div role="group" class="chakra-form-control css-zn965q">
      <label
        id="field-6-label"
        for="todo"
        class="chakra-form__label css-vucjec"
      >
        <div
          class="border-primary-card group hover:border-secondary-card rounded-2xl border-3 flex items-center w-full"
          style="padding: 10px;"
        >
          <button
            type="submit"
            class="default-focus text-primary-background text-center flex justify-center items-center mr-3 text-base transition-colors duration-100 ease-in-out rounded-lg"
            style="height: 22px; width: 23px; border-color: rgb(51, 50, 35); background-color: rgb(51, 50, 35);"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
          </button>
          <input
            id="name"
            v-model="taskName"
            class="w-full bg-transparent rounded-md outline-none"
            name="name"
            type="name"
            placeholder="Add task"
            required=""
          >
        </div>
      </label>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['sumbit-task'],
  setup(_, { emit }) {
    const taskName = ref('')
    const submit = () => {
      emit('sumbit-task', taskName.value)
      taskName.value = ''
    }
    return { taskName, submit }
  },
})

</script>
