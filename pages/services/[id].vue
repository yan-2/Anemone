<template>
  <div class="relative grid grid-cols-1 grid-rows-1 justify-center items-center px-8 text-center">
    <!-- Service Information Box -->
    <div class="bg-neutral border border-primary max-w-4xl p-4 rounded-lg z-10">
      <div v-if="service">
        <h2 class="font-rosamila text-5xl text-primary">
          {{ service.name }}
        </h2>
        <p class="text-secondary mb-6">
          {{service.tag}}
        </p>
        <!-- Responsive grid -->
        <div :class="responsiveGridClass">
          <!-- Description + Benefits-->
          <div class="text-left">
            <h3 class="text-l font-bold mb-2">Description & Benefits</h3>
            <p class="text-primary mb-4">
              {{ service.description }}
            </p>
          </div>
          <div class="flex justify-center">
              <img
                :src="service.pic"
                alt="Website testimonial"
                class="min-w-2/3 translate-y-2 z-20"
              >
            </div>
          <!-- Availability -->
          <div class="text-left">
            <h3 class="text-l font-bold mb-2">Availability</h3>
            <p class="text-primary mb-4">
              {{ service.availability }}
            </p>
            <p class="text-primary mb-4">
              To facilitate scheduling, we kindly request that you reserve your spot by emailing us at the address <a href="mailto:counseling@anemone.it" class="text-blue-500 underline">counseling@anemone.it</a>
            </p>
          </div>

        </div>
        <div class="flex items-center justify-center mt-8">
        </div>
          <p class="text-secondary mt-8 italic">
            The compassionate team of attorneys and legal advocates not only provided me with invaluable legal guidance but also stood by my side every step of the way. - Maria, 37
          </p>
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

interface Service {
  id: number;
  name: string;
  description: string;
  tag: string;
  benefits: string;
  availability: string;
  testimonial: string;
  pic: string;
}

const services = ref<Service[]>([]);

const fetchServices = async () => {
  const { data } = await useFetch<{ data: Service[] }>('/api/service');
  if (data.value) {
    services.value = data.value.data.map(service => ({
      ...service,
      pic: service.pic.startsWith('/') ? service.pic : `/${service.pic}`, // Ensure correct path

    }));
    console.log('Fetched services:', services.value);
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

const { width, height } = useWindowSize();

const responsiveGridClass = computed(() => {
  return width.value > height.value ? 'grid grid-cols-3 gap-8' : 'grid grid-rows-3 gap-8';
});
</script>
