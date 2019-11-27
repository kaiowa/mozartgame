<template>
  <div class="visor">
    totalTime:{{ totalTime }}
    <div class="container_canvas">
      <canvas
        id="canvas"
        ref="canvas"
        style="width:600px;height:400px"
      />
    </div>
  </div>
</template>
<script src="./Visor.js"></script>
<style lang="scss">
  @import "./Visor.scss";
</style>
