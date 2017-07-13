<template>
  <div id="app">
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        Testing
      </nav>
      <main id="panel">
        Panel.
      </main>
    </Slideout>
  </div>
</template>

<script lang="ts" src="./App.ts">
</script>

<style lang="css">
</style>
