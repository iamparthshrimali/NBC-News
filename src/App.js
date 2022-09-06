import { useState, useEffect } from 'react';
import './App.css';
import News from './components/News';
import BeatLoader from 'react-spinners/BeatLoader'
import Navbar from './components/Navbar';
import { useContext } from 'react';


const initialState = [];

function App() {
  document.title="NBC news"
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false)
  const [currCountry, setCurrCountry] = useState('us');

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${currCountry}&apiKey=1887c3aa56eb4b33a19435fb0a4741ef`
    setLoading(true);
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setLoading(false);

        setState(data.articles)
      })
      .catch((err) => {
        setLoading(false);
        document.write("something went wrong");
      });
  }, [currCountry])

  function onCountryClick(country){
    setCurrCountry(country);
  }
 
  return (
    <>
      <Navbar onCountryClick={onCountryClick} />
      {loading ?<BeatLoader color="#36d7b7" style={{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
      }}/> :
        (<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {state.map((singleNews, idx) =>
            (<News key={idx} title={singleNews.title} img={singleNews.urlToImage} content={singleNews.description} URL={singleNews.url} />)
          )}
        </div>)}
    </>
  );
}

export default App;
