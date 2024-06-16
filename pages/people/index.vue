<template>
  <div>
    <AnemoneNavbar />
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-5"
    >
      <div class="tw-text-center tw-mb-10">
        <h1 class="tw-text-5xl tw-font-black Font-titr tw-mb-2">People</h1>
        <h2 class="tw-text-gray-400">Meet our amazing team</h2>
      </div>

      <div class="tw-flex tw-items-center">
        <!-- prev slide button -->
        <button @click="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="tw-size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>

        <!-- visible part carousel  -->
        <div
          class="tw-flex tw-justify-center tw-items-center tw-m-5 tw-overflow-hidden max-sm:tw-w-[32vh] max-sm:tw-mr-2 sm:tw-w-[65vh] lg:tw-w-[95vh] xl:tw-w-[165vh] 2xl:tw-w-[170vh]"
          ref="carousel"
        >
          <!-- whole carousel section -->
          <div
            class="tw-w-fit tw-transition-transform tw-duration-300 tw-whitespace-nowrap"
            ref="inner"
            :style="innerStyles"
          >
            <!-- carousel card section  -->
            <div class="tw-inline-flex" v-for="card in cards" :key="card.id">
              <div
                class="tw-flex tw-flex-col tw-items-center tw-justify-between tw-mx-6 tw-w-[85vh] tw-pb-5 tw-p-5 tw-border tw-border-solid tw-border-stone-900 max-sm:tw-w-[30vh] max-sm:tw-ml-40 max-sm:tw-px-0 sm:tw-w-[30vh] lg:tw-w-[35vh]"
              >
                <div
                  class="tw-w-full tw-flex tw-flex-col tw-items-center tw-mb-10 max-sm:tw-w-[24vh] max-sm:tw-mx- max-sm:tw-text-xs sm:tw-text-xs"
                >
                  <img
                    class="tw-mb-10 tw-red-600 tw-w-full"
                    alt="#"
                    src="/img/people.png"
                  />
                  <h1 class="tw-text-lg tw-mb-2 tw-font-bold">
                    {{ card.name }}
                  </h1>
                  <h3 class="tw-text-md">
                    {{ card.role }}
                  </h3>
                </div>

                <nuxt-link
                  :to="`/people/${card.id}`"
                  class="tw-bg-violet-500 tw-text-white tw-text-md tw-px-6 tw-py-2 max-sm:tw-px-5 lg:tw-px-10"
                >
                  Details
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <!-- next slide button -->
        <button @click="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="tw-size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>

      <!-- Bullets -->
      <ul class="tw-flex tw-my-5 tw-ml-7 tw-justify-center">
        <li
          v-for="(card, index) in cards"
          :key="card.id"
          :class="{
            'tw-bg-gray-700 tw-rotate-45': currentIndex === index,
            'tw-bg-gray-300': currentIndex !== index,
          }"
          class="tw-w-2 tw-h-2 tw-duration-300 tw-mx-1 tw-rounded-sm tw-select-none"
        ></li>
      </ul>
    </div>

    <AnemoneFooter />
  </div>
</template>

<script setup>
import AnemoneFooter from "~/components/anemoneFooter.vue";
import AnemoneNavbar from "~/components/anemoneNavbar.vue";

useHead({
  title: "People",
});

// variables
const carousel = ref(null);
const inner = ref(null);
const innerStyles = ref({});
let step = "";
let transitioning = false;
let currentIndex = ref(0);


//carousel slide
let cards = [];
let employee = [];

// Fetch slide data
const response = await useFetch("/api/employee");
employee = response.data.value;

if (employee && employee.data) {
  cards = employee.data;
  
} else {
  console.error("Invalid API response structure:", employee);
 
}

onMounted(() => {
  setStep();
  resetTranslate();
});

// function to Measure step size
const setStep = () => {
  const innerWidth = inner.value.scrollWidth;
  const totalCards = cards.length;
  step = `${innerWidth / totalCards}px`;
};

// function to next slide
const next = () => {
  if (transitioning) return;

  transitioning = true;

  //bullet next
  if (currentIndex.value < cards.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }

  // run move left animation
  moveLeft();

  // function to push next slide
  afterTransition(() => {
    const card = cards.shift();
    cards.push(card);
    resetTranslate();
    transitioning = false;
  });
};
// function to prev slide
const prev = () => {
  if (transitioning) return;

  transitioning = true;

  //bullet prev
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = cards.length - 1;
  }
  // run move right animation
  moveRight();

  // function to remove prev slide
  afterTransition(() => {
    const card = cards.pop();
    cards.unshift(card);
    resetTranslate();
    transitioning = false;
  });
};

// move left animation
const moveLeft = () => {
  innerStyles.value = {
    transform: `translateX(-${step}) translateX(-${step})`,
  };
};
// move right animation
const moveRight = () => {
  innerStyles.value = {
    transform: `translateX(${step}) translateX(-${step})`,
  };
};

//add animation
const afterTransition = (callback) => {
  const listener = () => {
    callback();
    inner.value.removeEventListener("transitionend", listener);
  };
  inner.value.addEventListener("transitionend", listener);
};

//remove animation
const resetTranslate = () => {
  innerStyles.value = {
    transition: "none",
    transform: `translateX(-${step})`,
  };
};
</script>

<style scoped>
* {
  font-family: "Roboto";
}
.Font-titr {
  font-family: "Rosamila";
}
</style>
