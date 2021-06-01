import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Divider } from 'rsuite'

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
          <h4>robert@mccraw.net</h4>
          <h4>Websites</h4>
          <h4>Ad Designs</h4>
          <h4>Skills</h4>
          <h4>Contact</h4>
          <h4>Social</h4>
        </div>
        <div className="Content">
          <div className="PageTitle"><h3>Recent Websites</h3></div>
          <div className="Col1"><a href="https://lobibox.com" target="_blank"><Image src="/images/square/lobibox.jpg" width={512} height={512}/></a></div>
          <div className="Col2"><a href="https://ruekotreats.com" target="_blank"><Image src="/images/square/ruekotreats.jpg" width={512} height={512}/></a></div>
          <div className="Col1"><a href="https://jetaction.com" target="_blank"><Image src="/images/square/jetaction.jpg" width={512} height={512}/></a></div>
          <div className="Col2"><a href="https://strategiesforsuccessaz.com" target="_blank"><Image src="/images/square/sfs.jpg" width={512} height={512}/></a></div>
          <div className="Col1"><a href="https://tmjlawncare.com" target="_blank"><Image src="/images/square/tmjlawncare.jpg" width={512} height={512}/></a></div>
          <div className="Col2"><a href="https://datenightfoodreviews.com" target="_blank"><Image src="/images/square/datenighfoodreviews.jpg" width={512} height={512}/></a></div>
        </div>
      </div>
    </div>
  )
}
