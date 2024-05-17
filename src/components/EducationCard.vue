<template>
<v-card>
    <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
            <v-img :src="logoSrc">
            </v-img>
        </v-col>
        <v-col class="d-flex flex-column justify-center align-center">
            <v-container :fluid="true">
                <b><h3>{{collegeName}}</h3></b>
                <p>{{degree}}</p> 
                <p>{{gradYear}}</p>
            </v-container>
        </v-col>
    </v-row>
</v-card>
</template>
<script lang="ts" setup>
const props = defineProps(["collegeName","degree","gradYear","logoSrc"])
const collegeName: string = props.collegeName
const degree:string = props.degree
const gradYear: string = props.gradYear
</script>