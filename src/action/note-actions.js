import uuid from 'uuid/v1';


export const noteCreate = (note) => {
  return {
    type: 'NOTE_CREATE',
    payload: {...note, id: uuid()},
  };
};

export const noteUpdate = (note) => ({
  type: 'NOTE_UPDATE',
  payload: {...note},
});
 
export const noteDelete = (note) => ({
  type: 'NOTE_DELETE',
  payload: {...note},
});

export const noteSet = note => ({
  type:'NOTE_SET',
  payload: note,
});


export const notesFetchRequest = key => dispatch  => {
 
  chrome.storage.sync.get(key, function (pulledData) {
   console.log('STORAGE GET THIS DATA', pulledData);
   dispatch(noteSet(pulledData))
    
 })
 

}
