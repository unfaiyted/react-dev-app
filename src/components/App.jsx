import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';


import NoteActions from '../actions/NoteActions';

// export default () => <Notes />;



class App extends React.Component  {

    render() {
        const {notes} = this.props;

        return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote} />
            </div>
        );
    }


    addNote = () => {
        // this.setState({
        //     notes: this.state.notes.concat([{
        //         id: uuid.v4(),
        //         task: 'New Task'
        //     }])
        // })
        this.props.NoteActions.create({
            id: uuid.v4(),
            task: 'New Task'
        });


    };

    deleteNote = (id, e) => {
        e.stopPropagation();
        // this.setState({
        //     notes: this.state.notes.filter(note => note.id !== id)
        // });
        this.props.NoteActions.delete(id);

    };

    activateNoteEdit = (id) => {
        //     this.setState({
        //         notes: this.state.notes.map(note => {
        //             if(note.id === id) {
        //                 note.editing = true;
        //             }
        //
        //             return note;
        //         })
        //     });
        // }
        this.props.NoteActions.update({id, editing: true})
    };


    editNote = (id, task) => {
        // this.setState({
        //    notes: this.state.notes.map(note => {
        //        if(note.id === id) {
        //            note.editing = false;
        //            note.task = task;
        //        }
        //
        //        return note;
        //    })
        // });

        this.props.NoteActions.update({id, task, editing: false});
    }



}


export default connect(({notes}) => ({
    notes
}), {
    NoteActions
    }
)(App)