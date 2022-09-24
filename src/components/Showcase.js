import React from "react";
import showcase from "../imgs/showcase.svg";
const Showcase = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                asperiores perspiciatis, ad reiciendis eaque vel cum
                voluptatibus natus nesciunt corporis, non blanditiis laudantium
                quod quisquam ullam nihil consequuntur dicta sint!
                          </p>
                          <button className="btn btn-lg btn-primary">Enroll</button>
            </div>
            <img
              src={showcase}
              alt="showcase img"
              className="img-fluid w-50 d-none d-sm-block"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
