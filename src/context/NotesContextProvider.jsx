import { createContext, useReducer } from "react";

export const NotesContext = createContext(null);

const initialState = {
  notes: [],
};

const handlers = {
  ADD: (state, action) => {
    const { note } = action.payload;
    console.log(state);
    return { notes: [...state.notes, note] };
  },
  REMOVE: (state, action) => {
    const { id } = action.payload;
    const filteredNotes = state.notes.filter((note) => note.id !== id);

    return [...filteredNotes];
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNote = (note) => {
    dispatch({ type: "ADD", payload: { note } });
  };

  const removeNote = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  return (
    <NotesContext.Provider value={{ ...state, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
