<template>
    <div>
      <AnemoneNavbar />
      <ul>
      <li v-for="service in services" :key="service.id">
        <NuxtLink :to = "`/services/${service.id}`"> {{ service.name }}</NuxtLink>
      </li>
    </ul>
      <AnemoneFooter />
    </div>
</template>
  
<script setup lang="ts">
  import AnemoneFooter from '~/components/anemoneFooter.vue'
  import AnemoneNavbar from '~/components/anemoneNavbar.vue'

  useHead({
    title: 'Service',
  })

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
    console.log(services.value)
  }
};

onMounted(fetchServices);
  
</script>
  