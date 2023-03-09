<template>
  <q-page padding>
    <div class="text-h1">Comparanator 2</div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const units = [
  { label: "inch", value: "inch" },
  { label: "foot", value: "ft" },
  { label: "yard", value: "yd" },
];
const unitConversion = {
  inch: {
    foot: 1 / 12,
    yard: 1 / 36,
  },
  foot: {
    inch: 12,
    yard: 1 / 3,
  },
  yard: {
    inch: 36,
    foot: 3,
  },
};
const baseQuantity = ref(0);
const baseUnit = ref("");
</script>
