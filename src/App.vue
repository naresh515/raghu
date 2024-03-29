<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const mobileMenuActive = ref(false);
const route = useRoute();

const isMobileDevice = ref(window.innerWidth <= 800);
const mobileClass = ref(isMobileDevice.value ? 'mobile' : 'desktop');

const toggleMobileMenu = () => {
  mobileMenuActive.value = !mobileMenuActive.value;
};

const handleLinkClick = () => {
  mobileMenuActive.value = false;
};

const updateMobileStatus = () => {
  isMobileDevice.value = window.innerWidth <= 800;
  mobileClass.value = isMobileDevice.value ? 'mobile' : 'desktop';
};

onMounted(() => {
  window.addEventListener('resize', updateMobileStatus);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMobileStatus);
});

watch(() => window.innerWidth, () => {
  updateMobileStatus();
});

const showTopContainer = computed(() => {
  return isMobileDevice.value ? (route.path === '/') : true;
});
</script>

<template>
  <div class="lg:mx-[40px]">
    <nav class="bg-black m-0 p-4 flex justify-end lg:hidden">
      <div class="lg:hidden w-[30px] h-[30px] block" @click="toggleMobileMenu">
        <div class="hamburger-icon bg-[#EF4060] w-[40px] h-[40px] rounded-full flex flex-col items-center justify-center"
          :class="{ 'active': mobileMenuActive }" id="mobile-menu">
          <span class="line1 block w-[20px] h-[2px] bg-[#fff] mb-[6px]"></span>
          <span class="line2 block w-[20px] h-[2px] bg-[#fff] mb-[6px]"></span>
          <span class="line3 block w-[20px] h-[2px] bg-[#fff] mb-[6px]"></span>
        </div>
      </div>
    </nav>
    <div class="bg-[#212425] absolute left-0 z-10 right-0 hidden lg:!hidden" :class="{ '!block': mobileMenuActive }">
      <div class="mx-[10px] my-3">
        <RouterLink to="/" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium "><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i class="fa-solid fa-house"></i>
              Home</a></button>
        </RouterLink>
      </div>
      <div class="mx-[10px] my-3">
        <RouterLink to="resume" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i
                class="fa-regular fa-file-lines"></i>Resume</a></button>
        </RouterLink>
      </div>
      <div class="mx-[10px] my-3">
        <RouterLink to="contact" class="w-full" @click="handleLinkClick">
          <button
            class="h-10 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
              class="text-white flex items-center text-[15px] gap-[10px] px-3"><i
                class="fa-regular fa-address-book"></i>Contact</a></button>
        </RouterLink>
      </div>
    </div>
    <div class="sub_container flex flex-col lg:grid grid-cols-[400px,1fr] lg:my-[50px] gap-4 lg:gap-14">
      <div :class="[mobileClass]" v-if="showTopContainer"
        class="top_container relative lg:mt-[190px] mt-[230px] w-full mx-auto text-center bg-[#111111] p-6 lg:rounded-[20px] h-[500px] lg:h-[550px]">
        <div class="flex flex-col items-center">
          <img src="./assets/IMG-20240213-WA0000.jpg"
            class="h-[240px] w-[240px] absolute rounded-[20px] bg-center top-0 object-cover mt-[-200px]">
          <h2 class="mt-6 mb-2 text-3xl font-semibold text-white">Raghuveer Kachhawa</h2>
          <span class="mb-4 text-[#A6A6A6] inline-block px-5 py-1.5 rounded-lg bg-[#1D1D1D] ">Account</span>
        </div>
        <div class="contact_info bg-[#1D1D1D] p-2 lg:p-7 rounded-2xl my-7">
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-mobile-screen-button text-[#E93B81]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Phone</span>
              <span><a href="tel:9588259271" class="text-white hover:text-[#FA5252]">9588259271</a></span>
            </div>
          </div>
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-location-dot text-[#6AB5B8]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Location</span>
              <span><a class="text-white">Bikaner, Rajasthan, India</a></span>
            </div>
          </div>
          <div class="flex py-2.5 border-b border-[#3D3A3A] gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-envelope text-[#FD7590]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Email</span>
              <span><a href="mailto:raghuveerkachhawa2@gmail.com"
                  class="text-white hover:text-[#FA5252]">raghuveerkachhawa2@gmail.com</a></span>
            </div>
          </div>
          <div class="flex py-2.5 gap-2 lg:gap-3.5">
            <button class="w-[2.5rem] h-[2.5rem] rounded-lg bg-[#000000]"><i
                class="fa-solid fa-calendar-days text-[#C17CEB]"></i></button>
            <div class="flex flex-col items-baseline">
              <span class="text-xs text-white">Birthday</span>
              <span><a class="text-white">March 17, 1998</a></span>
            </div>
          </div>
        </div>
      </div>
      <div class="main_container">
        <div
          class="lg:w-[526px] hidden lg:h-[144px] p-[15px] lg:block lg:p-[30px] ml-auto mb-10 lg:rounded-[16px] bg-[#111111]">
          <div class="tabs flex">
            <RouterLink to="/" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium "><a
                  class="text-white flex flex-col"><i class="fa-solid fa-house"></i> Home</a></button>
            </RouterLink>
            <RouterLink to="resume" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-regular fa-file-lines"></i>Resume</a></button>
            </RouterLink>
            <RouterLink to="contact" class="w-full mx-2.5">
              <button
                class="h-20 rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-[#212425] w-full cursor-pointer font-medium"><a
                  class="text-white flex flex-col"><i class="fa-regular fa-address-book"></i>Contact</a></button>
            </RouterLink>
          </div>
        </div>
        <div class="tab-area">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-image: url(./assets/bgtwo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.socail_icon button:hover,
.contact_info button:hover .main_container .tabs button:hover {
  background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
  transition: all .5s ease-in-out;
}

.socail_icon button:hover a,
.contact_info button:hover i {
  color: white !important;
  transition: all .3s ease-in-out;
}

.router-link-active button {
  background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}

.active .line1 {
  transform: translateY(10px) rotate(50deg);
}

.active .line2 {
  opacity: 0;
  transition: all 0.2s ease-out;
}

.active .line3 {
  transform: translateY(-8px) rotate(-45deg);
}
</style>
