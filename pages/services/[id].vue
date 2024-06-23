<template>
    <div>
      <div v-if="service">
        <p>{{ service.name }}</p>
        <p>{{ service.description }}</p>
        <p>{{ service.availability }}</p>
        <p>{{ service.testimonial }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useHead } from '@vueuse/head';
  
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
  
  watch(service, (newService) => {
    if (newService) {
      useHead({
        title: newService.name,
      });
    }
  });
  </script>
  