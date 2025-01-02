<template>
  <div class="pinned-repos">
    <h2 class="my-6">Repositories</h2>
    <div v-if="loading" class="loading-message-container">
      <div class="loading-content">
        <v-progress-circular
          :model-value="RepoLoadingPercentage"
          :rotate="-90"
          :size="100"
          :width="15"
          color="primary"
        ></v-progress-circular>
        <div class="loading-text">{{ `${this.doneRequests}/${this.totalRequests}` }}</div>
      </div>
    </div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <v-row v-else>
      <div v-for="repo in pinnedRepos" :key="repo.id" class="repo-item" @click="openLinkInTab(repo.html_url)">
        <v-col cols="4">
          <v-card
            class="mx-auto"
            min-width="350"
            max-width="350"
            min-height="200"
            max-height="200"
            hover
          >
            <v-card-item>
              <v-card-title>{{ repo.name }}</v-card-title>
              <v-card-subtitle>
                <b style="text-overflow: clip;">{{ getTop3Languages(repo.languagePercentages) }}</b>
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>{{ repo.description }}</v-card-text>
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
      totalRequests: 1,
      doneRequests: 0,
      error: null,
    };
  },
  computed: {
    RepoLoadingPercentage() {
      return this.doneRequests === 0 ? 0 : Math.floor((this.doneRequests / this.totalRequests) * 100);
    },
  },
  methods: {
    openLinkInTab(link) {
      window.open(link, "_blank");
    },
    getTop3Languages(languagePercentages) {
      const top3Languages = Object.entries(languagePercentages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([key, value]) => `${key}: ${value}%`)
        .join(", ");

      return top3Languages;
    },
    async fetchWithRetry(url, useToken = false) {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const headers = useToken && token ? { Authorization: `Bearer ${token}` } : {};
      const response = await fetch(url, { headers });

      if (response.status === 403 && !useToken) {
        // Retry with token if rate-limited or forbidden
        return this.fetchWithRetry(url, true);
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${url}`);
      }

      return await response.json();
    },
  },
  async mounted() {
    try {
      const data = await this.fetchWithRetry("https://api.github.com/users/suhrusai/repos?type=public&sort=updated&direction=desc&per_page=200");

      // Exclude the repository named 'suhrusai'
      const filteredRepos = data.filter(repo => repo.name !== 'suhrusai');

      this.totalRequests = filteredRepos.length + 1;
      this.doneRequests = 1;

      for (const repo of filteredRepos) {
        const languages = await this.fetchWithRetry(`${repo.url}/languages`);
        const totalBytes = Object.values(languages).reduce((total, bytes) => total + bytes, 0);
        const percentages = {};
        for (const [language, bytes] of Object.entries(languages)) {
          percentages[language] = ((bytes / totalBytes) * 100).toFixed(2);
        }
        repo.languagePercentages = percentages;
        this.doneRequests += 1;
      }

      this.pinnedRepos = filteredRepos;
      this.loading = false;
    } catch (error) {
      this.error = error.message;
      this.loading = false;
    }
  },
};
</script>


<style scoped>
.error-message {
  color: red;
}

.loading-message-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  position: relative;
}

.loading-content {
  position: relative;
}

.loading-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pinned-repos {
  width: 100%;
}
</style>
