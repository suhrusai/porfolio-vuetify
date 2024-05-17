<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-container>
                    <v-img :src="profilePic" class="profile-pic"> </v-img>
                    <h1>Sai Suhrut</h1>
                    <template v-for="social in socials" :key="social">
                        <a :href="social.hyperlink" class="socials-icon" style="font-size: x-large;" ><v-icon :icon="social.logo"></v-icon></a>
                    </template>
                </v-container>
            </v-col>
            <v-col>
                <v-container>
                    <h1>
                        About
                    </h1>
                    <br>
                    <p style="font-size: larger">
                       {{ overview }}
                    </p>
                </v-container>
            </v-col>
        </v-row>
                <v-row>
                    <v-col>
                        <h1>
                            Skills
                        </h1>
                        <br>
                        <div style="font-size: large;">
                            <p><b>Front End</b>: HMTL, CSS, JavaScript, jQuery, Vue.js, ASP.NET, Bootstrap, Vuetify </p><br>
                            <p><b>Back End</b>: .NET Framework, .NET Core, Web API, Python, Node.js </p><br>
                            <p><b>Deployment and Automation</b>: GitHub Actions, PowerShell  </p><br>
                            <p><b>Programming Languages</b>: C#, Java, Python </p><br>
                        </div>
                    </v-col>
                    <v-col>
                        <h1 class="ml-4">Education</h1>
                        <v-container justify="cetner">
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
                <v-row>
                    <GithubRepos/>
                </v-row>
    </v-container>
        
</template>
<script lang="ts" setup>
import json from '../information.json'
import profilePicSrc from '../assets/profile_pic.png'
import EducationCard from './EducationCard.vue';
import GithubRepos from './GithubRepos.vue'
const educationInformation = json.Education;
var profilePic: any = null;
var socials: any = json.Socials;
var overview: string = json.Overview
await import(profilePicSrc).then((image) =>
{
    profilePic = image.default;
})
</script>