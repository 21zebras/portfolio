import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import Image from 'next/image';

export default function WebDev(props)
{
    var items = [
        {
            name: <Image  className="webPortfolio" src="/images/lobiboxfull.jpg" layout="responsive" width={1920} height={5000} alt="LobiBox" />,
            subtitle: <span className="LobiBox">LobiBox</span>,
            description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <Image className="webPortfolio" src="/images/ruekotreats.png" layout="responsive" object-fit="cover" width={1920} height={5000} alt="RuekoTreats" />,
          subtitle: <span className="RuekoTreats">Rueko Treats</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <Image className="webPortfolio" src="/images/tmjlawncare.png" layout="responsive" object-fit="cover" width={1920} height={5000} alt="TMJ Lawn Care" />,
          subtitle: <span className="TMJ">TMJ Lawn Care</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <Image className="webPortfolio" src="/images/jetaction.png" layout="responsive" object-fit="cover" width={1920} height={5000} alt="JetAction" />,
          subtitle: <span className="JetAction">Jet Action Rentals</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <Image className="webPortfolio" src="/images/sfs.png" layout="responsive" object-fit="cover" width={1920} height={5000} alt="SFS" />,
          subtitle: <span className="SFS">Strategies For Success AZ</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <Image className="webPortfolio" src="/images/datenightfoodreviews.png" layout="responsive" object-fit="cover" width={1920} height={5000} alt="Date Night Food Reviews" />,
          subtitle: <span className="DateNightFoorReviews">Date Night Food Reviews</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
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