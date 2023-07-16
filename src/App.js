import styles from './App.module.css';
import { useEffect, useState } from 'react';

import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';
import StudentList from './components/StudentList/StudentList';

const API_URL = process.env.REACT_APP_API_URL;

function App() {

  const [studentData, setStudentData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("<App /> useEffect() fired!")
    
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await fetch(`${API_URL}/students`);
        const json = await response.json();
        const { data, error } = json;
        if (response.ok) {
          setStudentData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  }

  console.log("<App /> rendered!")

  return (
    <div className={styles.App}>
      { renderContent() }
    </div>
  );
}

export default App;
