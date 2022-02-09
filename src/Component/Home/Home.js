import React, { useEffect} from 'react';
import style from "../StyleSheet/Home/home.module.css"
import { Button} from '@material-ui/core';
import { CountUp } from 'use-count-up'
import Data from './Data';
import Aos from 'aos'
import Meta from './Meta';
import Blog from '../Blog/Blog';
import Review from '../Review/Review';


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
  <>
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="/Image/img-visual.png" alt="none"/>
              </div>
              <div className="carousel-text">
                <h3>heading you define Study &amp; Detailing</h3>          
                <p>
                  Find Over<span id="1"> <CountUp isCounting end={250} duration={3.2} />+ Exams in India.</span>
                </p>
                <button href="/" className="btn btn-custom" >Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={style["collage"]}>
        <div className={style["feature"]}>
          <div className={style["border"]}>            
            <h3 data-aos="zoom-in" offset="150" style={{ fontSize: 25, color: "#E81C2E" }} >Health</h3>
          </div>
          {/* <div className={style["name"]}><p className={style["naming"]}>College.com is an extensive search engine for the students, parents,
            and education industry players who are seeking information</p>
          </div> */}
        </div>
        {Data.map((item, index) => {
          return (
            <>

              <div className={style["containers"]}>
                <div data-aos="fade-up" offset="300" className={style["card"]} key={index}  >

                  <a className={style["decorat"]} href="/">
                    <div className={style["card-div"]}><img src={item.url} height={90} width={90} alt=""/> </div>
                    <h4>{item.heading4}</h4>
                    <p>{item.para} <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></p>
                  </a></div>
              </div>
            </>
          );
        })}
      </div>

      <Review />
      <Blog />
      <div className={style["Courses"]}>
        <div className={style["cour-div"]}>
          <h3 data-aos="fade-in">Featured Products</h3>
        </div>

        <div className={style["Course-div"]}>
          {Meta.map((item, index) => {
            return (<>
              <div className={style["Courses-btns"]} key={index} data-aos="fade-in" >
                <div className={style["Course-btns"]}>
                  <a href='/'>{item.para}</a>                
                </div>
                
              </div>
            </>);
          })}
          <Button
            variant="text" 
            color="primary"
            size="large"
            style={{ width: 185,marginTop:20}}
          // onClick={}
          >See More{`>>`}</Button>
        </div>
      </div>
     
     
      </>
  );
};

export default Home;
