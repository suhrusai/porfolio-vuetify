<template>
<v-card>
    <v-row>
        <v-col cols="3">
            <v-img :src="logoImage">
                
            </v-img>
        </v-col>
        <v-col>
            <v-container>
                <b>{{collegeName}}</b><br>
                <p>{{degree}}</p><br>
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
const logoSrc: string = props.logoSrc
var logoImage:any = null;
await import(logoSrc).then((logo) =>
{
    logoImage = logo.default;
}
)
</script>