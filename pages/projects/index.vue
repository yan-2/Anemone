<template>
    <div>
      <AnemoneNavbar />
      <ul>
      <li v-for="project in projects" :key="project.id">
        <NuxtLink :to = "`/projects/${project.id}`"> {{ project.name }}</NuxtLink>
      </li>
    </ul>
      <AnemoneFooter />
    </div>
</template>
  
<script setup lang="ts">
  import AnemoneFooter from '~/components/anemoneFooter.vue'
  import AnemoneNavbar from '~/components/anemoneNavbar.vue'

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
    console.log(projects.value)
  }
};

onMounted(fetchProjects);
  
</script>
  