import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Cursor.module.css'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show on pointer devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!

    // Fast-set for the dot (1:1)
    const moveDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' })
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' })

    // Laggy for the ring (trailing effect)
    const moveRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' })

    const onMove = (e: MouseEvent) => {
      moveDot(e.clientX)
      moveDotY(e.clientY)
      moveRing(e.clientX)
      moveRingY(e.clientY)
    }

    const onEnterLink = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.4, duration: 0.25 })
      gsap.to(dot, { scale: 0, duration: 0.2 })
    }

    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.25 })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove', onMove)

    const interactables = document.querySelectorAll('a, button, [role="button"]')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    // Show cursor elements
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 })

    return () => {
      window.removeEventListener('mousemove', onMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
