<template>
  <div>
    <header class="header">
      <div
        class="container w-[90%] h-[80px] m-auto flex justify-between items-center"
      >
        <div class="header-logo">
          <img src="~/assets/img/Blogy.svg" alt="Your gateway to Blogging" />
        </div>
        <div class="header-items--mobile h-[100vh] bg-[#C4C4C4] w-[50vw]">
          <a href="">Home</a>
          <a href="">Travel</a>
          <a href="">Food</a>
          <a href="">Lifestyle</a>
          <a href="">Fashion</a>
        </div>
        <div class="header-items--desktop hidden">
          <div class="header-items__links">
            <a href="">Home</a>
            <a href="">Travel</a>
            <a href="">Food</a>
            <a href="">Lifestyle</a>
            <a href="">Fashion</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
