import './index.css';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import catData from './data.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const newcatData = catData.map((data)=>{
    return (
      <Gallery 
        key = { data.id }
        catImage = { data.catImage }
        title = { data.title }
        phone = { data.phone }
        email = { data.email }
    />
    )

  })

  return (
    <Router>
      <div className='container'>
        <Navbar/>
      <div className='contacts'>
        <Routes>
          <Route path='/gallery' 
          element= { newcatData } >
        </Route>
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;