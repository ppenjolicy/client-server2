import React,{Component} from 'react'

class TaskList extends Component {
   render() {
       if ( this.props.tasks )
           return (<ul> {
                   this.props.tasks.map((item) => (
                    <table align="center"><tr><td>
                    <ul>
                       <li key={item.id}> Activity : {item.task} </li>
                       <li key={item.id}> Who : {item.who}</li>
                       <li key={item.id}> date : {item.date}</li>
                    </ul>
			        </td></tr></table>
                   ))
               }
           </ul>)
   }
}

export default TaskList