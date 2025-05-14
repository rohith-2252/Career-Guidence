import {Button,ButtonHeader} from '../components/Button';
import './style/HomePage.css';
export function HomePage() {
  return (
    <>
    <title>HomePage</title>
    <div className="body">
      <div className="top-section">
        <div className="top-section-left">
          <img className="logo-image"src="vite.svg"></img>
        </div>
        <div className="top-section-right">
          <ButtonHeader name="Home" link="/" />
          <ButtonHeader name="Library" link="/career-library"/>
          <ButtonHeader name="Test" link="/career-test"/>
        </div>
      </div>
      <div className="bottom-section">
        {/* <Button name="Carrer Library" link="/career-library"/>
        <Button name="Carrer Test" link="/career-test"/> */}
      </div>
    </div>
    </>

  );
}