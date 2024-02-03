<script setup lang="ts">
defineProps<{
  type: null | string;
  maxLength: number;
  isInline: boolean;
  updateResult: (
    isInline: boolean,
    obj: { isLink: boolean; text: string },
  ) => any;
}>();
</script>

<template>
  <div class="relative">
    <input
      placeholder="Текст кнопки"
      :maxlength="maxLength === 0 ? 9999 : maxLength"
      :class="[
        type ? 'pl-8' : 'pl-4',
        'min-w-[260px] rounded-md border border-slate-500 py-1 pr-4 duration-200 focus:border-lime-700',
      ]"
      type="text"
      @change="
        (e) =>
          updateResult(isInline, {
            isLink: type === 'link',
            text: (e.target as HTMLInputElement).value,
          })
      "
    />
    <img
      v-if="type"
      class="absolute left-1 top-[5px]"
      src="../assets/link.svg"
      alt=""
    />
  </div>
</template>
