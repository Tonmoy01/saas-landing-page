import React from 'react';
import HeaderSection from '../../components/headerSection/HeaderSection';
import DataProvider from '../../components/dataProvider/DataProvider';
import Features from '../../components/features/Features';
import Availablity from '../../components/availablity/Availablity';
import ChoosePlan from '../../components/choosePlan/ChoosePlan';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <HeaderSection />
      <DataProvider />
      <Features />
      <Availablity />
      <ChoosePlan />
      <Footer />
    </>
  );
}

export default Home;
