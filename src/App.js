import './App.css';
import Header from './components/Header';
import NewsLetter from './components/NewsLetter';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <NewsLetter/>
    </div>
  );
}

export default App;
