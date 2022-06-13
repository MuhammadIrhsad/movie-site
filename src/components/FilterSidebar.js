import logo from '../Assets/logo.jpg'
function FilterSidebar(Prop) {
  return <>
    <div className=' d-flex flex-column justify-content-around align-items-center filter-bar col-2 bg-dark text-light'>
      <div className=' d-flex flex-column justify-content-between align-items-center ' >
        {/* <h1 className='mx-2 my-4'>Movie_Site</h1> */}
        <div className="imgcontainer">
          <img src={logo} alt="Avatar" className="avatar" />
        </div>
        <div class="btn-group-vertical my-5" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary Active">All</button>
          <button type="button" className="btn btn-primary">Horror</button>
          <button type="button" className="btn btn-primary">Romantic</button>
          <button type="button" className="btn btn-primary">Commedy</button>
          <button type="button" className="btn btn-primary">Anime</button>
          <button type="button" className="btn btn-primary">Action</button>
          <button type="button" className="btn btn-primary">Adventure</button>
        </div>
        
      </div>

      <button className="btn btn-primary " onClick={Prop.Logout}> SignOut</button>
    </div>
  </>
}
export default FilterSidebar