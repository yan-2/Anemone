<template>
    <div>
      <ul>
      <li v-for="project in projects" :key="project.id">
        <NuxtLink :to = "`/projects/${project.id}`"> {{ project.name }}</NuxtLink>
      </li>
    </ul>
    </div>
</template>
  
<script setup lang="ts">
  useHead({
    title: 'Projects',
  })

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
  
</script>
  