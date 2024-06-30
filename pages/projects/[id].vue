<template>
  <div class="relative grid grid-cols-1 grid-rows-1 justify-center items-center px-8 text-center">
    <!-- Service Information Box -->
    <div class="bg-neutral border border-primary max-w-4xl p-4 rounded-lg z-10">
      <div v-if="project">
        <h2 class="font-rosamila text-5xl text-primary">
          {{ project.name }}
        </h2>
        <p class="text-secondary mb-6">
         {{project.tag}}
        </p>
       <!-- Responsive grid -->
        <div :class="responsiveGridClass">
          <!-- Description -->
          <div class="text-left">
            <h3 class="text-l font-bold mb-2">Description</h3>
            <p class="text-primary mb-4">
              {{ project.description }}
            </p>
          </div>

          <!-- Image -->
          <div class="flex justify-center items-center">
            <img
              src="~/public/img/vectors/woman.svg"
              alt="Website testimonial"
              class="min-w-2/3 translate-y-2 z-20"
            >
          </div>
        </div>
        </div>
        <div v-else>
          <p>Loading...</p>
      </div>
    </div> 
  </div> 
</template>
    
  <script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { useWindowSize } from '@vueuse/core';

  
const route = useRoute();
const id = parseInt(route.params.id as string, 10);

interface Project {
id: number;
name: string;
description: string;
tag: string;
}

const projects = ref<Project[]>([]);

const fetchProjects = async () => {
  const { data } = await useFetch<{ data: Project[] }>('/api/project');
  if (data.value) {
    projects.value = data.value.data;
    console.log('Fetched projects:', projects.value);

  }

};

onMounted(fetchProjects);

const project = computed(() => projects.value.find(e => e.id === id));

watch(project, (newProject) => {
  if (newProject) {
    useHead({
      title: newProject.name,
    });
  }
});

const { width, height } = useWindowSize();

const responsiveGridClass = computed(() => {
  return width.value > height.value ? 'grid grid-cols-2 gap-8' : 'grid grid-rows-2 gap-8';
});

  </script>
  