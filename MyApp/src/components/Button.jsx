import {Link} from "react-router-dom"
import './Button.css'

export function Button({name,link}) {
  return (
    <>
      <Link to = {link}><a href="#"><span>{name}</span><i></i></a></Link>
    </>
  )
}
