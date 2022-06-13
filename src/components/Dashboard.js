// import FilterSidebar from '../components/FilterSidebar';
import MoviePanel from '../components/MoviePanel';
import logo from '../Assets/logo.jpg'
import { Data } from '../data'
import { useState } from 'react'
const Dashboard = (Prop) => {
    const categories = ['all', 'horror', 'mystery', 'fantasy', 'adventure', 'anime', 'action'];
    const [myData, setmyData] = useState(Data);

    function filterItem(category) {
        if (category === 'all')
        {
            setmyData(Data);

            alert(`Total ${category} category are: ${Data.length}`)
        }
        else {
            const updateData = [];
            Data.forEach(movie => {
                movie.tags.forEach(element => {
                    if (element === category) {
                        updateData.push(movie);
                        
                    }
                });
            });
            alert(`Total ${category} category are: ${updateData.length}`)
            setmyData(updateData);

        }

    }
    // setmyData(Data);

    return <>
        <div className="container-fluid ">
            {/* <h1>Length:{Data.length}</h1> */}
            <div className='row'>
                {/* SideBar */}
                {/* <FilterSidebar/> */}
                <div className=' d-flex flex-column justify-content-around align-items-center filter-bar col-2 bg-dark text-light'>
                    <div className=' d-flex flex-column justify-content-between align-items-center ' >
                        {/* <h1 className='mx-2 my-4'>Movie_Site</h1> */}
                        <div className="imgcontainer">
                            <img src={logo} alt="Avatar" className="avatar" />
                        </div>
                        <div class="btn-group-vertical bg-transparent my-5" role="group" aria-label="Basic example">
                            {
                                categories.map((cat) => <button type="button" onClick={() => filterItem(cat)} className="btn btn-primary Active">{cat.toUpperCase()}</button>)
                            }
                            {/* <button type="button" onClick={() => filterItem('all')} className="btn btn-primary Active">All</button>
                        <button type="button" onClick={() => filterItem('horror')} className="btn btn-primary">Horror</button>
                        <button type="button" onClick={() => filterItem('mystery')} className="btn btn-primary">Mystery</button>
                        <button type="button" onClick={() => filterItem('fantasy')} className="btn btn-primary">Fantasy</button>
                        <button type="button" onClick={() => filterItem('anime')} className="btn btn-primary">Anime</button>
                        <button type="button" onClick={() => filterItem('action')} className="btn btn-primary">Action</button>
                        <button type="button" onClick={() => filterItem('adventure')} className="btn btn-primary">Adventure</button> */}
                        </div>

                    </div>

                    <button className="btn btn-primary " onClick={Prop.ChangeLogIn}> SignOut</button>
                </div>


                <MoviePanel MovieData={myData} />
            </div>
        </div>
    </>
}
export default Dashboard