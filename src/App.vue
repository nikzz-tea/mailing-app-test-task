<script setup lang="ts">
import { ref } from "vue";
import ChannelCard from "./components/ChannelCard.vue";
import MessageField from "./components/MessageField.vue";
import config from "./config";

const items = [
  {
    title: "VK",
    icon: "/vk.svg",
  },
  {
    title: "Telegram",
    icon: "/tg.svg",
  },
  {
    title: "WhatsApp",
    icon: "/whatsapp.svg",
  },
  {
    title: "SMS",
    icon: "/sms.svg",
  },
];

const activeChannels = ref<string[]>([]);

const setItem = (title: string) => {
  if (!activeChannels.value.includes(title))
    return activeChannels.value.push(title);
  activeChannels.value = activeChannels.value.filter((item) => item !== title);
};
</script>

<template>
  <div
    v-auto-animate
    class="mx-auto mt-16 min-h-[854px] w-[1200px] rounded-t-3xl bg-white p-8 shadow-lg"
  >
    <h2 class="text-2xl">Выберите каналы</h2>
    <div class="flex justify-center gap-2 py-4">
      <ChannelCard
        v-for="item in items"
        :key="item.title"
        v-bind="item"
        :setItem="setItem"
      />
    </div>
    <h2 class="text-2xl">Заполните сообщения</h2>
    <div v-auto-animate class="flex flex-col gap-9 py-4">
      <MessageField
        v-for="(item, i) in activeChannels"
        :index="i + 1"
        :channelObject="config[item]"
      />
    </div>
  </div>
</template>
