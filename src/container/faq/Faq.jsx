import { React, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./faq.css";
import bg from "../../images/faq-bg.png";

const Faq = () => {
  const [menu, setMenu] = useState(1);
  return (
    <div className="app__faq" id="faq">
      <img src={bg} alt="background car" />
      <div className="app__faq_title">
        <h4>FAQ</h4>
        <h2>Frequently Asked Questions</h2>
        <span>
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </span>
      </div>
      <div className="app__faq_content">
        <div
          className="app__faq_content_faq_box"
          onClick={() => setMenu(1)}
          style={{
            background:
              menu === 1
                ? "linear-gradient(153deg, rgba(221,2,3,1) 5%, rgba(154,48,10,1) 50%, rgba(221,2,3,1) 90%)"
                : "rgb(255, 255, 255)",
            color: menu === 1 ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
          }}
        >
          <span>1. What is special about comparing rental car deals?</span>{" "}
          <FaAngleDown />
        </div>
        <div
          className="app__faq_content_faq_box_text"
          style={{ display: menu === 1 ? "flex" : "none" }}
        >
          <span>
            {" "}
            Comparing rental car deals is important as it helps find the best
            deal that fits your budget and requirements, ensuring you get the
            most value for your money. By comparing various options, you can
            find deals that offer lower prices, additional services, or better
            car models. You can find car rental deals by researching online and
            comparing prices from different rental companies.
          </span>
        </div>
        <div
          className="app__faq_content_faq_box"
          onClick={() => setMenu(2)}
          style={{
            background:
              menu === 2
                ? "linear-gradient(153deg, rgba(221,2,3,1) 5%, rgba(154,48,10,1) 50%, rgba(221,2,3,1) 90%)"
                : "rgb(255, 255, 255)",
            color: menu === 2 ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
          }}
        >
          <span>2. How do I find the car rental deals?</span>
          <FaAngleDown />
        </div>
        <div
          className="app__faq_content_faq_box_text"
          style={{ display: menu === 2 ? "flex" : "none" }}
        >
          <span>
            You can find car rental deals by researching online and comparing
            prices from different rental companies. Websites such as Expedia,
            Kayak, and Travelocity allow you to compare prices and view
            available rental options. It is also recommended to sign up for
            email newsletters and follow rental car companies on social media to
            be informed of any special deals or promotions.
          </span>
        </div>
        <div
          className="app__faq_content_faq_box"
          onClick={() => setMenu(3)}
          style={{
            background:
              menu === 3
                ? "linear-gradient(153deg, rgba(221,2,3,1) 5%, rgba(154,48,10,1) 50%, rgba(221,2,3,1) 90%)"
                : "rgb(255, 255, 255)",
            color: menu === 3 ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)",
          }}
        >
          <span>3. How do I find such low rental car prices?</span>
          <FaAngleDown />
        </div>
        <div
          className="app__faq_content_faq_box_text"
          style={{
            display: menu === 3 ? "flex" : "none",
          }}
        >
          <span>
            Book in advance: Booking your rental car ahead of time can often
            result in lower prices. Compare prices from multiple companies: Use
            websites like Kayak, Expedia, or Travelocity to compare prices from
            multiple rental car companies. Look for discount codes and coupons:
            Search for discount codes and coupons that you can use to lower the
            rental price. Renting from an off-airport location can sometimes
            result in lower prices.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
