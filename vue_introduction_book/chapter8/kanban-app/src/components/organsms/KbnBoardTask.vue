<template>
  <div id="board">
    <!--
    <KbnTaskList
      v-for="title in titleList"
      :key="title.id"
      :title="title"
    />
    -->
    <div
      v-for="title in titleList"
      :key="title.id"
      class="list-wrapper"
    >
      <KbnTaskList
        :title="title"
        @addTask="handleClick" />
    </div>
  </div>
</template>

<script>
import KbnTaskList from '@/components/organsms/KbnTaskList.vue'

export default {
  name: 'KbnBoardTask',

  components: {
    KbnTaskList
  },

  data () {
    return {
      titleList: [
        {
          id: 1,
          name: 'TODO',
          taskList: [
            { id: 1, name: 'タスク1', description: 'タスク1説明' },
            { id: 2, name: 'タスク2', description: 'タスク2説明' }
          ]
        },
        {
          id: 2,
          name: 'WIP',
          taskList: [
            { id: 3, name: 'タスク3', description: 'タスク3説明' }
          ]
        },
        {
          id: 3,
          name: 'DONE',
          taskList: [
            { id: 4, name: 'タスク4', description: 'タスク4説明' }
          ]
        }
      ]
    }
  },

  methods: {
    // `click`イベントを発行
    handleClick (ev) {
      this.$emit('addTask', ev)
    }
  }
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
.board {
  user-select: none;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.list-wrapper {
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}
</style>
