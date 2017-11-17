export default (state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NOTE_SET':
      console.log('PAYLOAD', payload.notes)
      return payload.notes
    case 'NOTE_CREATE':
      return [payload, ...state];
    case 'NOTE_UPDATE':
      return state.map(item => item.id === payload.id ? payload : item);
    case 'NOTE_DELETE':
      return state.filter(item => item.id !== payload.id);
    default: return state;
  }
};