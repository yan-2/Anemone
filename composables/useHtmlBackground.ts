// Imports useful functions
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Changes <html> background to match the <body> background
export function useHtmlBackground() {
  // Gets current route
  const route = useRoute()

  // Updates the <html> background
  const updateHtmlBackground = () => {
    if (import.meta.client) {
      // Retrieves <html> element
      const html = document.documentElement

      // Assistant page
      if (route.path === '/assistant') {
        html.classList.add('bg-primary')
        html.classList.remove('bg-background')
      }
      // Otherwise
      else {
        html.classList.add('bg-background')
        html.classList.remove('bg-primary')
      }
    }
  }

  onMounted(() => {
    updateHtmlBackground()
  })

  watch(() => route.path, updateHtmlBackground)
}
