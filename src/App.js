import { useState } from 'react';
import Header from './components/Header';
import { Tasks } from './components/Tasks';

function App() {
  const [tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'React Crash Course',
        date: 'Sun July 30th',
        remainer: false,
    },
    {
        id: 2,
        text: 'React complete Course',
        date: 'Mon August 1st',
        remainer: true,
    },
    {
        id: 3,
        text: 'Next.js Full COurse',
        date: 'Mon August 8th',
        remainer: true,
    },
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <section className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks task={tasks} onDelete={deleteTask} /> : 'No Task Available'}
    </section>
  );
}

export default App;
