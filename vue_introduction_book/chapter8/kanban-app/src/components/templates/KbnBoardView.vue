<template>
  <div id="main">
    <KbnBoardTask @addTask="handleClick" />

    <div
      v-show="showContent"
      id="overlay"
      @click="closeModal"
    >
      <KbnTaskDetailModal @stopEvent="stopEvent" />
    </div>
  </div>
</template>

<script>
import KbnBoardTask from '@/components/organsms/KbnBoardTask.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

export default {
  name: 'KbnBoardView',

  components: {
    KbnBoardTask,
    KbnTaskDetailModal
  },

  data () {
    return {
      showContent: false
    }
  },

  methods: {
    handleClick (ev) {
      this.showContent = true
    },
    closeModal () {
      this.showContent = false
    },
    stopEvent () {
      console.log('stop')
      event.stopPropagation()
    }
  }
}
</script>
