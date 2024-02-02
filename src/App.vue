<script setup lang="ts">
import ChannelCard from "./components/ChannelCard.vue";

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
</script>

<template>
  <div class="h-screen w-screen bg-lime-200 pt-24">
    <div
      v-auto-animate
      class="mx-auto h-full w-[1200px] rounded-t-3xl bg-white p-8"
    >
      <h2 class="text-2xl">Выберите каналы</h2>
      <div class="flex justify-center gap-2 py-4">
        <ChannelCard v-for="item in items" :key="item.title" v-bind="item" />
      </div>
    </div>
  </div>
</template>
