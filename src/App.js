import './App.css';
import ColorBand1 from './components/ColorBand1';
import MainMenu from './components/MainMenu';
import HeaderTitle from './components/HeaderTitle';
import SectionContainer from './components/SectionContainer';

function App() {
  return (
    <div className="App">
      <ColorBand1/>
      <MainMenu/>
      <SectionContainer/>
    </div>
  );
}

export default App;
