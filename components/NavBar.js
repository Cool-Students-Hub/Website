
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const NavBar = () => {
        
    return (

        <div>
        <div>
        </div>



        <nav className={styles.navbar}>

            <ul>
     <Link href='/'>

        <li className={styles.impname}>
                Students Hub
        </li>
     </Link>
        


{/* Home */}
        <Link href='/' ><li>
        <img src="/home.svg"></img>
        &nbsp;Home</li></Link>
        
{/* About */}
        <Link href='/about' ><li>
        <img src="/about.svg"></img>
        &nbsp;About</li></Link>
        
{/* Blog */}
<Link href='/bots' ><li>
        <img src="/bot.svg"></img>
        &nbsp;Bots</li></Link>



            </ul>
       
</nav>
        </div>

    )
}
