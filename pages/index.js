import Link from 'next/link'
import Head from 'next/head'

export default function Home(props)
{
  return (
    <div className="ComingSoon">
      <Head>
        <title>Robert McCraw - Personal Web Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2 className="CsHeader">Portfolio Coming Soon...</h2>
      <Link href="mailto:rmccraw51@gmail.com">Contact Robert</Link>
    </div>
  )
}
