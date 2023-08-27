import { Link } from "react-router-dom";

function ResultComponent({ selectedBodyItems, male }) {

  

  return (
    <div>
        <Link to={'/'}> Home </Link>
        {selectedBodyItems.map((item, id) => <li key={id}>{item}</li>)}
    </div>
  );
}

export default ResultComponent;

