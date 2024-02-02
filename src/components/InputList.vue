<script setup lang="ts">
import { ref } from "vue";
import Input from "./Input.vue";
import { ChannelConfig } from "../config";

const { channelObject, type } = defineProps<{
  type: "Стандартные" | "inline";
  channelObject: ChannelConfig;
}>();

const { defaultButtons, inlineButtons } = channelObject;

const amount = ref<{ inputType: null | string }[]>([]);

const handleAdd = () => {
  if (!defaultButtons) return;
  if (!inlineButtons) return;
  if (type === "Стандартные") {
    if (defaultButtons.amountLimit === 0)
      return amount.value.push({ inputType: null });
    if (amount.value.length >= defaultButtons.amountLimit) return;
    amount.value.push({ inputType: null });
  } else {
    if (inlineButtons.amountLimit === 0)
      return amount.value.push({ inputType: null });
    if (amount.value.length >= inlineButtons.amountLimit) return;
    amount.value.push({ inputType: null });
  }
};

const handleRemove = () => {
  if (amount.value.length === 0) return;
  amount.value.pop();
};

const handleAddLink = () => {
  if (!defaultButtons) return;
  if (!inlineButtons) return;
  if (type === "Стандартные") {
    if (defaultButtons.linksSupport)
      return amount.value.push({ inputType: "link" });
  } else {
    if (amount.value.length >= inlineButtons.amountLimit) return;
    if (!inlineButtons.linksSupport) return;
    if (inlineButtons.linksSupport === true)
      return amount.value.push({ inputType: "link" });
    const buttonWithLinks = amount.value.filter(
      (item) => item.inputType === "link",
    );
    if (buttonWithLinks.length >= inlineButtons.linksSupport) return;
    amount.value.push({ inputType: "link" });
  }
};
</script>

<template>
  <div class="flex gap-2 rounded-md border-2 border-lime-600 p-3">
    <div v-auto-animate class="flex flex-col gap-2">
      <h3 class="text-center">{{ type }} кнопки</h3>
      <Input v-for="(item, i) in amount" :key="i" :type="item.inputType" />
    </div>
    <div class="pt-3">
      <img
        @click="handleAdd"
        class="h-10 w-10 cursor-pointer"
        src="../assets/plus.svg"
        alt=""
      />
      <img
        @click="handleRemove"
        class="h-10 w-10 cursor-pointer"
        src="../assets/minus.svg"
        alt=""
      />
      <img
        v-if="
          (type === 'Стандартные' &&
            defaultButtons &&
            defaultButtons.linksSupport) ||
          (type === 'inline' && inlineButtons && inlineButtons.linksSupport)
        "
        @click="handleAddLink"
        class="h-10 w-10 cursor-pointer"
        src="../assets/addlink.svg"
        alt=""
      />
    </div>
  </div>
</template>
