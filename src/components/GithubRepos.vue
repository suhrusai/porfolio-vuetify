<template>
    <div class="pinned-repos">
      <h2>Pinned Repositories</h2>
      <div v-if="loading" class="loading-message">Loading...</div>
      <div v-else-if="error" class="error-message">{{ error }}</div>
      <v-row>
                <div v-for="repo in pinnedRepos" :key="repo.id" class="repo-item" @click="openLinkInTab(repo.html_url)">
                    <v-col cols="4">
                        <v-card
                        class="mx-auto"
                        min-width="350"
                        max-width="350"
                        min-height = "150"
                        max-height = "150"
                        hover
                        >
                            <v-card-item>
                            <v-card-title>
                                {{ repo.name }}
                            </v-card-title>
                            <v-card-subtitle>
                                <b style="text-overflow:clip;">
                                    {{  
                                        getTop3Languages(repo.languagePercentages)
                                    }}
                                </b>
                            </v-card-subtitle>
                            </v-card-item>
                            <v-card-text>
                                {{ repo.description }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </div>
    </v-row>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        pinnedRepos: [],
        loading: true,
        error: null,
      };
    },
    methods:{
        openLinkInTab(link){
            window.open(link, '_blank');
        },
        getTop3Languages(languagePercentages){
            const top3Languages = Object.entries(languagePercentages)
        .sort((a, b) => b[1] - a[1]) // Sort by value (descending order)
        .slice(0, 3) // Take the top 3 entries
        .map(([key, value]) => `${key}: ${value}%`)
        .join(', ');

      return top3Languages;
        }
    }
    ,
async mounted() {
    try {
    const response = await fetch('https://api.github.com/users/suhrusai/repos?type=public&sort=updated&direction=desc&per_page=20');
    if (!response.ok) {
        throw new Error('Failed to fetch pinned repositories');
    }
    const data = await response.json();
    for(let i = 0; i< data.length; i++){
        const languages = await (await fetch(data[i].url+'/languages')).json()
        const totalBytes = Object.values(languages).reduce((total, bytes) => total + bytes, 0);
        const percentages = {};
        for (const [language, bytes] of Object.entries(languages)) {
        percentages[language] = ((bytes / totalBytes) * 100).toFixed(2);
        console.log(percentages);
        data[i].languagePercentages = percentages
    }
    }
    this.pinnedRepos = data
    this.loading = false;
    } catch (error) {
    this.error = error.message;
    this.loading = false;
    }
},
};
</script>

<style scoped>
</style>
  