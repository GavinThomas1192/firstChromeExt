import uuid from 'uuid/v1';


export const noteCreate = (note) => {
  return {
    type: 'NOTE_CREATE',
    payload: { ...note, id: uuid() },
  };
};

export const noteUpdate = (note) => ({
  type: 'NOTE_UPDATE',
  payload: { ...note },
});

export const noteDelete = (note) => ({
  type: 'NOTE_DELETE',
  payload: { ...note },
});

export const noteSet = note => ({
  type: 'NOTE_SET',
  payload: note,
});


export const chromeGetRequest = key => dispatch => {

  chrome.storage.sync.get(key, function (pulledData) {
    console.log('_CHROME_STORAGE_GET_', pulledData.notes[0]);
    {
      pulledData.notes !== 0 ?
        dispatch(noteSet(pulledData))
        :
        console.log('NOTHING MATCHING KEY');

    }
  })
}

export const chromeSetRequest = (key, data) => dispatch => {
  let stringKey = key.toString();
  chrome.storage.sync.set({ "notes": data }, function () {
    console.log('_CHROME_STORAGE_SET_key/data', key, data);
  });
}


export const noteCreateRequest = note => dispatch => {
  console.log('_ROUTING_NEWNOTE_TO_STORE_', note)
  dispatch(noteCreate(note));
}

export const noteUpdateRequest = note => dispatch => {
  console.log('_NOTE_UPDATE_INCOMING_NOTE', note)
  dispatch(noteUpdate(note));
}

export const noteDeleteRequest = note => dispatch => {
  console.log('_NOTE_DELETE_INCOMING_NOTE', note)

  dispatch(noteDelete(note));
}

