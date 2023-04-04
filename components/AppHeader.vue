<template>
  <div>
    <header class="header">
      <div
        class="container w-[90%] h-[80px] m-auto flex justify-between items-center"
      >
        <div class="header-logo">
          <img src="~/assets/img/Blogy.svg" alt="Your gateway to Blogging" />
        </div>
      </div>
      <div class="header-items--mobile fixed top-0 right-0 h-[100vh] w-[50%] bg-[#C4C4C4] flex flex-col items-center justify-center transition-all duration-50 ease-in  no-display">
        <Icon class="absolute top-5 right-10 cursor-pointer" name="ion:close-round" size="1.5rem" />
        <a href="" class="nav-link">Home</a>
        <a href=""  class="nav-link">Travel</a>
        <a href="" class="nav-link">Food</a>
        <a href="" class="nav-link">Lifestyle</a>
        <a href="" class="nav-link">Fashion</a>
      </div>
    </header>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  html,
  body {
    margin: 0;
  }

  .nav-link  {
    @apply mt-2 text-base;
  }

  .no-display {
    transform: translateX(100%);
  }

  .allow-display {
    transform: translateX(0);
  }
</style>
