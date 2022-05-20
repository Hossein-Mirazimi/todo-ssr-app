<script lang="ts">
import { reactive, computed, h, defineComponent } from 'vue'
import { useHead } from '@vueuse/head'
import { RouterView } from 'vue-router'
export default defineComponent({
  setup() {
    const siteData = reactive({
      title: 'Tsk, just tasks',
      description: 'Tsks is a task manager made simply to manage and keep track of everyday tasks with a modern and simple interface.',
    })
    useHead({
      title: siteData.title,
      meta: [
        {
          name: 'description',
          content: computed(() => siteData.description),
        },
      ],
    })

    return () => h(RouterView)
  },
})

</script>
