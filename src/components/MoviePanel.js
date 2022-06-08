import { Data } from '../data'
import Card from '../components/Card'
const MoviePanel = () => {
    return <>
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
    </>
}
export default MoviePanel;