export default function Home (){
  return (
    <>
      <section className="homeSection">
        <article className="home-section">
          <div className="container-fluid home-center">
            <div className="home-center">
              <div className="home-text">
                <h1 className="home-title1">Travel Around</h1>
                <h1 className="home-title2">ኢትዮጵያ</h1>
                <a href="#gallery" className="btn home-btn">
                  Gallery
                </a>
              </div>
            </div>
          </div>
          <video
            src="./src/assets/video/banner1.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            className="video-container"
            poster="./src/assets/images/home/home4.jpg"
          >
            sorry browser doesn't support emended videos
          </video>
          <div className="overlays"></div>
        </article>
      </section>
    </>
  );
}