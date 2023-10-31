const PI2 = Math.PI * 2
export class glowParticle {
  constructor(x, y, radius, rgb, gradient, vx, vy) {
    this.x = x
    this.y = y
    this.radius = radius
    this.rgb = rgb
    this.alpha = 1
    this.fadeRate = Math.random() * 0.01 + 0.005
    this.gradient = gradient
    this.vx = vx
    this.vy = vy
    this.vx = Math.random() * this.vx
    this.vy = Math.random() * this.vy

    this.sinValue = Math.random()

  }
  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.01

    this.radius += Math.sin(this.sinValue)

    this.x += this.vx
    this.y += this.vy
    this.alpha -= this.fadeRate

    if (this.x < 0) {
      this.vx *= -1
      this.x += 10
    }
    else if (this.x > stageWidth) {
      this.vx *= -1
      this.x -= 10
    }

    if (this.y < 0) {
      this.vy *= -1
      this.y += 10
    }
    else if (this.y > stageHeight) {
      this.vy *= -1
      this.y -= 10
    }


    ctx.beginPath()
    const g = ctx.createRadialGradient(
      this.x,
      this.y,
      Math.floor(this.radius) * Math.floor(this.gradient),
      this.x,
      this.y,
      this.radius
    )
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b},1)`)
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b},0)`)



    ctx.beginPath()
    ctx.shadowColor = (0, 0, 0, 1) // 그림자 색상 설정
    ctx.shadowBlur = 10 // 그림자 블러 정도 조절
    ctx.shadowOffsetY = 100


    ctx.arc(this.x, this.y, this.radius, 0, PI2, false)


    ctx.fillStyle = g
    ctx.fill()

  }
}