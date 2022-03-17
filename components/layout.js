// components/layout.js

import Navbar from './menu/navbar'
import Footer from './footer'

export default function Layout({ menu, footer, children }) {
  return (
    <>
      <Navbar menu={menu} />
      <main>{children}</main>
      <Footer menu={footer}/>
    </>
  )
}