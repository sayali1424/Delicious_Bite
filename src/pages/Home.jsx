import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import Chef from "../assets/images/Chef.webp";
import DelImg from "../assets/images/del.png";
import Main from "../assets/images/header.jpeg"

import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01
    
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02
    
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03
    
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [currentPhrase, setCurrentPhrase] = useState("HUNGRY?");
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  useEffect(() => {
    const phrases = ["FOODIE?", "CRAVINGS?", "TIRED OF GOING OUT?", "WANT EXCITED DEALS?"];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentPhrase(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  flex flex-row">
                
                <h1 className="mb-4 hero__title">
                  <span>{currentPhrase}</span>
                  <br/>
                  Delicious meals delivered to <br/>
                  <span> your doorstep</span>
                </h1>

                

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                
                </div>
                <p className="p_tag mt-3 gap-5">
                Indulge in your favorite meals without overspending.
                <br/>
                 Our dishes offer exceptional taste and quality, all at budget-friendly prices. Enjoy great food and value with every bite!
                </p>
                
                {/* <div className=" hero__service  d-flex align-items-center gap-5 mt-5 flex-col">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>

                  <p className="d-flex align-items-center gap-2">
    <span className="shipping__icon">
      <i className="ri-money-dollar-circle-line"></i>
    </span>
    Money-back guarantee
  </p>

  <p className="d-flex align-items-center gap-2">
    <span className="shipping__icon">
      <i className="ri-customer-service-2-line"></i>
    </span>
    24/7 customer support
  </p>
                </div> */}
                <div className="hero__boxes mt-3 d-flex justify-content-between">
                  <div className="box">
                    <h3><span className="number">5000+<br/></span> Deliveries</h3>
                  </div>
                  <div className="box">
                    <h3><span className="number">10000+</span> Customers</h3>
                  </div>
                  <div className="box">
                    <h3><span className="number">2000+<br/></span> Ratings</h3>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
            
              <div className="hero__img d-flex justify-content-between">
             
              <img src={Main} alt="Fast-Food-img" className="hero-img" />
              
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="hero__services-section gap-5 mt-3 ml-10">
  <Container>
    <Row>
    <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">The delivery partner you can trust 
              <br/>to bring your <span>favourite dishes</span> directly to you</h2>
              
              <p className="mb-1 mt-4 feature__text">
                
              </p>
              <p className="feature__text">
                
              </p>
            </Col>

    <div className="hero__boxes mt-3 d-flex justify-content-between">
                  <div className="box bx">
                  <p className="box_1 d-flex align-items-center gap-2 ">
            <span className="hero__services-icon">
              <i className="service_i ri-car-line"></i>
            </span>
            Quick Delivery
          </p>
          <p>Get your meals delivered fast and fresh with our efficient delivery system. 
          We ensure timely service for a satisfying dining experience.</p>
                  </div>
                  <div className="box bx">
                  <p className="box_1 d-flex align-items-center gap-2 ">
            <span className="hero__services-icon">
              <i className="service_i  ri-shield-check-line"></i>
            </span>
            100% Secure Checkout
          </p>
          <p>Shop with confidence with our secure checkout process.
           Your personal information is protected with the highest security standards.</p>
                  </div>
                  <div className="box bx">
                  <p className="box_1 d-flex align-items-center gap-2">
            <span className="hero__services-icon">
              <i className="service_i ri-money-dollar-circle-line"></i>
            </span>
            Money-Back Guarantee
          </p>
          <p>If you’re not satisfied with your purchase, we offer a straightforward money-back guarantee. 
          Your satisfaction is our priority..</p>
                  </div>
                  <div className="box bx">
                  <p className="box_1 d-flex align-items-center gap-2">
            <span className="hero__services-icon">
              <i className="service_i ri-money-dollar-circle-line"></i>
            </span>
            24/7 Customer Support
          </p>
          <p>Our dedicated support team is available around the clock to assist you with any issues or questions.
          We’re here for you at all times.</p>
                  </div>
                </div>

    </Row>
  </Container>
</section>



      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Our Offerings</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                
              </p>
              <p className="feature__text">
                
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-40 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Delicious Bite?</span>
                </h2>
                <p className="tasty__treat-desc">
                  
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                    Savor the essence of freshness with our culinary creations, made from the finest ingredients for an unforgettable taste. Enjoy a gourmet experience that's both wholesome and delicious.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                    Our dedicated team is here to provide you with exceptional service and support, ensuring your satisfaction every step of the way. Experience prompt and reliable assistance whenever you need it.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                    No matter where you are, our easy-to-use platform allows you to order your meals effortlessly.
                    Conveniently place your orders from anywhere, at any time, with our seamless online system. Enjoy the flexibility of having your favorite dishes delivered right to your doorstep.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5 ">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
