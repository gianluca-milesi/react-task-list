import './App.css'
import tasks from "../data/tasks.js"

function App() {

  const currentTasks = tasks.filter(task => task.state === "backlog" || task.state === "in_progress");
  const completedTasks = tasks.filter(task => task.state === "completed");

  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <main>
        <h2>Current Tasks ({currentTasks.length})</h2>
        <ul>
          {currentTasks.map(task => (
            <li key={task.id}>
              <div className="list-items">
                <h3>{task.title}</h3>
                <p>Priority: {task.priority}</p>
                <p>Est. time {task.estimatedTime}</p>
              </div>
              <div className="task-state">
                <h3 className={`label ${task.state === "backlog" ? "orange" : "blue"}`}>{task.state}</h3>
              </div>
            </li>
          ))}
        </ul>

        <hr />

        <h2>Completed Tasks ({completedTasks.length})</h2>
        <ul>
          {completedTasks.map(task => (
            <li key={task.id}>
              <div className="list-items">
                <h3>{task.title}</h3>
                <p>Priority: {task.priority}</p>
                <p>Est. time {task.estimatedTime}</p>
              </div>
              <div className="task-state">
                <h3 className="label green">{task.state}</h3>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App