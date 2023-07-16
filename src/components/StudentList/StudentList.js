import { useState } from 'react';
import styles from './StudentList.module.css';
import StudentCard from '../StudentCard/StudentCard';

function StudentList({ studentData }) {
  const [searchInput, setSearchInput] = useState("");
  const [expanded, setExpanded] = useState([]);

  console.log("<StudentList /> rendered!");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleExpandAll = () => {
    const allIds = studentData.map(student => student.id);
    setExpanded(allIds);
  }

  const handleCollapseAll = () => {
    setExpanded([]);
  }

  const handleToggleExpanded = (id) => {
    if(!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const filteredRemoved = expanded.filter(currId => currId !== id);
      setExpanded(filteredRemoved);
    }
  }

  let dataToDisplay = studentData;

  if (searchInput) {
    dataToDisplay = studentData.filter(student => {
      const fullName = `${student.firstName} ${student.lastName}`;
      return fullName.toLowerCase().includes(searchInput.toLowerCase());
    });
  };

  const renderContent = () => {
    let contentClassName = 'StudentList__content';

    if (dataToDisplay.length === 0) {
      contentClassName += ' StudentList__content--empty';
      return (
        <div className = { styles.contentClassName }>No results for {searchInput}</div>
      )
    } else {
      return (
        <div className = { styles.contentClassName }>
          {dataToDisplay.map(student => (
            <StudentCard
              key={student.id}
              student={student}
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
        </div>
      )
    }
  }

  return (
    <div className= { styles.StudentList } >
      {/* <div className = { styles.StudentList__controls }>
        <input 
          type = "text"
          placeholder = "Search by name" 
          value = { searchInput }
          onChange = { handleChange }
        />
      <button onClick = { handleExpandAll }>Expand All</button>
      <button onClick = { handleCollapseAll }>Collapse All</button>
      </div> */}
      <div>
        { renderContent() }
      </div>
    </div>
  )
}

export default StudentList;