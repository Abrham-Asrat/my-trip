export default function Welcome(){
  return (
    <>
      <section className="section">
        <div className="section-center welcome-center">
          <article className="welcome-img">
            <div className="welcome-img-cont">
              <img
                src="./src/assets/images/home/home7.jpeg"
                alt="welcome-picture"
                className="welcome-picture"
              />
            </div>
          </article>
          <div className="welcome-info">
            <div className="welcome-text">
              <h2 className="welcome-1">Welcome to Ethiopia</h2>
              <h3 className="welcome-2">land of origin</h3>
            </div>
            <p className="welcome-info-p lead">
              Ethiopia's contributions to various fields, from early human
              evolution and ancient civilizations to unique cultural practices
              and diverse natural wonders. It's a land where many things seem to
              have originated, leaving a significant mark on history and the
              world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
