import "./card.css";
import check from "../../img/check.png";
import checked from "../../img/checked.png";
import trash from "../../img/trash.png";

export function PendingCard({ id, content, deleteCard, cardVerification }) {

  return (
    <>
    <div id={id} className="card">
      <button className="marked" onClick={(event) => cardVerification(event, id) }>
        <img src={check} alt="Marcar como concluída" />
      </button>
      <p className="content">{content}</p>
      <button className="delete" onClick={(event) => deleteCard(event, id) }>
        <img src={trash} alt="Excluir" />
      </button>
    </div>
    </>
  );
}

export function CompletedCard({ id, content, deleteCard, cardVerification }) {

  return (
    <>
    <div id={id} className="cardChecked">
      <button className="marked" onClick={(event) => cardVerification(event, id) }>
        <img src={checked} alt="Marcar como concluída" />
      </button>
      <p className="contentChecked">{content}</p>
      <button className="delete" onClick={(event) => deleteCard(event, id) }>
        <img src={trash} alt="Excluir" />
      </button>
    </div>
    </>
  );
}