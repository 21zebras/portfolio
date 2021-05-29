import Head from 'next/head'
import Image from 'next/image'
import NavMenu from "./NavMenu.js";
import WebDev from "./WebDev.js";

export default function Home(props)
{
  return (
    <div className="PageWrapper">
      <NavMenu />
      <WebDev />
    </div>
  )
}
