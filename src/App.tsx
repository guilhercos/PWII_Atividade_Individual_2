import { Header } from "./components/Header/header";
import { Input } from "./components/Input/input";
import { Panel } from "./components/Panel/panel";
import { useState } from "react";

function App() {
const [value, setValue] = useState('');
const [values, setValues] = useState<string[]>([]);
const [trigger, setTrigger] = useState(0);

function addTechnology(event) {
  event.preventDefault();
  const newTechnology = {
    id: calculateIdValor(values),
    key: true,
    content: value
  };  
  setValues([...values, newTechnology]);
  console.log(values);
}

function setEvent(event){
  trigger;
  setTrigger(event);
}

function change(event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>){
  return setValue((event.target as HTMLTextAreaElement).value);
}

function calculateIdValor(values){
  let idValue = 0;
  values.map((value)=>{
    if(value.id === idValue){
      idValue++;
    }
  });
  return idValue;
}

  return (
    <>
    <Header/>
    <Input addtechnology={addTechnology} change={change}/>
    <Panel values={values} setEvent={setEvent}/>
    </>
  )
}

export default App