<template>
  <q-item clickable tag="a" v-bind="where">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: "",
  },

  icon: {
    type: String,
    default: "",
  },

  link: {
    type: String,
    required: false,
  },

  page: {
    type: String,
    required: false,
  },
});

const where = computed(() => {
  return props.link
    ? { href: props.link, target: "_blank" }
    : props.page
    ? { to: { name: props.page } }
    : null;
});
const to = computed(() => {
  return props.page ? { name: props.page } : null;
});
</script>
