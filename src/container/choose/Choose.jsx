import React from "react";
import "./choose.css";
import cars from "../../images/cars.png";
import crossCountry from "../../images/cross_country.png";
import pricing from "../../images/pricing.png";
import charges from "../../images/charges.png";

const Choose = () => {
  return (
    <div className="app__choose" id="contact">
      <div className="app__choose_image">
        <img src={cars} alt="cars" />
      </div>
      <div className="app__choose_content">
        <div className="app__choose_content_text">
          <h4>Why Choose Us</h4>
          <h2>Best valued deals you will ever find</h2>
          <span>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </span>
          <h3> Find Details</h3>
        </div>
        <div className="app__choose_content_benefits">
          <div className="app__choose_content_benefits_single">
            <img src={crossCountry} alt="benefit" />
            <div className="app__choose_content_benefits_single_text">
              <h2>Cross Country Drive</h2>
              <span>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </span>
            </div>
          </div>
          <div className="app__choose_content_benefits_single">
            <img src={pricing} alt="benefit" />
            <div className="app__choose_content_benefits_single_text">
              <h2>All Inclusive Pricing</h2>
              <span>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </span>
            </div>
          </div>
          <div className="app__choose_content_benefits_single">
            <img src={charges} alt="benefit" />
            <div className="app__choose_content_benefits_single_text">
              <h2>No Hidden Charges</h2>
              <span>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
