<template>
  <main>
    <section class="header-nav bg-[#F5F5F5]">
      <div
        class="container w-[90%] h-[80px] m-auto flex flex-col justify-center py-16"
      >
        <h1 class="heading-text text-[#272343] text-2xl text-center font-bold">
          '{{ categoryNameHeading }}' Here's what we've got
        </h1>
      </div>
    </section>
    <section v-for="article in categoryArticles">
      <ArticleComponent :article="article" />
    </section>
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
  contentfulClient
    .getEntries({
      content_type: 'blogPost',
      'fields.category.sys.contentType.sys.id': 'category',
      'fields.category.fields.categoryName': categoryName,
    })
    .then((response) => {
      categoryArticles = response.items;
      console.log(categoryArticles);
      
    })
    .catch(console.error);
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap');

  .heading-text {
    font-family: 'PT Serif';
  }
</style>
