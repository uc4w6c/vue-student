<template>
  <div class="window-overlay">
    <div class="window">
      <div class="window-wrapper">
        <div class="card-detail-window">
          <div class="card-detail-title">
            <textarea
              v-model="task.title"
              class="card-title" />
          </div>
          <div class="card-detail-description">
            <textarea
              v-model="task.description"
              class="card-description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KbnTaskDetailModal',

  props: {
    task: {
      type: Object,
      require: false,
      'default': () => ({
        title: '',
        description: ''
      })
    }
  } // ,
  /*
  methods: {
    handleClick (ev) {

    }
  }
  */
}
</script>

<style scoped>
.window-overlay {
  /*要素を重ねた時の順番*/
  z-index: 1;

  /*画面全体を覆う設定*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.window {
  background-color: #f4f5f7;
  border-radius: 2px;
  display: block;
  margin: 48px 0 80px;
  overflow: hidden;
  position: relative;
  height: 300px;
  width: 600px;
  z-index: 25;
}
.window-wrapper {
}
.card-detail-window {
  min-height: 600px;
}
.card-detail-title {
  margin: 12px 40px 8px 56px;
  min-height: 32px;
  position: relative;
  z-index: 1;
}
.card-title {
  height: 32px;
  background: #fff;
  box-shadow: none;
  resize: none;
  width: 100%;
}
.card-detail-description {
  margin: 12px 40px 8px 56px;
}
.card-description {
  min-height: 108px;
  background: #fff;
  box-shadow: none;
  resize: none;
  width: 100%;
}
</style>
