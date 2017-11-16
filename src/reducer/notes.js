export default (state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NOTE_SET':
      console.log('PAYLOAD', payload.notes[0][0])
      return [payload.notes[0][0], ...state];

    case 'NOTE_CREATE':
      return [payload, ...state];
    case 'NOTE_UPDATE':
      return state.map(item => item._id === payload._id ? payload : item);
    case 'NOTE_DELETE':
      return state.filter(item => item._id !== payload._id);
    default: return state;
  }
};