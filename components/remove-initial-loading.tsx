"use client"

import { useEffect } from "react"

/**
 * Removes the initial loading overlay as soon as the app has mounted.
 * This ensures the loading shows on refresh until React has hydrated.
 */
export function RemoveInitialLoading() {
  useEffect(() => {
    const el = document.getElementById("initial-loading")
    if (el) {
      el.style.opacity = "0"
      el.style.transition = "opacity 0.2s ease-out"
      const remove = () => {
        el.remove()
        window.removeEventListener("transitionend", remove)
      }
      el.addEventListener("transitionend", remove)
      // Fallback remove in case transitionend doesn't fire
      const t = setTimeout(() => {
        el.remove()
      }, 300)
      return () => clearTimeout(t)
    }
  }, [])
  return null
}
