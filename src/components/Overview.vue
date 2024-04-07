<template>
        <v-row>
            <v-col cols="4">
                <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> </v-img>  
            </v-col>
            <v-col>
                <v-container>
                    <v-row>
                        Lorum Epsum
                    </v-row>
                    <v-row>
                        <v-col>
                            Lorum Epsom
                        </v-col>
                        <v-col>
                            <h1>Education</h1>

                            <v-container justify="cetner" >
                                <Suspense>
                                <EducationCard v-for="education in educationInformation" 
                                :key="education.CollegeName"    
                                :college-name="education.CollegeName" 
                                :grad-year="education.GraducationYear"
                                v-bind:degree="education.DegreeName"
                                :logo-src="education.logoSrc"
                                class="p-1"
                            >
                            </EducationCard>
                        </Suspense>
                            </v-container>

                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
</template>
<script lang="ts" setup>
import json from '../information.json'
import EducationCard from './EducationCard.vue';
const educationInformation = json.Education;
</script>