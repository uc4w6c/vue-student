<template>
  <a
    class="icon-close"
    href="#"
    @click="closeClick"
  />
</template>

<script>
export default {
  name: 'KbnButton',

  methods: {
    // `click`イベントを発行
    closeClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
.icon-close {
  content: "\E91A";
}
</style>
