import { useRef, useEffect } from 'react'
import Typed from 'typed.js'

const TextAnimation = (props) => {
  const el = useRef(null)
  const typed = useRef(null)

  const { strings } = props

  const options = {
    strings,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  }

  useEffect(() => {
    typed.current = new Typed(el.current, options)

    return () => typed.current.destroy()
  })

  return <span {...props} style={{ whiteSpace: 'pre' }} ref={el} />
}

export default TextAnimation
