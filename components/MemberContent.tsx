import { useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";
import Image from 'next/image';
import MilkyWay from '../images/nighttime_wanderings.jpg';
import styles from '../styles/Home.module.css';


export function MemberContent(){
    const { address } = useAccount();
    const {data: ensName} = useEnsName({address});
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null;

    return (
        <div className={styles.content}>
            <h1 className={styles.header}>{`Welcome, ${ensName ? ensName : address}`}</h1>
            <Image src={MilkyWay} alt='milky way' />
        </div>
    )
}
