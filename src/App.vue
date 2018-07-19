<template>
  <div id="app">
    <div><video ref="video" id="video"  autoplay playsinline ></video></div>
    <!--  <div><button id="snap" v-on:click="capture()" >Snap Photo</button></div> -->
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      video: {},
      canvas: {},
      captures: []
    }
  },
  mounted () {
    const medias = {audio: false,
      video: {
        facingMode: {
          exact: 'environment'
        }
      }}
    this.video = this.$refs.video
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(medias).then(stream => {
        this.video.src = window.URL.createObjectURL(stream)
        this.video.play()
      }).catch(err => {
        alert(err)
      })
    }
  },
  methods: {
    capture () {
      this.canvas = this.$refs.canvas
      const context = this.canvas.getContext('2d')
      const w = window.innerWidth
      const h = window.innerHeight
      context.drawImage(this.video, 0, 0, w, h)
      this.captures.push(this.canvas.toDataURL('image/png'))
    }
  }
}
</script>

<style>
body {
  background-color: #000000;
  margin: 0px;
}

#app {
  text-align: center;
  color: #2c3e50;
}

#video {
  background-color: #000000;
  display: block;
  width: 100%;
}

#canvas {
  display: none;
  width: 100%;
}


</style>
