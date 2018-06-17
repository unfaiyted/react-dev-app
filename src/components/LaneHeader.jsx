import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';

export default connect(() => ({}), {
    NoteActions,
    LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
    const addNotes = e => {
        e.stopPropagation();
        const noteId = uuid.v4();

        NoteActions.create({
            id: noteId,
            task: "New Task"
        });
        LaneActions.attachToLane({
            laneId: lane.id,
            noteId
        });
    };

    return (
        <div className="lane-header" {...props}>
            <div className="lane-add-note">
                <button onClick={addNotes}>+</button>
            </div>
            <div className="lane-name">{lane.name}</div>
        </div>
    );
})