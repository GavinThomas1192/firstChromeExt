import React from 'react';


class SingleNote extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <NoteCreateForm />
        )
    }
}

export default SingleNote