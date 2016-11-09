import React from 'react';
import { PropTypes } from 'react';

class AnswersInput extends React.Component {
    constructor(props) {
        super(props)
        this._save = this._save.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    render() {
        var toggleShowEditable = this.props.showEditable ? "" : "hide"

        return (
            <input className={"form-control "+toggleShowEditable}
                onBlur={ this._save } 
                onKeyDown={ this._onKeyDown } />
        );
    }

    _save(event) {
        this.props.onSave(event.target.value);
        event.target.value = '';
    }

    _onKeyDown(event) {
        if (event.keyCode === 13) {// enter
            this._save(event); 
        }
    }
};

AnswersInput.PropTypes = {
    onSave: PropTypes.func.isRequired
}

export default AnswersInput;
