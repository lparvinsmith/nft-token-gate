import Image from 'next/image'
import Portal from '../images/portal.jpg'
import styles from '../styles/Home.module.css';

export function NonMemberContent(){
    return (
        <div className={styles.content}>
            <h1 className={styles.header}>Sorry, this app is for members only</h1>
            <Image src={Portal} alt='portal' />
        </div>
    )
}
