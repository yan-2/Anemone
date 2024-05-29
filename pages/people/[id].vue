<template>
  <div>
    <AnemoneNavbar />
    <div v-if="employee">
      <p>{{ employee.name }}</p>
      <p>{{ employee.role }}</p>
      <p>{{ employee.cv }}</p>
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
  title: 'person',
});

const route = useRoute();
const id = parseInt(route.params.id as string, 10);

interface Employee {
  id: number;
  name: string;
  role: string;
  cv: string;
  service: any[];
  project: any[];
}

const employees = ref<Employee[]>([]);

const fetchEmployees = async () => {
  const { data } = await useFetch<{ data: Employee[] }>('/api/employee');
  if (data.value) {
    employees.value = data.value.data;
    console.log(employees.value);
  }
};

onMounted(fetchEmployees);

const employee = computed(() => employees.value.find(e => e.id === id));

</script>
