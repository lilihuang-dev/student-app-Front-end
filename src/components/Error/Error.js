import styles from './Error.module.css';

const Error = ({ error }) => {
  console.log(`<Error /> rendered! error=${error}`);
  return (
    <div className = {styles.error}>
        There was an error: {error}
        <br />
        Please refresh the page or contact support.
    </div>
  )
}

export default Error