import React from "react";
import { useHistory } from 'react-router';

import { User } from "../../zustand/types";

export default React.memo(function UserItem({
  address,
  company,
  email,
  id,
  name,
  phone,
  username,
  website
}: User) {
  const history = useHistory();

  const handleClick = () => {
    // Cambio de ruta
    history.push("/users/" + id )
  }
  return (
    <div style={ {margin:10, display:"flex", flexDirection:"column", border: "1px solid black", padding: 10 }} onClick={handleClick}>

      <label> {name} </label> 
      <label> {phone} </label>
      <label> {email} </label>
      <button style={ {width: 200, marginTop:10}}> Ver Detalle </button>
    </div>
  );
});
