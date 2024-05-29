<template>
    <div>
      <AnemoneNavbar />
      <ul>
      <li v-for="employee in employees" :key="employee.id">
        <NuxtLink :to = "`/people/${employee.id}`"> {{ employee.name }}</NuxtLink>
      </li>
    </ul>
      <AnemoneFooter />
    </div>
</template>
  
<script setup lang="ts">
  import AnemoneFooter from '~/components/anemoneFooter.vue'
  import AnemoneNavbar from '~/components/anemoneNavbar.vue'

  useHead({
    title: 'People',
  })

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
    console.log(employees.value)
  }
};

onMounted(fetchEmployees);
  
</script>
  