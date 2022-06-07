// // import logo from './logo.svg';
import { Data } from './data'
import Card from './components/Card'
import './App.css';
// import Sign from './components/Sign.js'
// import React,{useState} from 'react';

function App() {
// const [login, setlogin] = useState(true);
  // const [myText, changeText] = useState('Hello');
  return (
    // <div className='container'>

    //   <h1>{myText}</h1>

    //   <button onClick={() => changeText(myText==='Hello'?'Hi':'Hello')}>Change text</button>
    // </div>

    // <Sign />
    <div className="container-fluid bg-danger">
      {/* <h1>Length:{Data.length}</h1> */}
      <div className='row'>
        <div className=' filter-bar col-2 bg-success'>
          <h1 className='mx-2 my-4'>Movie_Site</h1>
          <form className='mx-2 my-5'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Horror
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                adventure
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Action
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Romantic
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Commedy
              </label>
            </div>
            <button type='submit' className='btn-badge btn-primary rounded ms-4 mt-2'>Apply</button>
          </form>
        </div>
        <div className='movie-panel col-10 bg-secondary'>
          <div className='row d-flex align-items-center justify-content-center'>
            {
              Data.map((movie) => {
                return <>
                  <div className='col-sm-6 col-lg-3'>
                    <Card
                      src={movie.images[0].thumbnail}
                      title={movie.title}
                      date={movie.release_date} />
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
