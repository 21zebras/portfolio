import Link from 'next/link'
import Head from 'next/head'

export default function Home(props)
{
  return (
    <div className="PageBody">
      <div className="MainWrapper">
        <Head>
          <title>Robert McCraw - Personal Web Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="Nav">
          <h3>Logo</h3>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Menu</h3>
          <h3>Social</h3>
        </div>
        <div className="Content">
          <div className="PageTitle"><h3>Recent Websites</h3></div>
          <div className="Col1"><h4>Test</h4></div>
          <div className="Col2"><h4>Test</h4></div>
        </div>
      </div>
    </div>
  )
}
