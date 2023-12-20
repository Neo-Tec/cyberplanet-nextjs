"use client"
import React, { useEffect, useState } from 'react';
// import { a, Nava } from 'react-router-dom';
// import a from "next/a";
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <a className="cs-site_branding" to="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </a>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item-has-children">
                      <Nava to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Nava>
                      <DropDown>
                        <ul>
                          <li>
                            <a to="/" onClick={() => setMobileToggle(false)}>
                              Main Home
                            </a>
                          </li>
                          <li>
                            <a
                              to="photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </a>
                          </li>
                          <li>
                            <a
                              to="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              to="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </a>
                          </li>
                          <li>
                            <a
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </a>
                          </li>
                          <li>
                            <a
                              to="showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              to="case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Nava
                        to="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Nava>
                    </li>
                    <li className="menu-item-has-children">
                      <Nava
                        to="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Nava>
                      <DropDown>
                        <ul>
                          <li>
                            <a
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Services
                            </a>
                          </li>
                          <li>
                            <a
                              to="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Service Details
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Nava
                        to="portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Nava>
                      <DropDown>
                        <ul>
                          <li>
                            <a
                              to="portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              to="portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Nava to="blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </Nava>
                      <DropDown>
                        <ul>
                          <li>
                            <a
                              to="blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              to="blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <a to="/" onClick={() => setMobileToggle(false)}>
                        Pages
                      </a>
                      <DropDown>
                        <ul>
                          <li>
                            <a
                              to="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </a>
                          </li>
                          <li>
                            <a
                              to="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </a>
                          </li>
                          <li>
                            <a
                              to="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </a>
                          </li>
                          <li>
                            <a
                              to="/case-study/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </a>
                          </li>
                          <li>
                            <a
                              to="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <a className="cs-site_branding" to="/">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </a>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
