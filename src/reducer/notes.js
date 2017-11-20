export default (state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NOTE_SET':
      console.log('PAYLOAD', payload.notes)
      return payload.notes
    case 'NOTE_CREATE':
      return [payload, ...state];
    case 'NOTE_UPDATE':
      let indexNumber;
      state.map(function (ele) {
        if (ele.id === payload.id) {
          indexNumber = state.indexOf(ele)
        }
      })
      let updatedNote = state.splice(indexNumber, 1)[0];
      updatedNote = payload
      return [updatedNote, ...state];

    case 'NOTE_DELETE':
      return state.filter(item => item.id !== payload.id);
    default: return state;
  }
};