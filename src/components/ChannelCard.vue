<script setup lang="ts">
import { ref } from "vue";

const { setItem, title } = defineProps<{
  title: string;
  icon: string;
  setItem: (title: string) => void;
}>();

const isActive = ref(false);

const handleClick = () => {
  setItem(title.toLowerCase());
  isActive.value = !isActive.value;
};
</script>

<template>
  <div
    @click="handleClick"
    :class="[
      isActive ? '-translate-y-1 bg-slate-100' : '',
      'flex w-40 cursor-pointer items-center justify-center gap-2 rounded-lg border-4 border-lime-200 p-3 duration-200 hover:-translate-y-1 hover:bg-slate-100',
    ]"
  >
    <img class="h-10 w-10" :src="icon" :alt="title" />
    <span>{{ title }}</span>
  </div>
</template>
