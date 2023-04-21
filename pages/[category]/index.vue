<template>
  <main>
    <section class="header-nav bg-[#F5F5F5]">
      <div
        class="container w-[90%] lg:w-[75%] h-[80px] m-auto flex flex-col justify-center py-16"
      >
        <h1 class="heading-text text-[#272343] text-2xl text-center font-bold">
          '{{ categoryNameHeading }}' Here's what we've got
        </h1>
      </div>
    </section>
    <div class="container w-[90%] lg:w-[75%] m-auto mt-10 gap-4">
      <section class="flex flex-col justify-center md:flex-row lg:justify-start gap-8 lg:justify-around flex-wrap">
        <ArticleComponent
          v-for="article in categoryArticles"
          :key="article.sys.id"
          :article="article"
        />
      </section>
    </div>
  </main>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const contentfulClient = nuxtApp.$contentfulClient;

  const route = useRoute();
  const categoryName = route.params.category;
  const categoryNameHeading = computed(() => {
    let upperCaseFirstLetter = categoryName.charAt(0).toUpperCase();
    return `${upperCaseFirstLetter}${categoryName.slice(1)}`;
  });

  let categoryArticles;
  await contentfulClient
    .getEntries({
      content_type: 'blogPost',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.categoryName': categoryName,
    })
    .then((response) => {
      categoryArticles = response.items;
    })
    .catch(console.error);
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');

  .heading-text {
    font-family: 'PT Serif';
  }
</style>
