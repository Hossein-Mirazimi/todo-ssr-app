import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const uuId = () => Math.random().toString(16).slice(2)

const DEFAULT_COLLECTIONS = [
  {
    id: uuId(),
    name: 'Today Tasks',
  },
]

export const useTodoStore = defineStore('todo', () => {
  const collections = ref(DEFAULT_COLLECTIONS)

  const getCollections = computed(() => collections.value)

  return {
    getCollections,
  }
})
