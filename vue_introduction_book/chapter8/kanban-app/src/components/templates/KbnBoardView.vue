<template>
  <div id="main">
    <KbnBoardTask
      ref="boad"
      @addTask="handleClick"
    />

    <div
      v-show="showContent"
      id="overlay"
      @click="closeModal"
    >
      <KbnTaskDetailModal
        @stopEvent="stopEvent"
        @changeTask="changeTask"
      />
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
    },
    changeTask (task) {
      this.$refs.boad.changeTask(task)
    }
  }
}
</script>
