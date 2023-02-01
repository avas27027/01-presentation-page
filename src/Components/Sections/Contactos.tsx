import React from 'react'

export default function Contactos(props:{view: (node: Element | null) => void}) {
  return (
    <section className='contactos' ref={props.view}>
        <div className='contactos box'>
            <div className='contactos-card'></div>
            <div className='contactos-card'></div>
            <div className='contactos-card'></div>
            <div className='contactos-card'></div>
        </div>
    </section>
  )
}
