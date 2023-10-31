const ReactTS = React.lazy(()=>import('./components/react'))
import './assets/css/app.css'

export default function Start(){
  return (
    <div>
      <ReactTS />
      {/*you can start coding here...*/}
    </div>
  )
}