import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { isValidEmail } from '../utils'

const defaultAvatar = 'https://i.pravatar.cc/150?img=36'

interface User {
  password: string
  role: 'admin' | 'user'
  name: string
  avatar: string
}

type EmptyObj = {}

export const useAuth = defineStore('auth', () => {
  const isLoggedIn = ref(false)

  const _users = reactive<Record<string, User>>({
    'admin@test.com': {
      password: 'admin',
      role: 'admin',
      name: 'user',
      avatar: defaultAvatar,
    },
  })

  const user = reactive<User | EmptyObj>({
    password: 'admin',
    role: 'admin',
    name: 'Hossein Mirazimi',
    avatar: defaultAvatar,
  })

  const getUser = computed(() => Object.keys(user).length > 1 ? user : null)

  const signIn = async(email: string, password: string): Promise<User | EmptyObj> => {
    return await new Promise((resolve, reject) => {
      const emails = Object.keys(_users)
      if (emails.includes(email) && _users[email]?.password === password) {
        console.log('success login')
        isLoggedIn.value = true
        Object.assign(user, { ..._users[email] })
        return resolve(user)
      }
      isLoggedIn.value = false
      return reject(new Error('Invalid email or password'))
    })
  }

  const signUp = async({ email, password }: { email: string; password: string }) => {
    return await new Promise((resolve, reject) => {
      try {
        const isValid = isValidEmail(email)
        if (isValid) {
          _users[email] = {
            password,
            name: email.split('@')[0],
            role: 'user',
            avatar: defaultAvatar,
          }
          isLoggedIn.value = true
          Object.assign(user, { ..._users[email] })
          return resolve(user)
        }
        isLoggedIn.value = false
        return reject(new Error('Invalid email or password'))
      }
      catch (err) {
        // @ts-ignore
        reject(err?.message)
      }
    })
  }

  return {
    getUser,
    isLoggedIn,
    signIn,
    signUp,
  }
})
