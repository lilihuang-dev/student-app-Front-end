import React from 'react';
import styles from './StudentCard.module.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const StudentCard = ( { student, expanded, onClick }) => {
    const { email, company, firstName, lastName, pic, grades, skill } = student;

    const getAverage = (grades) => {
        const sum = grades.reduce((acc, curr) => {
          return acc + Number(curr);
        }, 0);
        return sum / grades.length;
      };

    console.log(`<StudentCard /> rendered name=${firstName} expanded=${expanded}`);

    return (
        <div className = {styles.StudentCard}>
            <div className={styles.StudentCard__avatar}>
                <img src={pic} alt={`${firstName} ${lastName}`} />
            </div>
            <div className={styles.StudentCard__info}>
                <h1>
                    {firstName} {lastName}
                </h1>
                <ul>
                    <li>Email: {email}</li>
                    <li>Company: {company} </li>
                    <li>Skill: {skill}</li>
                    <li>Average: {getAverage(grades)}%</li>
                </ul>
                {expanded && (
                    <ul>
                        {grades.map((grade, index) => {
                            return (
                                <li key={`${grade}-${index}`}>
                                    <span>Test {index + 1}:</span><span>{grade}%</span>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            {/* <div className={styles.StudentCard__controls}>
                <button onClick={onClick}>{expanded ? <FaMinus /> : <FaPlus />}</button>
            </div> */}
        </div>
    )
}

export default StudentCard;


