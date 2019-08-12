import React, { Fragment } from 'react'

import JoshCarousel from './carousel.js';
import {
  Heading1,
  TestimonialBox,
  TestimonialBoxText,
  ClientDesignationBox,
  ClientNameBox,
  Quotes,
  ReadMoreBtn,
  ClientName,
} from "./homeStyledComponents.js"


const Testimonials = (props) => {
  const { testimonialData } = props;

  const items = testimonialData.map(testimonial => {
    return <Testimonial {...testimonial} key={testimonial.id} />

  })

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots slick-thumb orange-color",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Heading1>Here’s what our clients are saying</Heading1>
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10 height-adjust">
          <JoshCarousel items={items} settings={settings}></JoshCarousel>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  )
}

const Testimonial = (props) => {
  const { text, clientName, clientDesignation } = props;

  return (
    <Fragment>
      <TestimonialBox >
        <Quotes><i>&#65282;</i></Quotes>
        <TestimonialBoxText>
          {text}
          <ReadMoreBtn className="btn btn-outline-danger width-adjust"><span>Read More</span></ReadMoreBtn>
        </TestimonialBoxText>
      </TestimonialBox>
      <ClientNameBox>
        <ClientName>{clientName}</ClientName>
      </ClientNameBox>
      <ClientDesignationBox ><span>{clientDesignation}</span></ClientDesignationBox>
    </Fragment>
  )
}

Testimonials.defaultProps = {
  testimonialData: [
    {
      id: 1,
      text: "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients.",
      clientName: "Dr. Pramod Tripathi",
      clientDesignation: "Founder FFD",
    },
    {
      id: 2,
      text: "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients.",
      clientName: "Dr. Pramod Tripathi",
      clientDesignation: "Founder FFD"
    },
    {
      id: 3,
      text: "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients.",
      clientName: "Dr. Pramod Tripathi",
      clientDesignation: "Founder FFD"
    },
    {
      id: 4,
      text: "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients.",
      clientName: "Dr. Pramod Tripathi",
      clientDesignation: "Founder FFD"
    },
    {
      id: 5,
      text: "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients.",
      clientName: "Dr. Pramod Tripathi",
      clientDesignation: "Founder FFD"
    }
  ]
}

export default Testimonials;


