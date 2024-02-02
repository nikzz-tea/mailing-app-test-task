<script setup lang="ts">
import { ref } from "vue";
import { ChannelConfig } from "../config";

const { channelObject } = defineProps<{
  index: number;
  channelObject: ChannelConfig;
}>();

const { messageLimit, name } = channelObject;

const isOpened = ref(false);

const handleClick = () => {
  isOpened.value = !isOpened.value;
};
</script>

<template>
  <div>
    <h3 class="text-center text-xl">{{ index }}. {{ name }}</h3>
    <textarea
      :maxlength="messageLimit"
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
    <div
      :class="[
        isOpened ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        'grid duration-200',
      ]"
    >
      <div class="min-h-0 overflow-hidden">aopsdfigaspogiasgp[adigp]</div>
    </div>
  </div>
</template>
