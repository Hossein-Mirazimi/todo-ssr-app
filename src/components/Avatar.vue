<template>
  <span class="avatar" :style="{width: w, height: h}">
    <img :src="src" :alt="alt || ''">
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    w: {
      type: String,
      default: '30px',
    },
    h: {
      type: String,
      default: '30px',
    },
  },
})
</script>

<style lang="scss">
.avatar {
  border-radius: 9999px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background: #444457;
  color: #1A202C;
  border-color: #FFFFFF;
  vertical-align: top;
  font-size: calc(3rem / 2.5);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9999px;
  }
}
</style>
