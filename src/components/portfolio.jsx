import React from "react";

//import stock

import stock from "../img/airfort.png";
import stock1 from "../img/diagfort.png";
import stock2 from "../img/bluefort.png";
import stock3 from "../img/iojobsfort.png";
import stock4 from "../img/plastfort.png";
import stock5 from "../img/accessfort.png";



class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Check out some of my awesome works.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">AIRSTERIL AUSTRALIA</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Wordpress Woocommerce
                          </span>                   
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href='http://airsteril.net.au/' target="_blank"><button class="live-web" >LIVE WEBSITE</button></a>
              
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">DIAGBUDDY</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 VanillaJS
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='https://aflorendo93.gitlab.io/js-capstone/' target="_blank"><button class="live-web" >LIVE WEBSITE</button></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">BLUE MAPLE</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href='https://dazzling-mcnulty-d99850.netlify.app/' target="_blank"><button class="live-web" >LIVE WEBSITE</button></a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">IOJOBS</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML CSS Javascript Bootstrap Laravel 
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='http://murmuring-eyrie-21733.herokuapp.com/iohome' target="_blank"><button class="live-web" >LIVE WEBSITE</button></a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">PLASBACK NZ</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Wordpress</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='https://plasback.co.nz/' target="_blank"><button class="live-web" >LIVE WEBSITE</button></a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">ACCESSMAN NZ</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Wordpress Woocommerce
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a href='https://accessman.co.nz/' target="_blank"><button class="live-web" >LIVE WEBSITE</button></a>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
