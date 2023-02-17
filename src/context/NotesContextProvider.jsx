import React, { createContext, useReducer } from "react";

export const NotesContext = createContext(null);

const initialState = {
  notes: [],
  priority: "All",
};

const handlers = {
  ADD: (state, action) => {
    const { note } = action.payload;
    return { ...state, notes: [...state.notes, note] };
  },
  REMOVE: (state, action) => {
    const { id } = action.payload;
    console.log(state.notes);
    const filteredNotes = state.notes.filter((note) => note.id !== id);

    console.log(filteredNotes);

    return { ...state, notes: [...filteredNotes] };
  },
  EDIT: (state, action) => {
    const { id, data } = action.payload;

    const targetNoteIndex = state.notes.findIndex((note) => note.id === id);
    const editedNote = { ...state.notes[targetNoteIndex], ...data };
    const newNotesArray = state.notes.map((note, index) => {
      if (index === targetNoteIndex) {
        return editedNote;
      }
      return note;
    });

    return { ...state, notes: newNotesArray };
  },
  SETPRIORITY: (state, action) => {
    const priority = action.payload.data;

    return { ...state, priority };
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

  const editNote = (id, data) => {
    dispatch({ type: "REMOVE", payload: { id, data } });
  };

  const setPriority = (data) => {
    dispatch({ type: "SETPRIORITY", payload: { data } });
  };

  return (
    <NotesContext.Provider
      value={{ ...state, addNote, removeNote, editNote, setPriority }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
