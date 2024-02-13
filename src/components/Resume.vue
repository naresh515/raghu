<script></script>

<template>
    <div class="rounded-2xl bg-[#111111]">
        <div class="pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14 pb-5">
            <div class="heading">
                <h1 class="text-white text-[20px] lg:text-[40px] font-bold leading-[60px] relative">Resume</h1>
            </div>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-[30px] ">
                <div class="flex flex-col gap-4 bg-transparent">
                    <div class="flex items-center gap-3">
                        <span class="text-[1.75rem] text-[#F95054]"><i class="fa-solid fa-briefcase"></i></span>
                        <h2 class="text-white text-[1.625rem] font-medium leading-[60px]">Education</h2>
                    </div>
                    <div class="border-2 p-[1rem] border-[#212425] rounded-[0.75rem]">
                        <span class="leading-8 text-[#A6A6A6]">2014-2015</span>
                        <h3 class="text-white text-xl font-semibold">12th</h3>
                        <p class="leading-8 text-[#A6A6A6]">RBSE</p>
                    </div>
                    <div class="border-2 p-[1rem] border-[#212425] rounded-[0.75rem]">
                        <span class="leading-8 text-[#A6A6A6]">2015-2018</span>
                        <h3 class="text-white text-xl font-semibold">B.A.</h3>
                        <p class="leading-8 text-[#A6A6A6]">Govt. Dungar College MGSU, Bikaner</p>
                    </div>
                    <div class="border-2 p-[1rem] border-[#212425] rounded-[0.75rem]">
                        <span class="leading-8 text-[#A6A6A6]">2018-2021</span>
                        <h3 class="text-white text-xl font-semibold">M.A</h3>
                        <p class="leading-8 text-[#A6A6A6]">Govt. Dungar College MGSU, Bikaner</p>
                    </div>
                </div>
                <div class="flex flex-col gap-4 bg-transparent">
                    <div class="flex items-center gap-3">
                        <span class="text-[1.75rem] text-[#F95054]"><i class="fa-solid fa-graduation-cap"></i></span>
                        <h2 class="text-white text-[1.625rem] font-medium leading-[60px]">Experience</h2>
                    </div>
                    <div class="border-2 p-[1rem] border-[#212425] rounded-[0.75rem]">
                        <span class="leading-8 text-[#A6A6A6]">6 months</span>
                        <h3 class="text-white text-xl font-semibold">Sales Executive</h3>
                        <p class="leading-8 text-[#A6A6A6]">Brij hero two wheeler showroom, Bikaner</p>
                    </div>
                    <div class="border-2 p-[1rem] border-[#212425] rounded-[0.75rem]">
                        <span class="leading-8 text-[#A6A6A6]">2 years</span>
                        <h3 class="text-white text-xl font-semibold">Billing Department</h3>
                        <p class="leading-8 text-[#A6A6A6]">Mahak Creations, Surat</p>
                    </div>
                    <div class="border-2 p-[1rem] border-[#212425] rounded-[0.75rem]">
                        <span class="leading-8 text-[#A6A6A6]">3 years</span>
                        <h3 class="text-white text-xl font-semibold">Account</h3>
                        <p class="leading-8 text-[#A6A6A6]">Ganpati Bajaj two wheeler showroom, Bikaner</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heading h1:after {
    content: "";
    left: 11rem;
    width: 12rem;
    position: absolute;
    top: 50%;
    height: 0.125rem;
    transform: translateY(-50%);
    border-radius: 0.375rem;
    background-image: linear-gradient(to right, var(--color1, #fa5252), var(--color2, #dd2476));
}

@media screen and (max-width: 800px) {
    .heading h1:after {
        left: 7rem;
        width: 10rem;
    }
}
</style>