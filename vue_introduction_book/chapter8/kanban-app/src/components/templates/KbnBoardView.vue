<template>
  <KbnBoardTask @addTask="handleClick" />
</template>

<script>
import KbnBoardTask from '@/components/organsms/KbnBoardTask.vue'

export default {
  name: 'KbnBoardView',

  components: {
    KbnBoardTask
  },

  methods: {
    handleClick (ev) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(err => this.throwReject(err))
    }
  }
}
</script>
