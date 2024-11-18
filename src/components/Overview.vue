<template>
    <v-container>
        <v-row>
            <v-col cols="3" class="profile-picture-section">
                <v-container  id="overview">
                    <br>
                    <v-img src="../assets/profile_pic.png" class="profile-pic"> </v-img>
                    <div class="d-flex flex-column  align-items-center">
                        <h1>Sai Suhrut</h1>
                        <div>
                            <a :href="social.hyperlink" 
                                class="socials-icon" 
                                style="font-size: x-large;"
                                target="_blank"
                                v-for="social in socials" :key="social"
                            >
                                <v-icon :icon="social.logo" >
                                </v-icon>
                            </a>
                        </div>
                    </div>
                </v-container>
            </v-col>
            <v-col cols="9">
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
                            <p><b>Front End</b>: HTML, CSS, JavaScript, jQuery, Vue.js, ASP.NET, Bootstrap, Vuetify </p><br>
                            <p><b>Back End</b>: .NET Framework, .NET Core, Web API, Python, Node.js </p><br>
                            <p><b>Deployment and Automation</b>: GitHub Actions, PowerShell  </p><br>
                            <p><b>Programming Languages</b>: C#, Java, Python </p><br>
                        </div>
                    </v-col>
                    <v-col>
                        <h1>Education</h1>
                        <v-container :fluid="true" justify="cetner" class="education-section">
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
                <v-row id="projects">
                    <h1>Projects</h1>
                    <div v-for="project in projects">
                        <ProjectCard :project="project"></ProjectCard>
                    </div>

                </v-row>
                <v-row id="repos">
                    <GithubRepos/>
                </v-row>
                <v-row class="mt-10">
                    <v-container :fluid="true"  id="contact">
                        <v-row>
                            <h1>Contact Information</h1>
                        </v-row>
                        <v-row>
                            <div class="d-flex flex-column" >
                                        <a :href="social.hyperlink" 
                                            class="socials-icon" 
                                            style="font-size: x-large;text-decoration: none;"
                                            target="_blank"
                                            v-for="social in socials" :key="social"
                                        >
                                        <v-icon :icon="social.logo" >
                                        </v-icon>
                                        {{social.hyperlink}}
                                        </a>
                                    </div>
                        </v-row>
                    </v-container>
                </v-row>
    </v-container>
        
</template>
<script lang="ts" setup>
import json from '../information.json'
import EducationCard from './EducationCard.vue';
import GithubRepos from './GithubRepos.vue'
import ProjectCard from './ProjectCard.vue';
const educationInformation = json.Education;
const projects = json.Projects;
var socials: any = json.Socials;
var overview: string = json.Overview
</script>
<style>
.align-items-center{
    align-items: center;
}
</style>
<style scoped>
.profile-picture-section{
    min-width: 250px;
}
.education-section{
    min-width: 350px;
}
</style>