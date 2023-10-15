import { CompletedCard, PendingCard } from "./card";
import { NoTask } from "./noTask";
import "./panel.css";

export function Panel({values, setEvent}) {
  
  let countCompleted = 0;
  values.map((value) => {
    if(value.key === false){
      countCompleted++;
    }
  })

  function deleteCard(event, id){
    values.splice(id, 1);
    values.map((value)=>{
      if(value.id > id){
        value.id = value.id - 1;
      }
    })
    event.preventDefault();
    triggerEvent(event);
  }

  function triggerEvent(event){
    return setEvent(event);
  }

  function cardVerification(event ,id){
    values.map((value) => {
      if (value.id === id && value.key === true) {
        value.key = false;
      } else if(value.id === id && value.key === false){
        value.key = true;
      }
      triggerEvent(event);
    });
  }

  return (
    <>
    <div id="panel">
      <div id="technologyCreated">
        <p>Tecnologias criadas</p>
        <div className="countCreated">
          {values.length}
        </div>
      </div>

      <div id="technologyCompleted">
        <p>Concluídas</p>
        <div className="countCompleted">
          {countCompleted} de {values.length}
        </div>
      </div>
    </div>
    <div id="tasks">
      {
        values.length === 0 && (
          <NoTask/>
        )
      }
      {
        values.map((value)=>
        {
          if(value.key === false){
            return <CompletedCard
              cardVerification={cardVerification}
              deleteCard={deleteCard}
              id={value.id}
              content={value.content}
            />
          } else if(value.key === true){
            return <PendingCard
              cardVerification={cardVerification}
              deleteCard={deleteCard}
              id={value.id}
              content={value.content}
            />
          }
        }
        )
      }
    </div>
    </>
  );
}