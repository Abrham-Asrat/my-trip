import { createRoot } from "react-dom/client";
import Header from "./view/nav";
import Home from "./view/home";
import Welcome from "./view/welcome";
import Packages from "./view/package";
import Contact from "./view/contact";
import Gallery from "./view/gallery";
import Footer from "./view/footer";
import galleryData from "./data/galleryData";
import packageData from "./data/packageData";
const gallery = galleryData.map((images) => {
  return <Gallery img={images.img} key={images.id} />;
});

const packages = packageData.map((pack) => {
  return (
    <Packages
      img={pack.img}
      key={pack.id}
      title={pack.title}
      description={pack.description}
      price={pack.price}
      tripDate={pack.tripDate}
      link={pack.link}
    />
  );
});

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Home />
    <Welcome />
    <section className="section package-section">
      <div className="section-center package-center" id="package">
        <div className="card-title">
          <h1>packages</h1>
          <div className="underline"></div>
        </div>
        <article className="package-card container-lg">
          {packages}
        </article>
      </div>
    </section>
    <Contact />
    <section>
      <div className="gallery-center" id="gallery">
        {gallery}
      </div>
    </section>
    <Footer />
  </>
);
