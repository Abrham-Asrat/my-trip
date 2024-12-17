export default function Gallery(props){
  return (
    <>
        <article className="gallery-img-container">
          <img src={props.img} alt="" className="gallery-img" />
          <a href="#home" className="gallery-icon">
             <i className="bi bi-search-heart"></i>
          </a>
        </article>
    </>
  )
}