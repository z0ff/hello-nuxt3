<script setup>
const url = "machines/machine";
const { data: machines } = await useFetch(url , {
    baseURL: useRuntimeConfig().public.apiBase,
    headers: {
        Authorization: `Bearer ` + useRuntimeConfig().apiSecret,
    }
});
</script>

<template>
    <v-container fluid>
        <p class="text-h4 ma-10">PC・サーバ一覧</p>
        <v-row no-gutters>
            <v-col
                cols="12" sm="12" md="6" xl="4"
                v-for="machine in machines.items"
            >
                <v-card
                    class="ma-2 ma-md-5"
                    max-width="500"
                >
                    <v-img
                        class="align-end text-black"
                        height="300"
                        :src="machine.image.src"
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