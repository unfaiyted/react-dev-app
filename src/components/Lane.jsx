import React from 'react'
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';

import LaneHeader from './LaneHeader';

const Lane = ({
    lane, notes, LaneActions, NoteActions, ...props
}) => {
    const editNote = (id, task) => {
        NoteActions.update({id, task, editing: false});
    };

    const deleteNote = (noteId, e) => {
        e.stopPropagation();
        LaneActions.detachfromLane({laneId: lane.id , noteId});
        NoteActions.delete(noteId);
    };
    const activateNoteEdit = id => {
        NoteActions.update({id, editing: true})
    };

    return (
        <div {...props}>
           <LaneHeader lane={lane} />
            <Notes
                notes={selectNotesByIds(notes, lane.notes)}
                onNoteClick={activateNoteEdit}
                onEdit={editNote}
                onDelete={deleteNote} />
        </div>
    );
};


function selectNotesByIds(allNotes, noteIds = []) {

    return noteIds.reduce((notes, id) =>
        // add matching ids
    notes.concat(
        allNotes.filter(note => note.id === id)
    ),[]);
}


export default connect(
    ({notes}) => ({
    notes
}), {
        NoteActions,
        LaneActions
    }
)(Lane)


//
// export default ({lane, ...props}) => (
//     <div {...props}> {lane.name}</div>
