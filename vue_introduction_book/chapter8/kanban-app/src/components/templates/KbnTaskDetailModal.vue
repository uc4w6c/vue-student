<template>
  <div class="window-overlay">
    <div class="window">
      <div class="window-wrapper">
        <p>タスク詳細ページ</p>
      </div>
    </div>
  </div>
</template>

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
  width: 768px;
  z-index: 25;
}
.window-wrapper {
}
</style>
