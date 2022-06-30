<script setup lang="ts">
const drawer = ref(false);
const tab = 'home';

const items = [
    {
        title: 'Home',
        value: 'home',
        href:  '/',
    },
    {
        title: 'About',
        value: 'about',
        href:  '/about',
    },
];
</script>

<template>
    <v-app-bar app>
        <v-app-bar-nav-icon
            class="hidden-md-and-up"
            variant="text"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>Hello Nuxt3/Vuetify3!</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-tabs class="hidden-sm-and-down">
            <v-tab
                v-for="item in items"
                :key="item.title"
                :value="item.value"
                :to="item.href"
            >{{ item.title }}</v-tab>
        </v-tabs>
    </v-app-bar>

    <v-navigation-drawer
        class="hidden-md-and-up"
        v-model="drawer"
    >
        <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :value="item.value"
                :href="item.href"
            >{{ item.title }}</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>