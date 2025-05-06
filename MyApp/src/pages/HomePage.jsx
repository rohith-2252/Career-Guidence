import {Button} from '../components/Button';
import './HomePage.css';
export function HomePage() {
  return (
    <>
    <title>HomePage</title>
    <div className="body">
      <div className="top-section">
        <h1>Welcome to My App</h1>
      </div>
      <div className="bottom-section">
        <Button name="Carrer Library" link="/career-library"/>
        <Button name="Carrer Test" link="/career-test"/>
      </div>
    </div>
    </>

  );
}