import Availablity from './components/availablity/Availablity';
import ChoosePlan from './components/choosePlan/ChoosePlan';
import DataProvider from './components/dateProvider/DataProvider';
import Features from './components/features/Features';
import HeaderSection from './components/headerSection/HeaderSection';

function App() {
  return (
    <>
      <HeaderSection />
      <DataProvider />
      <Features />
      <Availablity />
      <ChoosePlan />
    </>
  );
}

export default App;
