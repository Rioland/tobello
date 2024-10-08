import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
     <>
  <div className="container custom-row">
    <div className="row align-items-center g-0 equal-height">
      <div className="col-md-4 description d-flex flex-column justify-content-center">
        <h2>Tobello Global Resources Ltd</h2>
        <h3>Exporters and Importers</h3>
        <p>
          We are recognized as global leaders in the manufacturing and export of
          bovine products, agricultural commodities, and organic foods. Our
          commitment to excellence is underscored by our EU Import/Export
          License, highlighting our dedication to adhering to stringent
          international standards.
        </p>
      </div>
      {/* Right side: image */}
      <div className="col-md-8 align-middle">
        <img src="./images/2.png" className="custom-img" alt="Sample Image" />
      </div>
    </div>
  </div>
  {/* Second row  */}
  <div className="container custom-row">
    <div className="row align-items-center g-0 equal-height">
      <div className="col-md-8 description1 d-flex flex-column justify-content-center">
        <h5> Welcome to TOBELLO</h5>
        <h1 className="text">
          One of Nigeria's Leading <br />
          Export and Import <br />
          Service Providers
        </h1>
        <p>
          We are involved in the international trade of Agro Agricultural
          Products and <br />
          Foodstuffs (such as Fresh Honey and beeswax, Natural Sesame Seed{" "}
          <br />
          (White/Brown 98 percent Cleaned), Ginger-Cleaned DrySplit/Slice,
          Garlic, Gum <br />
          Arabic-1,2 &amp; 3, Cassava Chips/Starch/Flour, Shea Butter/Nut,
          Groundnut <br />
          (Peanut)). However, we are currently focused on the collection and
          export of <br />
          cattle horns and hooves (Bovine) for organic fertilizer. It is a
          rapidly expanding <br />
          industry in Europe and Asia.... We produce large amounts of crushed
          horns and <br />
          hooves for such an organic fertilizer industry.
        </p>
      </div>
      <div className="col-md-4 align-middle">
        <img src="./images/3.png" className="custom-img" alt="Sample Image" />
      </div>
    </div>
  </div>
  <div className="button">
    <button className="btn btn-center btn-success">View Products</button>
  </div>
  <br />
  <div className="yes">
    <h3 className="okay text-warning">Coming Soon</h3>
    <div className="container card-container">
      <div className="row">
        {/* First Card */}
        <div className="col-md-3 mb-2">
          <div className="card standard-card">
            <img src="./images/4.jpg" className="img-fluid" alt="Card 1" />
          </div>
          <div className="card-body bg-white p-3">
            <h5 className="card-title">Cocoa Beans</h5>
          </div>
        </div>
        {/* Second Card */}
        <div className="col-md-3 mb-2">
          <div className="card standard-card">
            <img src="./images/5.jpg" className="img-fluid" alt="Card 2" />
          </div>
          <div className="card-body bg-white p-3">
            <h5 className="card-title">Dry Ginger Powder</h5>
          </div>
        </div>
        {/* Third Card (Taller) */}
        <div className="col-md-3 mb-2">
          <div className="card taller-card">
            <img src="./images/6.jpg" className="img-fluid" alt="Card 3" />
          </div>
          <div className="card-body bg-white p-3">
            <h5 className="card-title">Feather Meal Powder</h5>
          </div>
        </div>
        {/* Fourth Card (Taller) */}
        <div className="col-md-3 mb-2">
          <div className="card taller-card">
            <img src="./images/7.jpg" className="img-fluid" alt="Card 4" />
          </div>
          <div className="card-body bg-white p-3">
            <h5 className="card-title">Bone Meal Powder</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="light">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="inline-flex">
            <img src="./images/8.png" className="custom-img1" alt="Logo" />
            <h3>Mission</h3>
          </div>
          <p>
            To Promote International Trade and Significantly contribute to the
            growth <br />
            of Nigerian GDP(Gross Domestic Product) Through Trade Education,
            Trade <br />
            Enhancement, and Trade Execution. <br />
            <br />
            To exceed the customers expectations by providing quality product
            and exceptional customer care services in a loving and caring way.
          </p>
        </div>
        <div className="col-md-6">
          <div className="inline-flex">
            <img
              src="./images/9.png"
              className="custom-img1"
              alt="Sample Image"
            />
            <h3>Vision</h3>
          </div>
          <p>
            To provide exceptional Exportation services in a desirable and
            conducive <br />
            sales environment while facilitating the growth of and investment in
            Nigeria by <br />
            delivering intelligent, reliable, and seamless export solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container custom-row">
    <div className="row align-items-center g-0 equal-height">
      <div className="col-md-8 description2 d-flex flex-column justify-content-center">
        <h1 className="text">Why Choose Us</h1>
        <br />
        <p>
          Tobello Global Resources is fully involved in the exportation of
          agricultural commodities <br />
          through the use of contemporary automated processes and qualified
          personnel.
        </p>
        <br />
        <br />
        <br />
        <h5>The Benefits of our products and services are:</h5>
        <ol>
          <li>High Quality and variety of products</li>
          <li>Prompt Delivery Services</li>
          <li>Best Management of goods</li>
          <li>Integrated Exports</li>
          <li>Excellent Customer Care services</li>
          <li>Fair and best possible prices</li>
        </ol>
      </div>
      {/* Right side: 4-slide carousel */}
      <div className="col-md-4">
        <div
          id="imageCarousel"
          className="carousel slide h-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100">
            {/* First Slide */}
            <div className="carousel-item active">
              <img
                src="./images/10.png"
                className="d-block w-100"
                alt="Image 1"
              />
            </div>
            {/* Second Slide */}
            <div className="carousel-item">
              <img
                src="./images/11.png"
                className="d-block w-100"
                alt="Image 2"
              />
            </div>
            {/* Third Slide */}
            <div className="carousel-item">
              <img
                src="./images/12.png"
                className="d-block w-100"
                alt="Image 3"
              />
            </div>
            {/* Fourth Slide */}
            <div className="carousel-item">
              <img
                src="./images/13.png"
                className="d-block w-100"
                alt="Image 4"
              />
            </div>
            {/* Fifth Slide */}
            <div className="carousel-item">
              <img
                src="./images/14.png"
                className="d-block w-100"
                alt="Image 4"
              />
            </div>
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</>
    </div>
  );
}
