<script setup lang="ts">
const drawer = ref(false);

const items = [
    {
        title: 'Home',
        icon:  'mdi-home',
        value: 'home',
        href:  '/',
    },
    {
        title: "What's new",
        icon:  'mdi-bullhorn',
        value: 'whatsNew',
        href:  '/under_construction',
    },
    {
        title: 'Blog',
        icon:  'mdi-post',
        value: 'blog',
        href:  '/under_construction',
    },
    {
        title: 'About',
        icon:  'mdi-information',
        value: 'about',
        href:  '/about',
    },
    {
        title: 'Contact',
        icon:  'mdi-at',
        value: 'contact',
        href:  '/under_construction',
    },
    {
        title: 'Member only',
        icon:  'mdi-lock',
        value: 'memberOnly',
        href:  '/under_construction',
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
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-tabs class="hidden-sm-and-down">
            <v-tab
                v-for="item in items"
                :key="item.title"
                :value="item.value"
                :to="item.href"
            >
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-tab>
        </v-tabs>
    </v-app-bar>

    <v-navigation-drawer
        app
        temporary
        class="hidden-md-and-up"
        v-model="drawer"
    >
        <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :prepend-icon="item.icon"
                :value="item.value"
                :href="item.href"
            >{{ item.title }}</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>