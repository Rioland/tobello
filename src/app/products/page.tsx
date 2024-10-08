import React from "react";

const Product = () => {
  return (
    <div className="container prod">
      <>
        <div className="container mt-5">
          <h2>Bovine Products</h2>
          <p>
            As a worldwide industry leader in the manufacturing and exportation
            of bovine products, we proudly hold an EU Import/Export License. Our
            bovine <br />
            products, renowned for their high calcium and potassium content, are
            the ideal choice for organic fertilizer production.
          </p>
          <div className="row lasts">
            {/* Left Column (md-6) */}
            <div className="col-md-3">
              <h2 />
            </div>
            {/* Right Column with Two Sections (Images) */}
            <div className="col-md-9">
              {/* First row of 3 taller images with descriptions */}
              <div className="row image-row mb-4">
                <div className="col-md-4">
                  <img
                    src="./products images/1.png"
                    alt="Image 1"
                    className="img-fluid tall-image"
                  />
                  <div className="image-description">Image 1 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/2.png"
                    alt="Image 2"
                    className="img-fluid tall-image"
                  />
                  <div className="image-description">Image 2 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/3.png"
                    alt="Image 3"
                    className="img-fluid tall-image"
                  />
                  <div className="image-description">Image 3 Description</div>
                </div>
              </div>
              {/* Second row of 3 normal height images with descriptions */}
              <div className="row image-row ">
                <div className="col-md-4">
                  <img
                    src="./products images/4.png"
                    alt="Image 4"
                    className="img-fluid normal-image"
                  />
                  <div className="image-description">Image 4 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/5.png"
                    alt="Image 5"
                    className="img-fluid normal-image"
                  />
                  <div className="image-description">Image 5 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/6.png"
                    alt="Image 6"
                    className="img-fluid normal-image"
                  />
                  <div className="image-description">Image 6 Description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h2>Agro Products</h2>
          <div className="row lasts">
            {/* Left Column (md-6) */}
            <div className="col-md-3">
              <h2 />
            </div>
            {/* Right Column with Two Sections (Images) */}
            <div className="col-md-9">
              {/* First row of 3 taller images with descriptions */}
              <div className="row image-row mb-4">
                <div className="col-md-4">
                  <img
                    src="./products images/7.png"
                    alt="Image 1"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 7 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/8.png"
                    alt="Image 2"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 8 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/9.png"
                    alt="Image 3"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 9 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/10.png"
                    alt="Image 4"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 10 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/11.png"
                    alt="Image 5"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 11 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/12.png"
                    alt="Image 6"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 12 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/13.png"
                    alt="Image 4"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 13 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/14.png"
                    alt="Image 5"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 14 Description</div>
                </div>
                <div className="col-md-4">
                  <img
                    src="./products images/15.png"
                    alt="Image 6"
                    className="img-fluid talls-image"
                  />
                  <div className="image-description">Image 15 Description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row image-row last container ">
          <h2>Coming Soon</h2>
          <div className="lasts">
            <div className="col-md-3">
              <img
                src="./products images/10.png"
                alt="Image 4"
                className="img-fluid normal-image"
              />
              <div className="image-description">Image 1 Description</div>
            </div>
            <div className="col-md-3">
              <img
                src="./products images/11.png"
                alt="Image 5"
                className="img-fluid normal-image"
              />
              <div className="image-description">Image 2 Description</div>
            </div>
            <div className="col-md-3">
              <img
                src="./products images/12.png"
                alt="Image 6"
                className="img-fluid slide-image"
              />
              <div className="image-description">Image 3 Description</div>
            </div>
            <div className="col-md-3">
              <img
                src="./products images/13.png"
                alt="Image 4"
                className="img-fluid slide-image"
              />
              <div className="image-description">Image 4 Description</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Product;
