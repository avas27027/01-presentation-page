import React from 'react'

export default function Contactos(props:{view: (node: Element | null) => void}) {
  return (
    <section className='contactos' ref={props.view}>Contactos</section>
  )
}
