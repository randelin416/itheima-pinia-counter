<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

// 1. 導入use打頭的方法
import { useCounterStore } from '@/stores/counter'

// 2. 執行方法得到store實例對象
const counterStore = useCounterStore()
console.log(counterStore)

// // 直接解構賦值(響應式丟失)
// const { count, doubleCount } = counterStore
// console.log(count, doubleCount)

// 方法包裹(保持響應式更新 僅負責數據類型)
const { count, doubleCount } = storeToRefs(counterStore)
console.log(count, doubleCount)

// 方法直接從原來的counterStore中解構賦值
const { increment } = counterStore

// 觸發action
onMounted(() => {
  counterStore.getList()
})
</script>

<template>
  <button @click="counterStore.increment">{{ count }}</button>
  {{ doubleCount }}

  <ul>
    <li v-for="item in counterStore.list" :key="id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
