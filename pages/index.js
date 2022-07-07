import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className='styles.title'>Home</h1>
      <p className="styles.text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore adipisci expedita voluptatibus nostrum eveniet et doloribus? Pariatur amet corrupti qui.</p>        
      <p className="styles.text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore adipisci expedita voluptatibus nostrum eveniet et doloribus? Pariatur amet corrupti qui.</p>        
      <Link href='ninjas'><a>See ninja list</a></Link>
    </div>
  )
}
