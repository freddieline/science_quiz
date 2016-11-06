import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'create',
            'toggleComplete',
            'saveComplete',
            'areAnyComplete',
            'createQuestion',
            'clearQuestion',
            'clearAnswers'
        )
    }
}

export default alt.createActions(TodoActions);
