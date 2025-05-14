import {Link} from "react-router-dom"
import './Button.css'

export function Button({name,link}) {
  return (
    <>
      <Link to = {link}><a className="button-1"href="#"><span>{name}</span><i></i></a></Link>
    </>
  )
}
export function ButtonHeader({name,link}){
  return(
    <>
      <Link to ={link}><p className="header-navigator">{name}</p></Link>
    </>
  );
}