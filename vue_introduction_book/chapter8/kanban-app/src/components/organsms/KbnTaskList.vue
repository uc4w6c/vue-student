<template>
  <div class="task-list">
    <div class="list-header">
      <textarea
        v-model="title.name"
        class="list-header-name" />
    </div>
    <div
      v-for="task in title.taskList"
      :key="task.id"
      class="list-cards"
    >
      <a
        class="list-card"
        href="#"
      >
        {{ task.name }}
      </a>
    </div>
    <div class="card-composer-container">
      <a
        href="#"
        class="open-card-composer"
        @click="handleClick"
      >
        <span class="icon-sm icon-add"/>
        <span>タスクを追加</span>
      </a>
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
  },

  methods: {
    // `click`イベントを発行
    handleClick (ev) {
      this.$emit('addTask', ev)
    }
  }
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
.list-card {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
}
.list-header {
  flex: 0 0 auto;
  padding: 10px 8px;
  position: relative;
  min-height: 20px;
}
.list-header-name {
  background: transparent;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 600;
  margin: -4px 0;
  height: 20px;
  min-height: 20px;
  padding: 4px 8px;
  resize: none;
  max-height: 256px;
  border: none;
}
.card-composer-container {
  min-height: 38px;
  max-height: 38px;
  display: flex;
  justify-content: space-between;
}
.icon-sm {
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  width: 20px;
}
.icon-add {
  content: "\E901";
}
.open-card-composer {
  border-radius: 3px;
  color: #5e6c84;
  display: block;
  flex: 1 0 auto;
  margin: 2px 0 8px 8px;
  padding: 4px 8px;
  position: relative;
  text-decoration: none;
  user-select: none;
}
</style>
