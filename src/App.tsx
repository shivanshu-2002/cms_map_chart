import React, { Suspense } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify"
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Add from "./components/Add";
import Edit from "./components/Edit";
import Charts from './components/Charts';
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
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
