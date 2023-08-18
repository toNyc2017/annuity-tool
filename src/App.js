import AnnuityCalculator from './AnnuityCalculator';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AnnuityCalculator />
      <video width="320" height="240" controls>
        <source src="https://res.cloudinary.com/dvse2x2pd/video/upload/v1692377518/SalmaCelloShort_zskw3k.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;

