
const MovieCard = ({movie}) =>{
    return(
        <div className=' bg-gray-800 rounded-lg w-96 p-6 m-4 text-center shadow'>        
            <p className=' text-gray-500 font-semibold'>
                {movie.Year}
            </p>
            <img
            className='mx-auto' 
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                alt={movie.Title}/>      
            <h1 className='text-white text-3xl py-4 text-center'>
                {movie.Title}
            </h1>        
            <h4 className=" text-gray-400 uppercase">
                {movie.Type}
            </h4>
        </div>
    );
}

export default MovieCard;