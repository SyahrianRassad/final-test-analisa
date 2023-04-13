import React, { lazy, Suspense } from 'react';

const Footer = lazy(() => import('../components/Footer'));
const Navbar = lazy(() => import('../components/Navbar'));

const Layout = ({children}) => {
  return (
   <React.Fragment>
    <div className='container mt-3'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        <br />
        <main>{children}</main>
        <br/>
        <Footer/>
      </Suspense>
    </div>
   </React.Fragment>
  )
}

export default Layout
