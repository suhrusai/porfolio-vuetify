<script setup lang="ts">
import SectionHeading from '@/components/SectionHeading.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/lib/portfolio'
</script>

<template>
  <section id="projects" class="scroll-mt-20 py-20 sm:py-28">
    <div class="container">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A mix of professional, academic and personal projects across web, mobile and games."
      />
      <div class="space-y-8">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.name"
          :project="project"
          :reversed="i % 2 === 1"
        />
      </div>
    </div>
  </section>
</template>
