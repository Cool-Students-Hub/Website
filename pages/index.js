import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div><Head>
  <title>
    Students Hub · Home
  </title>

</Head>
  

<main className={styles.main}>
<h1 className={styles.title}>Welcome to Students Hub Discord Server <a href='/about'>
  Join Now! 
  </a>
  </h1>
</main>

   </div>
  
  )
}
