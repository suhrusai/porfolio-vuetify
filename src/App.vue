<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'
import Skills from '@/components/sections/Skills.vue'
import Education from '@/components/sections/Education.vue'
import Experience from '@/components/sections/Experience.vue'
import Projects from '@/components/sections/Projects.vue'
import Awards from '@/components/sections/Awards.vue'
import Repositories from '@/components/sections/Repositories.vue'
import Contact from '@/components/sections/Contact.vue'
</script>

<template>
  <a
    href="#about"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
  >
    Skip to content
  </a>

  <Navbar />

  <main>
    <Hero />
    <About />
    <Skills />
    <Education />
    <Experience />
    <Projects />
    <Awards />
    <Repositories />
    <Contact />
  </main>

  <Footer />
</template>
