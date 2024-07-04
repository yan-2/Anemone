<template>

  <div id="map" ref="map" class="map"></div>
</template>

<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const map = ref(null)

onMounted(() => {
  //coordinate location and Zoom
  map.value = L.map('map').setView([45.30225535338585, 9.496247962158687], 13) 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map.value)

//map pointer and popUp
  const marker = L.marker([45.30225535338585, 9.496247962158687]).addTo(map.value)
  marker.bindPopup("<b>Anemone!</b>").openPopup()
})
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
