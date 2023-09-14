import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { TokenGatedContent } from '../components/TokenGatedContent';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Token Gate</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.buttons}><ConnectButton /></div>
        <TokenGatedContent />
      </main>
    </div>
  );
};

export default Home;
