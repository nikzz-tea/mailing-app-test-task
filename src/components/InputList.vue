<script setup lang="ts">
import { inject, ref } from "vue";
import Input from "./Input.vue";
import { ChannelConfig } from "../config";

const { channelObject, type } = defineProps<{
  type: "Стандартные" | "inline";
  channelObject: ChannelConfig;
}>();

const amount = ref<{ inputType: null | string }[]>([]);

const finalResult = inject("finalResult") as any[];

const updateResult = (
  isInline: boolean,
  obj: { isLink: boolean; text: string },
) => {
  const object = finalResult.find(
    (item) => item.channel === channelObject.name.toLowerCase(),
  );
  if (isInline) return object.inlineButtons.push(obj);
  return object.defaultButtons.push(obj);
};

const handleAdd = () => {
  if (!channelObject.defaultButtons) return;
  if (!channelObject.inlineButtons) return;
  if (type === "Стандартные") {
    if (channelObject.defaultButtons.amountLimit === 0)
      return amount.value.push({ inputType: null });
    if (amount.value.length >= channelObject.defaultButtons.amountLimit) return;
    amount.value.push({ inputType: null });
  } else {
    if (channelObject.inlineButtons.amountLimit === 0)
      return amount.value.push({ inputType: null });
    if (amount.value.length >= channelObject.inlineButtons.amountLimit) return;
    amount.value.push({ inputType: null });
  }
};

const handleRemove = () => {
  if (amount.value.length === 0) return;
  amount.value.pop();
};

const handleAddLink = () => {
  if (!channelObject.defaultButtons) return;
  if (!channelObject.inlineButtons) return;
  if (type === "Стандартные") {
    if (channelObject.defaultButtons.linksSupport)
      return amount.value.push({ inputType: "link" });
  } else {
    if (amount.value.length >= channelObject.inlineButtons.amountLimit) return;
    if (!channelObject.inlineButtons.linksSupport) return;
    if (channelObject.inlineButtons.linksSupport === true)
      return amount.value.push({ inputType: "link" });
    const buttonWithLinks = amount.value.filter(
      (item) => item.inputType === "link",
    );
    if (buttonWithLinks.length >= channelObject.inlineButtons.linksSupport)
      return;
    amount.value.push({ inputType: "link" });
  }
};

const setLimit = (inputType: string | null) => {
  if (!channelObject.defaultButtons) return 0;
  if (!channelObject.inlineButtons) return 0;
  if (type === "Стандартные") {
    if (!inputType) return channelObject.defaultButtons.textLimit;
    return 0;
  } else {
    if (!inputType) return channelObject.inlineButtons.textLimit;
    return 0;
  }
};
</script>

<template>
  <div class="flex gap-2 rounded-md border-2 border-lime-600 p-3">
    <div v-auto-animate class="flex flex-col gap-2">
      <h3 class="text-center">{{ type }} кнопки</h3>
      <Input
        v-for="(item, i) in amount"
        :key="i"
        :type="item.inputType"
        :maxLength="setLimit(item.inputType)"
        :isInline="type === 'inline'"
        :updateResult="updateResult"
      />
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
            channelObject.defaultButtons &&
            channelObject.defaultButtons.linksSupport) ||
          (type === 'inline' &&
            channelObject.inlineButtons &&
            channelObject.inlineButtons.linksSupport)
        "
        @click="handleAddLink"
        class="h-10 w-10 cursor-pointer"
        src="../assets/addlink.svg"
        alt=""
      />
    </div>
  </div>
</template>
