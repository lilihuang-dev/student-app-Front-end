import styles from './Loading.module.css';

const Loading = () => {
  console.log(`<Loading /> rendered!`);
  return (
    <div className = {styles.loading}>Loading...</div>
  )
}

export default Loading;