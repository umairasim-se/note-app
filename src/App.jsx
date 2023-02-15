import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import NotesContextProvider from "./context/NotesContextProvider";

function App() {
  return (
    <NotesContextProvider>
      <Header />
      <Cards />
    </NotesContextProvider>
  );
}

export default App;
