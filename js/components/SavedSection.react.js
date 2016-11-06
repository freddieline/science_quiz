import React from 'react';
import { PropTypes } from 'react';

import QuestionAndAnswerItem from './QuestionAndAnswerItem.react';

class SavedSection extends React.Component {

    render() {

        const qAndAs = this.props.qAndAs;
        let display = [];

        for (let key in qAndAs) {
         
            display.push(<QuestionAndAnswerItem key={ key } qAndA={ qAndAs[key] } />);
        }

        return (

            <div>
                <ul id="savedQuestion">
                   { display }              
                </ul>
            </div>
      
        );
    } 
};

SavedSection.propTypes = {
    qAndAs: PropTypes.object.isRequired

};

export default SavedSection;
