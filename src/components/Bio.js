import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "info@artikaweb.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Yo" />
      <p>
        Apuntes, reflexiones, experiencias alrededor de la Blockchain, por{' '}
        <a href="https://artikaweb.com/">Desarrollos ArtikaWeb</a>.
        <br />       
        Blog desarrollado con {' '}
        <a href="https://facebook.github.io/create-react-app/">
          create-react-app
        </a>
        , <a href="https://mdxjs.com/">MDX</a>, y{' '}
        <a href="https://frontarm.com/navi/">Navi</a>.
      </p>
    </div>
  )
}

export default Bio
