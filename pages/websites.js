import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Websites(props)
{
  return (
    <div className="PageBody">
      <div className="MainWrapper">
        <Head>
          <title>Robert McCraw - Personal Web Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="Nav">
          <Image src="/images/me-circle-is-st.png" width={512} height={512}/>
          <h3>Robert McCraw</h3>
          <h5>robert@mccraw.net</h5>
          <h5>Websites</h5>
          <h5>Ad Designs</h5>
          <h5>Skills</h5>
          <h5>Contact</h5>
          <h5>Social</h5>
        </div>
        <div className="Content">
          <div className="PageTitle"><h3>Recent Websites</h3></div>
          <div className="Col1">
            <a href="https://lobibox.com" target="_blank">
              <Image src="/images/square/lobibox.jpg" width={512} height={512}/>
              <div className="TitleCard"><h4>LobiBox</h4></div>
            </a>
          </div>
          <div className="Col2">
            <a href="https://ruekotreats.com" target="_blank">
              <Image src="/images/square/ruekotreats.jpg" width={512} height={512}/>
              <div className="TitleCard"><h4>Rueko Treats</h4></div>
            </a>
          </div>
          <div className="Col1">
            <a href="https://jetaction.com" target="_blank">
              <Image src="/images/square/jetaction.jpg" width={512} height={512}/>
              <div className="TitleCard"><h4>Jet Action Rentals</h4></div>
            </a>
          </div>
          <div className="Col2">
            <a href="https://strategiesforsuccessaz.com" target="_blank">
              <Image src="/images/square/sfs.jpg" width={512} height={512}/>
              <div className="TitleCard"><h4>Strategies For Success</h4></div>
            </a>
          </div>
          <div className="Col1">
            <a href="https://tmjlawncare.com" target="_blank">
              <Image src="/images/square/tmjlawncare.jpg" width={512} height={512}/>
              <div className="TitleCard"><h4>TMJ Lawn Care</h4></div>
            </a>
          </div>
          <div className="Col2">
            <a href="https://datenightfoodreviews.com" target="_blank">
              <Image src="/images/square/datenighfoodreviews.jpg" width={512} height={512}/>
              <div className="TitleCard"><h4>Date Nite Foodies</h4></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
