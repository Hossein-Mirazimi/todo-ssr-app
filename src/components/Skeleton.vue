<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  inheritAttrs: true,
  props: {
    borderRadius: {
      type: [String, Number],
      default: 4,
    },
    startColor: {
      type: String,
      default: '#21212B',
    },
    endColor: {
      type: String,
      default: '#343343',
    },
    h: {
      type: String,
      required: true,
    },
    w: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const generatedStyle = {
      width: props.w,
      height: props.h,
      borderRadius: props.borderRadius,
    }
    return () => h('div', h('div', { class: 'skeleton', style: generatedStyle }))
  },
})
</script>

<style scoped>
div.skeleton {
  opacity: 0.7;
  border-color: #21212B;
  background: #343343;
  -webkit-animation: 0.8s linear infinite alternate animation-9nvrvr;
  animation: 0.8s linear infinite alternate animation-9nvrvr;
  box-shadow: var(--chakra-shadows-none);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  cursor: default;
  color: var(--chakra-colors-transparent);
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: var(--chakra-space-2);
  margin-bottom: var(--chakra-space-2);
}
@keyframes animation-9nvrvr{
  from {
    border-color:#21212B;
    background:#21212B;
  }
  to {
    border-color:#343343;
    background:#343343;
  }
}
</style>
