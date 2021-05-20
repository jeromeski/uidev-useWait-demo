import { useEffect, useState } from "react";
import "./styles.css";


const useWait = (delay) => {
  const [show, setShow] = useState(false);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true)
      }, delay)
      return () => clearTimeout(timeout)
    },[delay])
  return show
}


const Wait = ({delay = 1000, ui, placeholder}) => {
  const show = useWait(delay)

  return show === true
    ? ui
    : placeholder
}

export default function App() {

  return (
    <div className="App">
      <Wait 
        delay={3000}
        ui={<h1>Look Ma! No hands!</h1>}
        placeholder={<h1>Waiting...</h1>}
      />
    </div>
  );
}
