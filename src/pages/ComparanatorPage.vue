<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-5">
        <q-card class="my-card">
          <q-card-section class="bg-blue text-white">
            <div class="text-h6">This</div>
            <div class="text-subtitle2">Choose an item and quantity</div>
          </q-card-section>

          <q-card-section>
            <q-select v-model="from.item" :options="options" />
            <q-input v-model="from.quantity" type="number" />
            <q-input v-model="from.quantityUnit" />
            <q-select
              v-model="from.durationUnit"
              :options="durationOptions"
              emit-value
            />
            <q-slider
              v-model="from.duration"
              :min="durationLimitLookup.min"
              :max="durationLimitLookup.max"
            />
          </q-card-section>

          <q-card-section>
            <q-img src="icons/favicon-128x128.png" />
          </q-card-section>

          <q-card-actions align="around">
            <q-btn @click="() => (from = { item: null, quantity: 0 })" flat
              >Clear</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-2 text-center">
        <q-btn label=">>Calculate>>" color="secondary" />
      </div>
      <div class="col-5">
        <q-card class="my-card">
          <q-card-section class="bg-yellow">
            <div class="text-h6">That</div>
            <div class="text-subtitle2">See how many of these you get</div>
          </q-card-section>

          <q-card-section>
            <q-img src="images/to-pix.png" />
          </q-card-section>

          <q-card-actions align="around">
            <q-btn flat>Action 1</q-btn>
            <q-btn flat>Action 2</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
const options = [
  { label: "60 Watt lightbulbs", value: "lightbulb60w", image: "" },
  { label: "EV miles", value: "evmiles", image: "" },
  { label: "75 inch TVs", value: "tv75", image: "" },
  { label: "Air conditioner", value: "ac", image: "" },
];
const durationOptions = [
  { label: "hours", value: "hr" },
  { label: "days", value: "day" },
  { label: "weeks", value: "wk" },
  { label: "years", value: "yr" },
];
const durationLimits = {
  hr: { min: 0, max: 72 },
  day: { min: 0, max: 365 },
  wk: { min: 0, max: 260 },
  yr: { min: 0, max: 1000 },
};
const from = ref({
  item: null,
  quantity: 0,
  quantityUnit: "",
  duration: 0,
  durationUnit: "",
});
const durationLimitLookup = computed(() => {
  return from.value.durationUnit != ""
    ? durationLimits[from.value.durationUnit]
    : { min: 0, max: 0 };
});
</script>

<style lang="scss" scoped></style>
