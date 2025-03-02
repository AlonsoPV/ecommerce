import ReactHookForm from '../Components/ReactHookForm/ReactHookForm'
import SimpleForm from '../Components/SimpleForm/SimpleForm'
import './App.css'

function App() {


  return (
    <>
      <h1>Formularios</h1>
      <div style={{
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
}}>      <ReactHookForm />      <SimpleForm />
      </div>
      
    </>
  )
}

export default App
