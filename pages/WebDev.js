import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import Image from 'next/image';

export default function WebDev(props)
{
    var items = [
        {
            name: <div className="TestImage"><a href="https://lobibox.com" target="_blank"><Image  className="ProjectImage" src="/images/lobibox.jpg" loading="eager" width={1834} height={5286} alt="LobiBox" /></a></div>,
            subtitle: <span>LobiBox</span>,
            description: "LobiBox is a complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. The graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <Image className="ProjectImage" src="/images/compressed/ruekotreats.jpg" loading="eager" width={1084} height={1329} alt="RuekoTreats" />,
          subtitle: <span className="RuekoTreats">Rueko Treats</span>,
          description: "RuekoTreats.com is a full service eCommerce website built on Wordpress with WooCommerce. Instant click-to-purchase integration has been enabled via the stripe API, and custom graphics were designed from basic product images."
        },
        {
          name: <Image className="ProjectImage" src="/images/compressed/tmjlawncare.jpg" loading="eager" width={1084} height={1329} alt="TMJ Lawn Care" />,
          subtitle: <span className="TMJ">TMJ Lawn Care</span>,
          description: "TMJ Lawn care is a basic website designed and developed for a local business that needed to begin generating and converting leads online."
        },
        {
          name: <Image className="ProjectImage" src="/images/compressed/jetaction.jpg" loading="eager" width={1084} height={1329} alt="JetAction" />,
          subtitle: <span className="JetAction">Jet Action Rentals</span>,
          description: "Jet Action Rentals is a full-service rental and informational website for a local Jet Ski rental business. A lead-capture form and advanced analytics were installed for re-marketing to existing customers via email campaigns."
        },
        {
          name: <Image className="ProjectImage" src="/images/compressed/sfs.jpg" loading="eager" width={1084} height={1329} alt="SFS" />,
          subtitle: <span className="SFS">Strategies For Success AZ</span>,
          description: "Strategies for Success is a HIPAA compliant form-capture and informational website utilized by a statewide network of clinics."
        },
    ]

    return (
      <Carousel
        autoPlay={false}
        interval={10000}
        animation="fade"
        timeout={1000}
        swipe={true}
        indicators={true}
        navButtonsAlwaysVisible={true}
        NavButton={({onClick, className, style, next, prev}) => {
            // Other logic
    
            return (
                <Button variant="contained" onClick={onClick} className="NavArrows" style={style}>
                    {next && "Next"}
                    {prev && "Previous"}
                </Button>
            )
        }}
      >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
      </Carousel>
    )
}

function Item(props)
{
    return (
      <div className="MainContainer">
        <div className="ProjectInfo">
          <Paper>
            <h2>{props.item.subtitle}</h2>
              <p>{props.item.description}</p>

              <Button className="CheckButton">
                  View Site
              </Button>
          </Paper>
        </div>
        <div className="ProjectImage">
          {props.item.name}
        </div>
      </div>
    )
}