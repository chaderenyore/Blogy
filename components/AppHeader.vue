<template>
  <header class="header">
    <div
      class="md:hidden backdrop no-display transition-all duration-250 ease-linear"
      @click="toggleMenu"
    ></div>
    <div
      class="container w-[90%] lg:w-[72%] h-[80px] m-auto flex justify-between items-center"
    >
      <div class="header-logo">
        <img src="~/assets/img/Blogy.svg" alt="Your gateway to Blogging" />
      </div>
      <div
        class="header-items__desktop hidden md:flex items-center justify-around content"
      >
        <NuxtLink to="/" class="nav-link__desktop mr-2">Home</NuxtLink>
        <NuxtLink to="/coding" class="nav-link__desktop mr-2">Coding</NuxtLink>
        <NuxtLink to="/lifestyle" class="nav-link__desktop mr-2"
          >Lifestyle</NuxtLink
        >
        <NuxtLink to="/events" class="nav-link__desktop mr-2">Events</NuxtLink>
        <NuxtLink to="/travel" class="nav-link__desktop mr-2">Travel</NuxtLink>

        <div
          class="header-items__desktop--searchbar bg-[#F5F5F5] text-[#6D7280] p-2"
        >
          <Icon name="ion:search" class="mr-1" />
          <input
            required
            type="search"
            name="search"
            id="search"
            class="bg-[inherit] text-[inherit] focus:outline-transparent"
          />
        </div>
      </div>
      <div class="hamburger-menu md:hidden">
        <Icon
          name="ion:md-menu"
          size="2.8rem"
          class="cursor-pointer mt-1"
          @click="toggleMenu"
        />
      </div>
    </div>
    <div
      class="header-items__mobile fixed top-0 right-0 h-[100vh] w-[50%] bg-[#C4C4C4] flex flex-col items-center justify-center transition-all duration-150 ease-in no-display md:hidden"
    >
      <Icon
        class="absolute top-6 right-8 cursor-pointer"
        name="ion:close-round"
        size="2.3rem"
        @click="toggleMenu"
      />
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/coding" class="nav-link">Coding</NuxtLink>
      <NuxtLink to="/lifestyle" class="nav-link">Lifestyle</NuxtLink>
      <NuxtLink to="/events" class="nav-link">Events</NuxtLink>
      <NuxtLink to="/travel" class="nav-link">Travel</NuxtLink>
    </div>
  </header>
</template>

<script setup>
  const toggleMenu = () => {
    const menu = document.querySelector('.header-items__mobile');
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

<style scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  .nav-link {
    @apply mt-8 text-2xl;
  }

  .no-display {
    transform: translateX(100%);
  }
</style>
