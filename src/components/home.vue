<script></script>

<template>
    <div class="lg:rounded-2xl bg-[#111111] pt-12 md:py-12 px-6 sm:px-5 md:px-10 lg:px-14 pb-5">
        <div class="heading">
            <h1 class="text-white text-[20px] lg:text-[40px] font-bold leading-[60px] relative">About Me</h1>
            <p class="text-[#A6A6A6] text-[15px] leading-7 pt-[30px] pb-12">5.6 years of experience in all facets of
                Account Department. Seeking a position that can capitalize my acquired knowledge and experience & having
                career
                growth potential.
            </p>
        </div>
        <div class="works">
            <h3 class="text-[35px] text-white font-medium pb-5">What I do !</h3>
        </div>
        <div class="grid gap-8 grid-cols-1">
            <div class="flex gap-4 border-2 border-[#212425] rounded-[0.75rem] p-[1.5rem] bg-transparent">
                <div>
                    <img src="../assets/icon-1.svg" width="40" height="40"
                        class="!w-10 !h-10 object-contain block !max-w-[40px]">
                </div>
                <div class="des">
                    <h3 class="text-white text-xl font-semibold mb-[5px]">Account</h3>
                    <p class=" leading-8 text-[#A6A6A6]">I am a dedicated and detail-oriented accountant with 5.6 years of
                        experience in financial management and reporting. Proficient in Strong analytical and problem-solving
                        skills with a commitment to accuracy and compliance.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heading h1:after {
    content: "";
    left: 13rem;
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
}</style>