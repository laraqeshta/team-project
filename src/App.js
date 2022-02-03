import react from 'react';

//style
import './App.css';

//component
import Features from './component/Features';
import ChoosYourPlan from './component/ChooseYourPlan';
import HugeGlobal from './component/HugeGlobal';


function App() {
  return (
    <div className="App">
      <ChoosYourPlan />
      <HugeGlobal />
    </div>
  );
}

export default App;
