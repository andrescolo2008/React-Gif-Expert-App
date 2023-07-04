import { PropTypes } from 'prop-types'
import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GitGrid = ({category }) => {


const{images,isLoading}=useFetchGifs(category);


    return (
<>
      <h3>{category}</h3>
      {
        isLoading && (<h2> Cargando...</h2>)
      }
      <div className="card-grid">

    {
        images.map((image) =>(
            < GifItem 
            key={image.id}
            {...image}
// opción 2 
//key={image.id}
//title={image.title}
//url={image.url}

            />
          ))
    }
       </div>
    </>
    
    )
}

GitGrid.propTypes={
  category:PropTypes.string.isRequired
}