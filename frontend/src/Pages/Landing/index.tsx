// import './App.css';
import Navbar from './components/Navbar';
import BannerPart from './components/BannerPart';
import AIBooks from './components/AIBooks';
import CustomerFeedback from './components/CustomerFeedback';
import Need from './components/Need';

export default function Landing() {
  return (
    <div className="App">
      <Navbar/>
      {/* <hr/> */}
      <BannerPart/>
      <AIBooks/>
      <CustomerFeedback/>
      <Need/>
    </div>
  );
}
