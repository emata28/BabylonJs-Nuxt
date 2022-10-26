<template>
  <div>
    <canvas ref="canvasRef" :style="{ width: width, height: height }" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import MainScene from "../scenes/MainScene"



export default Vue.extend({
  name: 'BabylonCanvas',
  props: {
    width: {
      default: '100%',
      type: String,
    },
    height: {
      default: '100%',
      type: String,
    },
  },
  mounted() {
    MainScene.CreateScene(<HTMLCanvasElement>this.$refs.canvasRef);
    MainScene.AddCamera();
    MainScene.AddLights();
    MainScene.loadModels();
    MainScene.startRendering();
  },
})
</script>

<style>

</style>
