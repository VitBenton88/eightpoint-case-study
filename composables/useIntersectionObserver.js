// composables/useIntersectionObserver.js
import { onMounted, onBeforeUnmount } from 'vue'

export function useIntersectionObserver(targetRef, callback, options = { threshold: .5 }) {
  let observer

  onMounted(() => {
    if (!targetRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
        }
      })
    }, options)

    observer.observe(targetRef.value)
  })

  onBeforeUnmount(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
    }
  })
}