import { useParams } from "react-router-dom";
import ResultComponent from "./ResultComponent";

function ResultComponentWrapper() {
    const params = useParams();
    const selectedBodyItems = params.selectedItems.split(',');
    console.log("ResultComponentWrapper") 
    console.log(params.selectedItems)

    
  
    return <ResultComponent selectedBodyItems={selectedBodyItems} />;
  }

  export default ResultComponentWrapper
