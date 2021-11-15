const GifGridItem = ( {id,title,url} ) => {

    // console.log(id, title, url);

    return (
        <div className='card animate__animated animate__fadeInLeft'>
           <img src={ url } alt={ title }></img>
           <p>{ title }</p>
        </div>
    )
}

export default GifGridItem
