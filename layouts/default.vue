<template>
  <div>
    <AppHeader />
      <slot />
    <AppFooter />
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

html, body {
  padding: 0;
}

input, button, textarea, select {
  font: inherit;
}

</style>