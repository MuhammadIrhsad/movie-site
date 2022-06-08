function FilterSidebar(Prop) {
  return <>
    <div className=' d-flex flex-column justify-content-around filter-bar col-2 bg-dark text-light'>
      <div>
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
      
      <button className="btn btn-primary " onClick={Prop.Logout}> SignOut</button>
    </div>
  </>
}
export default FilterSidebar