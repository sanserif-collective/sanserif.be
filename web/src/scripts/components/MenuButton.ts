import { gsap, ScrollTrigger } from 'gsap/all'
import { app } from 'scripts/app'

export default class MenuButton extends HTMLElement {
  private translateTween: gsap.core.Tween

  private open() {
    this.setAttribute('open', '')
    app.refs.menu.open()
  }

  private close() {
    this.removeAttribute('open')
    app.refs.menu.close()
  }

  private onClick = () => this.hasAttribute('open') ? this.close() : this.open()

  public connectedCallback() {
    ScrollTrigger.matchMedia({
      '(orientation: landscape)': () => {
        this.translateTween = gsap.to(this, {
          x: -app.refs.footer?.offsetWidth,
          paused: true,
          scrollTrigger: {
            trigger: document.querySelector('[data-footer]'),
            scrub: 1,
            start: 'left right',
            end: 'right right'
          }
        })
      }
    })

    this.addEventListener('click', this.onClick)
    app.plugins.barba.hooks.before(() => { this.close() })
  }

  public disconnectedCallback() {
    this.translateTween.kill()
  }
}
