import FilterSidebar from '../components/FilterSidebar';
import MoviePanel from '../components/MoviePanel';
const Dashboard = (Prop) => {
    function Lout() {
        Prop.ChangeLogIn();
    }
    return <>
        <div className="container-fluid bg-danger">
            {/* <h1>Length:{Data.length}</h1> */}
            <div className='row'>
                <FilterSidebar Logout={Lout} />
                <MoviePanel />
            </div>
        </div>
    </>
}
export default Dashboard