<template>
  <div class="w-full max-w-7xl mx-auto px-4 text-primary">
    <!-- ALFREUD LOGO  -->
    <div class="flex items-center justify-center py-4 mb-8 space-y-2">
      <div class="text-center">
        <!-- Title -->
        <div class="font-rosamila text-5xl">
          Center
        </div>
        <!-- Subtitle -->
        <div class="text-secondary-dark">
          Let Us Introduce Ourselves
        </div>
      </div>
    </div>
    <!-- First box -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
      <div class="bg-neutral p-6 border border-primary rounded-lg w-full max-w-[425px] h-[400px] min-w-[325px] aspect-[5/6] overflow-auto">
        <h2 class="font-bold text-base mb-4">
          History and Mission
        </h2>
        <p>
          At Anemone, our mission is clear: empower women facing adversity, including violence and family maltreatment. Since 1998, we've been a trusted ally for women in the metropolitan area of Milan, offering support, education, and advocacy. With over 25 years of service, we're committed to creating a safe, nurturing community where every woman feels valued and supported on her path to healing and independence.
        </p>
      </div>
      <div class="bg-neutral p-6 border border-primary rounded-lg w-full max-w-[425px] h-[400px] min-w-[325px] aspect-[5/6] overflow-auto">
        <h2 class="font-bold text-base mb-4">
          Opening Hours
        </h2>
        <p class="mb-4">
          Our doors are open every day to ensure you have support whenever you need it
        </p>
        <h3 class="font-bold my-2">
          Monday to Friday
        </h3>
        <p>
          <span class="text-hyperlinks">8:00 AM</span> to <span class="text-hyperlinks">9:00 PM</span>
        </p>
        <h3 class="font-bold my-2">
          Saturday and Sunday
        </h3>
        <p>
          <span class="text-hyperlinks">10:00 AM</span> to <span class="text-hyperlinks">7:00 PM</span>
        </p>
        <h3 class="font-bold my-2">
          Address
        </h3>
        <p class="text-hyperlinks">
          Via Vittime della Violenza 24, MI
        </p>
      </div>
      <div class="border border-primary rounded-lg w-full max-w-[425px] h-[400px] min-w-[325px] aspect-[5/6] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28287.838010618838!2d9.490880733149849!3d45.29814216637437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47812c22484b7b2b%3A0x82e30781a28f0d75!2sVia%20Vittime%20della%20Violenza%2C%2026900%20Lodi%20LO!5e0!3m2!1sit!2sit!4v1719150273224!5m2!1sit!2sit"
          class="w-full h-full"
          loading="lazy"
          aria-label="Interactive Map showing centre location"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: 'Center',
})
</script>
