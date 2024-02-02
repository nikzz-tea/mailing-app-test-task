<script setup lang="ts">
import { ref } from "vue";
import { ChannelConfig } from "../config";
import InputList from "./InputList.vue";

const { channelObject } = defineProps<{
  index: number;
  channelObject: ChannelConfig;
}>();

const isOpened = ref(false);

const handleClick = () => {
  isOpened.value = !isOpened.value;
};
</script>

<template>
  <div>
    <h3 class="pb-2 text-center text-2xl">
      {{ index }}. {{ channelObject.name }}
    </h3>
    <textarea
      :maxlength="channelObject.messageLimit"
      class="w-full rounded-md border border-slate-500 p-3 text-base duration-200 focus:border-lime-700"
    ></textarea>
    <div
      v-if="channelObject.defaultButtons"
      @click="handleClick"
      class="flex cursor-pointer items-center justify-center gap-1"
    >
      <img
        :class="[isOpened ? 'rotate-180' : '', 'duration-200']"
        src="../assets/chevron.svg"
        alt=""
      />
      <span class="font-medium">Настроить кнопки</span>
    </div>
    <div
      :class="[
        isOpened ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        'grid duration-200',
      ]"
    >
      <div class="flex min-h-0 justify-center gap-6 overflow-hidden pt-3">
        <InputList type="Стандартные" :channelObject="channelObject" />
        <InputList type="inline" :channelObject="channelObject" />
      </div>
    </div>
  </div>
</template>
