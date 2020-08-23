<template>
  <div class="task-list">
    <div>{{ title.name }}</div>
    <div
      v-for="task in title.taskList"
      :key="task.id"
      class="list-cards"
    >
      <a href="#">{{ task.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KbnTaskList',

  props: {
    title: {
      type: Object,
      required: true
    }
  }
  /*
  components: {
    KbnLoginForm
  },
  */

  /*
  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
  */
}
</script>

<style scoped>
.task-list {
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
}
.list-cards {
  flex: 1 1 auto;
  margin-bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 4px;
  padding: 0 4px;
  z-index: 1;
  min-height: 0;
}
</style>
