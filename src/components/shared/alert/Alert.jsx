import {useContext} from 'react'
import AlertContext from '../../../context/alert/AlertContext'
import './style/alert.css'
function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !== null && (
 

    <div className = {alert.type === "success" ? (' alert_box success') : (' alert_box error')}>
        <p>{alert.msg}</p>
    </div>
  
  )
}

export default Alert