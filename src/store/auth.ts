import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const useAuth = defineStore('auth', () => {
  const isLoggedIn = ref(false)

  const _users = reactive({
    admin: {
      password: 'admin',
      role: 'admin',
      name: 'user',
      avatar: '../assets/img/tsks-logo-w-type.svg',
    },
  })

  const user = reactive({})

  const getUser = computed(() => user)

  const login = async(userName: string, password: string) => {
    return await new Promise((resolve, reject) => {
      const users = Object.keys(_users)
      if (users.includes(userName) && users.includes(password)) {
        isLoggedIn.value = true
        Object.assign(user, { ..._users[userName] })
        return resolve(user)
      }
      isLoggedIn.value = false
      return reject(new Error('Invalid username or password'))
    })
  }

  return {
    getUser,
    isLoggedIn,
    login,
  }
})
