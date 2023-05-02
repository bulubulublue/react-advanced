import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import JsxDemo from './views/JSXDemo'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/jsx" element={<JsxDemo />} />
      </Routes>
    </div>
  )
}
export default App
