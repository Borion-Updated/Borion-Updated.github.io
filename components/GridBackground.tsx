'use client'

import { useEffect, useRef, useMemo } from 'react'

export function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const tilesRef = useRef<HTMLDivElement[]>([])

  const tiles = useMemo(() => Array.from({ length: 800 }), [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let lastMouseX = 0
    let lastMouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      lastMouseX = event.clientX
      lastMouseY = event.clientY

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateTiles)
      }
    }

    const updateTiles = () => {
      const containerRect = container.getBoundingClientRect()
      const mouseX = lastMouseX - containerRect.left
      const mouseY = lastMouseY - containerRect.top

      tilesRef.current.forEach((tile) => {
        if (!tile) return

        const tileRect = tile.getBoundingClientRect()
        const tileCenterX = tileRect.left + tileRect.width / 2 - containerRect.left
        const tileCenterY = tileRect.top + tileRect.height / 2 - containerRect.top

        const distanceX = mouseX - tileCenterX
        const distanceY = mouseY - tileCenterY
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        const maxDistance = 200
        const intensity = Math.max(0, 1 - distance / maxDistance)

        tile.style.setProperty('--intensity', intensity.toString())
      })

      animationFrameId = 0
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        <div className="grid-animation">
          {tiles.map((_, i) => (
            <div key={i} ref={el => tilesRef.current[i] = el as HTMLDivElement} className="tile" />
          ))}
        </div>
      </div>
    </div>
  )
}

