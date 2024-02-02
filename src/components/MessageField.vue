<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  index: number;
  title: string;
  maxLength: number;
}>();

const isOpened = ref(false);

const handleClick = () => {
  isOpened.value = !isOpened.value;
};
</script>

<template>
  <div>
    <h3 class="text-center text-xl">{{ index }}. {{ title }}</h3>
    <textarea
      :maxlength="maxLength"
      class="w-full rounded-md border border-slate-500 p-3 text-base duration-200 focus:border-lime-700"
    ></textarea>
    <div
      @click="handleClick"
      class="flex cursor-pointer items-center justify-center gap-1"
    >
      <img
        :class="[isOpened ? 'rotate-180' : '', 'duration-200']"
        src="../assets/chevron.svg"
        alt=""
      />
      <span>Настроить кнопки</span>
    </div>
  </div>
</template>
