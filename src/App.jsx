import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Services from "./pages/Services"
import News from "./pages/News"
import Contact from "./pages/Contact"
import RootLayout from "./components/root/RootLayout"



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/services" element={<Services />}></Route>
    <Route path="/news" element={<News />}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>

))
function App() {
 return (
  <>
  <RouterProvider router={router}></RouterProvider>
  
   </>
  )
}

export default App
