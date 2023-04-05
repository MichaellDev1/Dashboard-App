import { useParams } from 'react-router-dom'
import CardTask from '../../components/CardTask/CardTask'
import useTask from '../../hooks/useTask'

export default function WeekToDo () {
  const { week } = useParams()
  const { deleteTask, handleChange, handleSubmit, saveTask, setTasksList, taskList } = useTask()

  return (
    <div className='px-6 w-full h-min-[400px] relative'>
      <h1 className='font-bold text-2xl '>{week}</h1>
      <div>
        <form action='' onSubmit={handleSubmit}>
          <input type='text' name='list' id='list' onChange={(e) => handleChange(e)} />
          <button>Add</button>
        </form>
        <div>
          <ul>
            {taskList.length !== 0
              ? taskList.map(task => (
                <li key={task.id}>
                  <CardTask
                    data={task}
                    deleteTask={deleteTask}
                    taskList={taskList}
                    setTasksList={setTasksList}
                    saveTask={saveTask}
                  />
                </li>
              ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  )
}
