<script setup>
const url = "https://testspace.cdn.newt.so/v1/machines/machine"
const { data: machines } = await useFetch(url , {
    async beforeFetch(options) {
        const token = "fLFjN6GH57KFa6Y8UoZqCIHPWZulyr-59Qe7C1xshQY"

        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        }

        return {
            options,
        }
    },
})
</script>

<template>
    <div class="d-Flex align-center flex-column">
        <p class="text-h4 ma-10">マシン一覧</p>
        <v-card
            class="ma-5"
            width="500"
            v-for="machine in machines.items"
            :machine="machine"
        >
            <v-card-header>
                <v-card-header-text>
                    <v-card-title>{{ machine.name }}</v-card-title>
                </v-card-header-text>
            </v-card-header>

            <v-card-text>
                <v-table>
                    <tbody>
                        <tr>
                            <td width="100">用途</td>
                            <td class="pa-1">
                                <v-chip
                                    class="ma-1"
                                    v-for="usage in machine.usage"
                                    :usage="usage"
                                >{{ usage }}</v-chip>
                            </td>
                        </tr>
                        <tr>
                            <td>OS</td>
                            <td>{{ machine.os }}</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>{{ machine.cpu }}</td>
                        </tr>
                        <tr>
                            <td>GPU</td>
                            <td>{{ machine.gpu }}</td>
                        </tr>
                        <tr>
                            <td>メモリ</td>
                            <td>{{ machine.ram }} GB</td>
                        </tr>
                        <tr>
                            <td>ストレージ</td>
                            <td>{{ machine.storage }} GB</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card-text>
        </v-card>
    </div>
</template>