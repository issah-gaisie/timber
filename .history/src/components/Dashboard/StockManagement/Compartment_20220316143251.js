import React from 'react'
import Input from "../../Input";
import toast from "react-hot-toast";
import { FormGrid } from "../Users/AddANewUser";
const Compartment = () => {
    const [state, setState] = useState({
        compartmentName: "ErnestGaisie",
        concession: "Ernest",
        description: "Gaisie",
        numberOfTrees: "ernestgaisie@gmail.com",
        compartmentSiz: "+23355234566",
      });
  return (
    <div>Compartment</div>
  )
}

export default Compartment