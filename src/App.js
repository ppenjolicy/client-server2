import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework', who: 'joy', date: '2019-1-20'},
               {id: 2, task: 'Read book', who: 'joy', date: '2019-1-20'}],
       id:3
   }

   addTask = (task,who,date) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,who,date} ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <header>Todo</header>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
           </div>
       );
   }
}

export default App;