'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import PostCard from '@/component/PostCard';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer'

export default function Home() {
  const [data, setData] = useState();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    setError(null);

    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(!res.ok) {
        throw new Error('cant fetch data')
      }
      const data = await res.json();
      setData(data.slice(0, 10));
    } catch(err) {
      setError(err.message)
    }
    setPending(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  if (pending) {
    return <div className={styles.loadingStyle}>Loading...</div>
  }

  if(error) {
    return <div className={styles.errorStyle}>{ error }</div>
  }
  
  return (

    <div className={styles.page}>
      <Navbar />
      <div className={styles.wrapperContainer}>
        <div className={styles.cardWrapper}>
            { data && 
              data.length > 0 && 
              data.map((data, i) => (
                <PostCard
                  key={i}
                  title={data.title}
                  description={data.body}
                />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}