import React, { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./Layout'));
const AnnounceSlider = lazy(() => import('../components/AnnounceSlider'));
const ProductListHome = lazy(() => import('../components/ProductListHome'));

const Dashboard = () => {
  return (
   <Layout>
    <Suspense fallback={<div>Loading...</div>}>
      <AnnounceSlider/>
      <br />
      <br />
      <ProductListHome/>
    </Suspense>
   </Layout>
  )
}

export default Dashboard
