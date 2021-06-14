<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>


<style land="scss">
@import "~/scss/main"
</style>