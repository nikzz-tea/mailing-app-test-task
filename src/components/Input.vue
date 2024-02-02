<script setup lang="ts">
defineProps<{
  type: null | string;
}>();
</script>

<template>
  <div class="relative">
    <input
      :class="[
        type ? 'pl-8' : 'pl-4',
        'min-w-[260px] rounded-md border border-slate-500 py-1 pr-4 duration-200 focus:border-lime-700',
      ]"
      type="text"
    />
    <img
      v-if="type"
      class="absolute left-1 top-[5px]"
      src="../assets/link.svg"
      alt=""
    />
  </div>
</template>
