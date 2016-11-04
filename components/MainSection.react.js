import React from 'react';
import { PropTypes } from 'react';

import TodoItem from './TodoItem.react';

class MainSection extends React.Component {
    render() {
        
        const allTodos = this.props.todos;
        let todos = [];
        let savedQuestion = this.props.savedQuestion;

        for (let key in allTodos) {
            todos.push(<TodoItem key={ key } todo={ allTodos[key] } />);
        }

        return (
            <div>
                <ul id="question">
                   { this.props.question }
                                        
                </ul>
                <ul id="todos">
                    { todos}              
                </ul>
                
            </div>
      
        );
    } 
};

MainSection.propTypes = {
    todos: PropTypes.object.isRequired

};

export default MainSection;
