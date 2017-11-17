export default (state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NOTE_SET':
      console.log('PAYLOAD', payload.notes)
      // {
      //   payload.notes.length !== 0 ?
      //     [payload.notes, ...state]
      //     : console.log('WHOOPSHEDIDITAGAIN')
      // }
      return payload.notes
    case 'NOTE_CREATE':
      return [payload, ...state];
    case 'NOTE_UPDATE':
      return state.map(item => item._id === payload._id ? payload : item);
    case 'NOTE_DELETE':
      return state.filter(item => item._id !== payload._id);
    default: return state;
  }
};