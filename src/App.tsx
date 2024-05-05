import './App.css';
import { ToastContainer } from "react-toastify"
import Navbar from './components/common/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Note/Home"
import Add from "./components/Note/Add";
import Edit from "./components/Note/Edit";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
