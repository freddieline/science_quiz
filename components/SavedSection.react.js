import React from 'react';
import { PropTypes } from 'react';

import TodoItem from './TodoItem.react';

class SavedSection extends React.Component {

    render() {

        var save=this.props.savedQuestion
        console.log('saved '+save);


        return (

            <div>
                <ul id="savedQuestion">
                   { this.props.savedQuestion }               
                </ul>
                
            </div>
      
        );
    } 
};



export default SavedSection;
