<template>
  <div>
    <header class="header">
      <div
        class="backdrop no-display transition-all duration-250 ease-linear"
        @click="toggleMenu"></div>
      <div
        class="container w-[90%] h-[80px] m-auto flex justify-between items-center"
      >
        <div class="header-logo">
          <img src="~/assets/img/Blogy.svg" alt="Your gateway to Blogging" />
        </div>
        <div class="mobile-menu md:hidden">
          <Icon
            name="ion:md-menu"
            size="2.8rem"
            class="cursor-pointer mt-1"
            @click="toggleMenu"
          />
        </div>
      </div>
      <div
        class="header-items--mobile fixed top-0 right-0 h-[100vh] w-[50%] bg-[#C4C4C4] flex flex-col items-center justify-center transition-all duration-150 ease-in no-display md:hidden"
      >
        <Icon
          class="absolute top-6 right-8 cursor-pointer"
          name="ion:close-round"
          size="2.3rem"
          @click="toggleMenu"
        />
        <a href="" class="nav-link">Home</a>
        <a href="" class="nav-link">Travel</a>
        <a href="" class="nav-link">Food</a>
        <a href="" class="nav-link">Lifestyle</a>
        <a href="" class="nav-link">Fashion</a>
      </div>
    </header>
  </div>
</template>

<script setup>
  const toggleMenu = () => {
    const menu = document.querySelector('.header-items--mobile');
    const backdrop = document.querySelector('.backdrop');
    if (menu.classList.contains('no-display')) {
      menu.classList.remove('no-display');
      backdrop.classList.remove('no-display');
    } else {
      menu.classList.add('no-display');
      backdrop.classList.add('no-display');
    }
  };
</script>

<style>
  html,
  body {
    margin: 0;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    @apply mt-8 text-3xl;
  }

  .no-display {
    transform: translateX(100%);
  }
</style>
