<template>
    <div>
      <AnemoneNavbar />
      <div v-if="service">
        <p>{{ service.name }}</p>
        <p>{{ service.description }}</p>
        <p>{{ service.availability }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <AnemoneFooter />
    </div>
  </template>
    
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import AnemoneFooter from '~/components/anemoneFooter.vue';
  import AnemoneNavbar from '~/components/anemoneNavbar.vue';
  
  useHead({
    title: 'service',
  });
  
  const route = useRoute();
  const id = parseInt(route.params.id as string, 10);
  
  interface Service {
  id: number;
  name: string;
  description: string;
  availability: string;
  testimonial: string;
}
  
  const services = ref<Service[]>([]);
  
  const fetchServices = async () => {
    const { data } = await useFetch<{ data: Service[] }>('/api/service');
    if (data.value) {
      services.value = data.value.data;
    }
  };
  
  onMounted(fetchServices);
  
  const service = computed(() => services.value.find(e => e.id === id));
  
  </script>
  