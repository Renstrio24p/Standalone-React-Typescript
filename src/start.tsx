const ReactTS = React.lazy(()=>import('./components/React'))
import './assets/css/app.css'

export default function Start(){
  return (
    <div>
      <ReactTS />
      {/*you can start coding here...*/}
    </div>
  )
}