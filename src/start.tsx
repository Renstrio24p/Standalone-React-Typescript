const ReactApp = React.lazy(()=>import('./components/react'));

export default function Start(){
  return (
    <div>
      <ReactApp />
      {/*you can start coding here...*/}
    </div>
  )
}