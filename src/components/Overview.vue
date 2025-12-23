<template>
    <v-container>
        <v-row>
            <v-col cols="3" class="profile-picture-section">
                <v-container  id="overview">
                    <br>
                    <v-img src="https://media.licdn.com/dms/image/v2/D5603AQGsx5NqlNlyaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726630741943?e=1737590400&v=beta&t=kqHmdxkoNBLW44L250UVtB90YsmIaCNp1_XnJetMTI8" class="profile-pic"> </v-img>
                    <div class="d-flex flex-column  align-items-center">
                        <h1>Sai Suhrut</h1>
                        <div class="d-flex justify-content-center align-items-center" style="gap: 10px;">
                            <a :href="social.hyperlink"
                                class="socials-icon d-flex justify-content-center align-items-center text-decoration-none"
                                style="font-size: 32px;"
                                target="_blank"
                                v-for="social in socials" :key="social.hyperlink"
                            >
                                <v-icon :icon="social.logo" style="font-size: 40px;"></v-icon>
                            </a>
                            <a href="https://github.com/suhrusai/suhrusai/blob/main/resume.pdf?raw=true"
                                class="socials-icon d-flex justify-content-center align-items-center text-decoration-none"
                                style="font-size: x-large;"
                                target="_blank"
                            >
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135686.png" style="height: 32px; width: 32px;" />
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
                <v-row id="experience">
                  <h1>Experience</h1>
                  <div class="w-100">
                    <ExperienceList :items="experiences" />
                  </div>
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
                                            v-for="social in socials" :key="social.hyperlink"
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
import { ref } from 'vue';
import EducationCard from './EducationCard.vue';
import GithubRepos from './GithubRepos.vue';
import ProjectCard from './ProjectCard.vue';
import ExperienceList from './ExperienceList.vue';
// Assuming your JSON data is structured according to the PortfolioData interface
import portfolioData from '../information.json';

const { Overview, Education, Projects, Socials, ExperienceList: ExperienceData } = portfolioData;

// No need to define variables again, use the destructured properties directly
const educationInformation = ref(Education);
const projects = ref(Projects);
const socials = ref(Socials);
const overview = ref(Overview);
const experiences = ref(ExperienceData);
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
