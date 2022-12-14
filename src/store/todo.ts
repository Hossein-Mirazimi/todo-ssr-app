import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { uuId, sentence, randBool, randomNumberBetween } from '../utils'

export interface Task {
  collectionId: string
  id: string
  name: string
  isCompleted: boolean
}

const COLLECTION_COLORS = [
  '#FC76A1',
  '#DBBE56',
  '#E39264',
  '#D25A61',
  '#AE68E6',
  '#70C4BF',
  '#9E7F72',
]

const DEFAULT_COLLECTIONS = [
  {
    id: uuId(),
    name: 'Today Tasks',
    theme: COLLECTION_COLORS[randomNumberBetween(1, COLLECTION_COLORS.length) - 1],
  },
  {
    id: uuId(),
    name: 'Tomorrow Tasks',
    theme: COLLECTION_COLORS[randomNumberBetween(1, COLLECTION_COLORS.length) - 1],
  },
]

const DEFAULT_TASKS: Task[] = DEFAULT_COLLECTIONS.map(({ id: collectionId }) => {
  const arrLen = randomNumberBetween(1, 10)
  return Array(arrLen).fill(null).map(() => ({
    collectionId,
    id: uuId(),
    name: sentence(),
    isCompleted: randBool(),
  }))
}).flat()

const arrLen = randomNumberBetween(1, 10)
Array(arrLen).fill(null).forEach(() => {
  DEFAULT_TASKS.push({
    collectionId: '760bc024b4b7d',
    id: uuId(),
    name: sentence(),
    isCompleted: randBool(),
  })
})

export const useTodoStore = defineStore('todo', () => {
  const collections = ref(DEFAULT_COLLECTIONS)
  const tasks = ref(DEFAULT_TASKS)

  const getCollections = computed(() => collections.value)
  const getTasks = computed(() => tasks.value)

  const getCollection = (collectionId: string) => collections.value.find(collection => collection.id === collectionId)

  const getTaskFromCollection = (collectionId: string): Task[] => getTasks.value?.filter(task => task.collectionId === collectionId)
  const getCompletedTaskFromCollection = (collectionId: string): Task[] => getTasks.value?.filter(task => task.collectionId === collectionId && task.isCompleted)
  const getTodoTaskFromCollection = (collectionId: string): Task[] => getTasks.value?.filter(task => task.collectionId === collectionId && !task.isCompleted)

  const addNewTask = (name: string, collectionId: string): void => {
    tasks.value.push({
      collectionId,
      id: uuId(),
      name,
      isCompleted: false,
    })
  }

  // @ts-ignore
  const updateIsCompleteTask = (taskId: string, defaultIsCompleted?: boolean = undefined): void => {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId)
    console.log(taskIndex)
    if (taskIndex >= 0) {
      const _task = tasks.value[taskIndex]
      console.log(_task)
      tasks.value?.splice(taskIndex, 1, {
        ..._task,
        isCompleted: defaultIsCompleted !== undefined ? defaultIsCompleted : !_task.isCompleted,
      })
      console.log('task updated')
    }
  }

  const removeTaskFromCollection = (taskId: string): void => {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId)
    taskIndex >= 0 && tasks.value.splice(taskIndex, 1)
  }
  return {
    getTasks,
    getCollections,
    addNewTask,
    updateIsCompleteTask,
    removeTaskFromCollection,
    getCollection,
    getTaskFromCollection,
    getCompletedTaskFromCollection,
    getTodoTaskFromCollection,
  }
})
