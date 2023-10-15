import "./input.css";
import plus from "../../img/plus.png";

export function Input({addtechnology, change}) {

  return (
    <div id="input">
      <form>
        <input onChange={change}
          name="text"
          type="text" 
          placeholder="Adicione uma nova tecnologia"
        ></input>
        <button name="submit" onClick={addtechnology}>
          Criar<img src={plus}></img>
        </button>
      </form>
    </div>
  );
}