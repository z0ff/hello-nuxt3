<script setup lang="ts">

import { Contents, Content } from 'newt-client-js'

interface Image {
    _id: string
    fileName: string
    fileSize: string
    fileType: string
    height: Number
    width: Number
    src: string
}

interface Machine extends Content {
    name: string
    usage: string
    os: string
    cpu: string
    gpu: string
    ram: Number
    storage: Number
    image: Image
}

const url = "machines/machine";

/*
const { data: machines } = await useLazyFetch<Contents<Machine>>(url , {
    baseURL: useRuntimeConfig().public.apiBase,
    headers: {
        Authorization: `Bearer ${useRuntimeConfig().apiSecret}`,
    }
});
*/
const { data: machines } = await useAsyncData<Contents<Machine>>('machine', () =>
    $fetch(
        `${useRuntimeConfig().public.apiBase}${url}`,
        {
            headers: {
                Authorization: `Bearer ${useRuntimeConfig().apiSecret}`
            }
        }
    ),
    {
        initialCache: false
    }
)

</script>

<template>
    <v-container fluid>
        <p class="text-h4 ma-10">PC・サーバ一覧</p>
        <v-row no-gutters>
            <v-col
                cols="12" sm="12" md="6" xl="4"
                align="center"
                v-if="machines"
                v-for="machine in machines.items"
                :key="machine._id"
            >
                <v-card
                    class="ma-2 ma-md-5"
                    max-width="500"
                >
                    <v-img
                        class="align-end text-white"
                        height="300"
                        :src="machine.image.src"
                        lazy-src="placeholder_machine.png"
                        gradient="to top, black, 30%, rgba(0,0,0,0)"
                        cover
                    >
                        <v-card-title>{{ machine.name }}</v-card-title>
                    </v-img>

                    <v-card-text>
                        <v-table>
                            <tbody>
                                <tr>
                                    <td width="100">用途</td>
                                    <td class="pa-1 text-right">
                                        <v-chip
                                            class="ma-1"
                                            v-for="usage in machine.usage"
                                            :usage="usage"
                                        >{{ usage }}</v-chip>
                                    </td>
                                </tr>
                                <tr>
                                    <td>OS</td>
                                    <td class="text-right">{{ machine.os }}</td>
                                </tr>
                                <tr>
                                    <td>CPU</td>
                                    <td class="text-right">{{ machine.cpu }}</td>
                                </tr>
                                <tr>
                                    <td>GPU</td>
                                    <td class="text-right">{{ machine.gpu }}</td>
                                </tr>
                                <tr>
                                    <td>メモリ</td>
                                    <td class="text-right">{{ machine.ram }} GB</td>
                                </tr>
                                <tr>
                                    <td>ストレージ</td>
                                    <td class="text-right">{{ machine.storage }} GB</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>