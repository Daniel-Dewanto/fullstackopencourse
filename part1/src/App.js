const Hello = (props)=>{
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old!
      </p>
    </div>
  )
}

const Footer = ()=>{
  return (
    <div>
      Greeting app created by <a href="https://github.com/daniel-dewanto" target="_blank" rel="noreferrer" >Daniel Dewanto</a>
    </div>
  )
} 

const App = () =>{
  const nameDaniel = "Daniel"
  const ageDaniel = 20
  return (
    <>
      <h1>
        Greetings!
      </h1>
      <Hello name={nameDaniel} age={ageDaniel}/>
      <Hello name="Fidelio"/>
      <Hello name="Eduardus"/>
      <Footer/>
    </>
  )
}

export default App
