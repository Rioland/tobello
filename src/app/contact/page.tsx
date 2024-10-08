import React from "react";

const Contact = () => {
  return (
    <div className="con container">
      <>
        <div className="about">
          <img
            src="./contact us image/pexels-pixabay-262353-scaled.jpg"
            alt=""
          />
          <div className="text-overlay">Contact Us Today</div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {/* Left Column (md-6) */}
            <div className="col-md-6 first">
              <div className="one1">
                <p className="one2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-person-lines-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                  </svg>
                </p>
                <h2>Address</h2>
              </div>
              <p>97,Lukosi Semowa Road, Pole bus-stop, Sagamu, Ogun State.</p>{" "}
              <br />
              <div className="one1">
                <p className="one2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </p>
                <h2>Call Us</h2>
              </div>
              <p>
                +234 807 949 6838 <br />
                +234 809 821 9000
              </p>
              <br />
              <div className="one1">
                <p className="one2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-envelope-arrow-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                  </svg>
                </p>
                <h2>Email Us</h2>
              </div>
              <p>
                info@tobellointegrated.com <br />
                tobellointegrated@gmail.com
              </p>
            </div>
            <form className="mx-auto custom-width">
              {/* Name Row */}
              <div className="row mb-6">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              {/* Subject Row */}
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                />
              </div>
              {/* Email Row */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              {/* Enquiry/Message Row */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Enquiry/Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  placeholder="Type your message here"
                  defaultValue={""}
                />
              </div>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
