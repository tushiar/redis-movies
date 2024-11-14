import './App.css'
import logo from './logo.svg'
import { useRef, useState } from 'react'
import axios from 'axios'
import Card from './component/Card'

function App() {
  const searchKeyRef = useRef(null)
  const yearRef = useRef(null)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [hasData, setHasData] = useState(false)
  const onSearchHandler = async () => {
    const searchKey = searchKeyRef.current.value
    const year = yearRef.current.value
    try {
      setLoading(true)
      const response = await axios.post('/api/movies', { searchKey, year })
      console.log(response)
      setLoading(false)
      setData(response.data.data)
      setHasData(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <div className="App">
      <header className="header center-align">
        <div className="center-align">

          <img src={logo} alt="Logo" height="30px" />

          <span>
            Movies with Redis
          </span>
        </div>
      </header>
      <div className="container-layout">
      </div>
      <div className="container-body">
        <div className="container-head">
          <input type='text' name="searchKey" className="search-input" placeholder="Search name here..." ref={searchKeyRef} />
          <input type='text' name="year" className="search-input search-year-input" placeholder="Enter year.." ref={yearRef} />
          <button className="submit-btn" onClick={onSearchHandler}>
            Search
          </button>
        </div>
        <Card data={data} loading={loading} hasData={hasData} />
      </div>
      <footer className="footer">Created with ❤️ by Tushar Moolya</footer>
    </div>
  );
}

export default App;
