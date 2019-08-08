import React, { Fragment } from 'react'
import HomePage from './homePage.js';
import { Clients } from './clients.js';
import Testimonials from './testimonials.js';
import Company from "./company.js";
import DomainExperties from './domainExperties.js'
import WhatWeDo from './whatWeDo.js';
import Innovations from './innovations.js'
import SuccessStories from './successStories.js';
import ContactUs from './contactUs.js'

const Home = () => {
  return (
    <Fragment>
      <HomePage />
      <DomainExperties />
      <WhatWeDo />
      <Innovations />
      <Clients />
      <Testimonials />
      <SuccessStories />
      <Company />
      <ContactUs />
    </Fragment>
  )
}

export default Home;