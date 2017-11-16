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
    console.log('_CHROME_STORAGE_GET_', pulledData);
    dispatch(noteSet(pulledData))
    return pulledData;

  })
}

export const chromeSetRequest = (key, data) => dispatch => {
  let stringKey = key.toString();
  chrome.storage.sync.set({ "notes": data }, function () {
    console.log('_CHROME_STORAGE_SET_key/data', key, data);
  });
}

// chrome.storage.sync.set({ "notes": this.state.notes }, function () {
//   console.log('SET THESE NOTES', this.state.notes)
// })



export const noteCreateRequest = note => dispatch => {
  console.log('_ROUTING_NEWNOTE_TO_STORE_', note)
  dispatch(noteCreate(note));
}

