<template>
<v-card>
    <v-row>
        <v-col cols="3">
            <v-img :src="logoImage">
                
            </v-img>
        </v-col>
        <v-col>
            <v-container>
                <b>{{collegeName}}</b>
                <p1>{{degree}}</p1>
                <p1>{{gradYear}}r</p1>
            </v-container>
        </v-col>
    </v-row>
</v-card>
</template>
<script lang="ts" setup>
const props = defineProps(["collegeName","degree","gradYear","logoSrc"])
const collegeName: string = props.collegeName
const degree:string = props.degree
const gradYear: string = props.collegeName
const logoSrc: string = props.logoSrc
var logoImage:any = null;
await import(logoSrc).then((logo) =>
{
    logoImage = logo.default;
}
)
</script>