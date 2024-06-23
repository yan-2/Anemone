<template>
    <div>
      <div v-if="project">
        <p>{{ project.name }}</p>
        <p>{{ project.description }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
    
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  useHead({
    title: 'project',
  });
  
  const route = useRoute();
  const id = parseInt(route.params.id as string, 10);
  
  interface Project {
  id: number;
  name: string;
  description: string;
}
  
  const projects = ref<Project[]>([]);
  
  const fetchProjects = async () => {
    const { data } = await useFetch<{ data: Project[] }>('/api/project');
    if (data.value) {
      projects.value = data.value.data;
    }
  };
  
  onMounted(fetchProjects);
  
  const project = computed(() => projects.value.find(e => e.id === id));
  
  </script>
  