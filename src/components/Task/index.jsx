import React from 'react';
import styles from './task.css'

function Task(props) {

  console.log(React)
  return (
    <div className={`rounded clase99 task ${styles.task} `}>
      {props.text}
      <img 
        src="https://randomuser.me/api/portraits/women/72.jpg" 
        className="rounded-circle float-right"
      />
    </div>
  );
}

export default Task
