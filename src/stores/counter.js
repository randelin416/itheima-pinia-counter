// 導入一個方法 defineStore
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
const API_URL = 'http://geek.itheima.net/v1_0/channels'

export const useCounterStore = defineStore('counter', () => {
    // 定義資料(state)
    const count = ref(0)

    // 定義修改資料的方法(action 同步+異步)
    const increment = () => {
        count.value++
    }

    // getter定義
    const doubleCount = computed(() => count.value * 2)

    // 定義異步action
    const list = ref([])
    const getList = async () => {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels
    }
    // 以對象的方式return供組件使用
    return {
        count,
        doubleCount,
        increment,
        list,
        getList
    }
})