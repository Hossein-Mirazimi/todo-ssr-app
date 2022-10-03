import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { uuId, sentence, randBool, randomNumberBetween } from '../utils'

const DEFAULT_COLLECTIONS = [
  {
    id: uuId(),
    name: 'Today Tasks',
  },
  {
    id: uuId(),
    name: 'Tomorrow Tasks',
  },
]

const DEFAULT_TASKS = DEFAULT_COLLECTIONS.map(({ id: collectionId }) => {
  const arrLen = randomNumberBetween(1, 10)
  return Array(arrLen).fill(null).map(() => ({
    id: collectionId,
    name: sentence(),
    isCompleted: randBool(),
  }))
}).flat()

export const useTodoStore = defineStore('todo', () => {
  const collections = ref(DEFAULT_COLLECTIONS)
  const tasks = ref(DEFAULT_TASKS)

  const getCollections = computed(() => collections.value)
  const getTasks = computed(() => tasks.value)

  const getTaskFromCollection = (id: string) => getTasks.value?.filter(task => task.id === id)

  return {
    getTasks,
    getCollections,
    getTaskFromCollection,
  }
})
