import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'' ,who:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
                Activity : <input type="text" name="task" onChange={this.handleChange} /> <br />
                Who : <input type="text" name="who" onChange={this.handleChange}/> <br/>
                Date : <input type="date" name="date" onChange={this.handleChange}/> <br/>
               <button onClick={() => this.props.addTask(this.state.task,this.state.who,this.state.date)}>Add event!</button>
           </div>
       )
   }
}

export default InputTask