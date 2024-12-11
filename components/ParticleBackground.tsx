'use client'

import { useEffect, useRef } from 'react'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        if (canvas) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
        } else {
          this.x = 0
          this.y = 0
        }
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          else if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          else if (this.y < 0) this.y = canvas.height
        }
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.closePath()
          ctx.fill()
        }
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < particles.length; i++) {
          particles[i].update()
          particles[i].draw()
        }
        requestAnimationFrame(animate)
      }
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
