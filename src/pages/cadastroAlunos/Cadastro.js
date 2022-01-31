import { Button } from "@mui/material";
import React from "react";

 const Cadastro = () => {
  return (
    <>
      <input type="text" placeholder="nome"></input>
      <input type="text" placeholder="email"></input>
      <Button variant="outlined">Outlined</Button>
    </>
  );
};
export default Cadastro;