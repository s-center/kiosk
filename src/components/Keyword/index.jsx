import { useEffect, useRef } from 'react'
import { glowParticle } from './glowParticle'
import { css } from '@emotion/react'


export const Keyword = (props) => {

  const COLORS = [
    { r: props.fr, g: props.fg, b: props.fb },
    { r: props.sr, g: props.sg, b: props.sb },
    { r: props.tr, g: props.tg, b: props.tb },
    { r: props.for, g: props.fog, b: props.fob },
    { r: props.fir, g: props.fig, b: props.fib },
  ]

  const canvasRef = useRef(null)
  const stagWidth = 1000// 고정된 가로 크기
  const stageHeight = 1000// 고정된 세로 크기
  const totalParticles = props.totalParticles
  let particles = []
  let maxRadius = props.maxRadius
  let minRadius = props.minRadius

  const createParticles = () => {
    let curColor = 0
    particles = []

    for (let i = 0; i < totalParticles; i++) {

      const item = new glowParticle(
        Math.random() * stagWidth,
        Math.random() * stageHeight,
        Math.random() * (maxRadius - minRadius) + minRadius,
        COLORS[curColor],
        props.gradient,
        props.vx,
        props.vy
      )

      if (++curColor >= COLORS.length) {
        curColor = 0
      }

      particles[i] = item
    }
  }

  useEffect(() => {
    console.log(`generate particles for ${props.className}`)
    createParticles()
  }, [stagWidth, stageHeight, maxRadius, minRadius, props.gradient, props.vx, props.vy, createParticles, props.className])

  const animate = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, stagWidth, stageHeight)
      ctx.globalCompositeOperation = 'saturation'

      for (let i = 0; i < totalParticles; i++) {
        const item = particles[i]
        item.animate(ctx, stagWidth, stageHeight)
      }
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    animate()
  }, [stagWidth, stageHeight, particles, animate])

  return <canvas ref={canvasRef} onClick={props.onClick} className="glow-particle-canvas" css={css`width: 100%; height: 100%;`} />
}