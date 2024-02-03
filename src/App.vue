<script setup lang="ts">
import { provide, ref } from "vue";
import ChannelCard from "./components/ChannelCard.vue";
import MessageField from "./components/MessageField.vue";
import config from "./config";

const activeChannels = ref<string[]>([]);

const setItem = (title: string) => {
  if (!activeChannels.value.includes(title)) {
    finalResult.value.push({
      channel: title,
      message: "",
      defaultButtons: [],
      inlineButtons: [],
    });
    return activeChannels.value.push(title);
  }
  finalResult.value = finalResult.value.filter(
    (item) => item.channel !== title,
  );
  activeChannels.value = activeChannels.value.filter((item) => item !== title);
};

const finalResult = ref<any[]>([]);

const handleSave = () => {
  console.log(finalResult.value);
  alert(
    `Сообщения "отправлены"!\nИнформация:\n${JSON.stringify(finalResult.value)}`,
  );
};

provide("finalResult", finalResult.value);
</script>

<template>
  <div
    v-auto-animate
    class="mx-auto mt-16 min-h-[854px] w-[1200px] rounded-t-3xl bg-white p-8 shadow-lg"
  >
    <h2 class="text-3xl font-semibold">Выберите каналы</h2>
    <div class="flex justify-center gap-2 py-4">
      <ChannelCard
        v-for="item in config"
        :key="item.name"
        :title="item.name"
        :icon="item.icon"
        :setItem="setItem"
      />
    </div>
    <h2 class="text-3xl font-semibold">Заполните сообщения</h2>
    <div v-auto-animate class="flex flex-col gap-9 py-4">
      <MessageField
        v-for="(item, i) in activeChannels"
        :index="i + 1"
        :channelObject="config[item]"
      />
    </div>
    <div class="flex justify-center">
      <button
        @click="handleSave"
        class="rounded-md border-4 border-lime-200 px-4 py-2 text-2xl duration-200 hover:bg-lime-200"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>
