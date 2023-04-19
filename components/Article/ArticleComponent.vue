<template>
  <article class="relative">
    <div class="article-cover">
      <!-- <nuxt-image src="~/assets/img/Rectangle 4.jpg" /> -->
    </div>
    <div class="article-detail">
      <p class="article-detail__category">

      </p>
      <h1 class="article-detail__title"></h1>
      <div class="article-detail__date-duration">
        <NuxtLink />
      </div>
    </div>
  </article>
</template>

<!-- <script>
import { NuxtLink } from '~/.nuxt/components';

  export default {
    props: {
        article: Object,
    },
    setup(props) {
        console.log(props.article);
    },
    components: { NuxtLink }
};
</script> -->

<script setup>
 const props = defineProps({
    article: Object
  });

  console.log(props.article)
</script>
<style scoped></style>
