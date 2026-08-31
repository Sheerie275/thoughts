import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Thoughts from "./components/Thoughts";

import Footer from "./components/Footer"
import Header from "./components/Header"
import ThoughtForm from "./components/ThoughtForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/form" element={<ThoughtForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}


export default App;