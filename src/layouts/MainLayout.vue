<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "Playground",
    icon: "home",
    page: "home",
  },
  {
    title: "Comparanator",
    caption: "Compare things",
    icon: "scale",
    page: "comparanator",
  },
  {
    title: "Alt Comparanator",
    caption: "Another way to compare things",
    icon: "scale",
    page: "comparanatorAlt1",
  },
  {
    title: "PWR Simulator",
    caption: "Try running a pressurized water reactor",
    icon: "settings",
    page: "pwrSim",
  },
  {
    title: "Decay Chains",
    caption: "See what happens to radioactive fuel",
    icon: "link",
    page: "decayChains",
  },
  {
    title: "Quasar Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/blueisgreen",
    icon: "code",
    link: "https://github.com/blueisgreen",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
