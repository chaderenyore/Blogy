<template>
  <article class="relative basis-full md:basis-6/12  lg:basis-5/12">
    <div class="article-cover">
      <!-- <nuxt-image src="~/assets/img/Rectangle 4.jpg" /> -->
      <TwicImg
        src="https://assets.twicpics.com/examples/football.jpg"
        class="h-[100%] w-[100%]"
      />
    </div>
    <div
      class="relative article-detail bg-[#F7F7F7] w-[90%] pt-4 pb-2 -mt-7 z-10 flex flex-col gap-y-2 pl-2"
    >
      <p class="article-detail__category flex items-center">
        <span
          class="w-6 h-[2px] inline-block bg-[#FB743E] mr-1 text-[#272343] text-sm"
        ></span>
        Travel
      </p>
      <h1 class="article-detail__title font-extrabold text-base md:text-3xl">
        How to get started with UI/UX in Figma
      </h1>
      <div
        class="article-detail__date-duration flex gap-x-2 items-center text-xs text-[#6D7280]"
      >
        April 19, 2023
        <span
          class="inline-block rounded-full w-[5px] h-[5px] bg-[#6D7280] -mt-1"
        ></span>
        4 min read
      </div>
      <div class="article-link text-[#272343] text-sm">
        <NuxtLink to="/coding/helo" class="flex items-center gap-x-1"
          >Hello World <span><img src="~/assets/img/Pointer.svg" alt="" /></span
        ></NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
  const props = defineProps({
    article: Object,
  });

  console.log(props.article);
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Poppins&display=swap');

  .article-detail__title {
    font-family: 'PT Serif';
  }

  .article-link {
    font-family: 'Poppins', sans-serif;
  }
</style>
