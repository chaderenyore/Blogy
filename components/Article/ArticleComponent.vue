<template>
  <article class="relative basis-full md:basis-6/12 lg:basis-5/12">
    <div class="article-cover">
      <nuxt-img :src="imageUrl" class="h-[100%] w-[100%]" />
    </div>
    <div
      class="relative article-detail bg-[#F7F7F7] w-[90%] pt-4 pb-2 -mt-7 z-10 flex flex-col gap-y-2 pl-2"
    >
      <p class="article-detail__category flex items-center">
        <span
          class="w-6 h-[2px] inline-block bg-[#FB743E] mr-1 text-[#272343] text-sm"
        ></span>
        {{ categoryName }}
      </p>
      <h1
        class="article-detail__title font-extrabold text-base md:text-xl lg:text-2xl"
      >
        {{ title }}
      </h1>
      <div
        class="article-detail__date-duration flex gap-x-2 items-center text-xs text-[#6D7280]"
      >
        {{ publishedDate }}
        <span
          class="inline-block rounded-full w-[5px] h-[5px] bg-[#6D7280] -mt-1"
        ></span>
        4 min read
      </div>
      <div class="article-link text-[#272343] text-sm">
        <NuxtLink :to="slugLink" class="flex items-center gap-x-1"
          >Read Article
          <span><img src="~/assets/img/Pointer.svg" alt="" /></span
        ></NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
  const props = defineProps({
    article: Object,
  });
  const route = useRoute();

  const imageUrl = computed(() => {
    return `https:${props.article.fields.coverPhoto.fields.file.url}`;
  }) 

  const rawCategoryName = props.article.fields.category.fields.categoryName;
  const categoryName = computed(() => {
    let upperCaseFirstLetter = rawCategoryName.charAt(0).toUpperCase();
    return `${upperCaseFirstLetter}${rawCategoryName.slice(1)}`;
  });

  const title = props.article.fields.title;

  // Returned date is an ISO date, using new Date formats it to UTC.
  const rawDate = new Date(props.article.sys.createdAt);

  const dateFormat = new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
  });

  //Format UTC date now with the configurations set above.
  const publishedDate = dateFormat.format(rawDate);

  const slug = props.article.fields.slug;
  const slugLink = computed(() => {
    return `${route.params.category}/${slug}`;
  });
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
