import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Box } from "@mui/material";

const ListaAlunos = () => {
  const alunos = [
    {
      nome: "Luciana",
      idade: "33",
      cidade: "Taguatinga",
    },
    {
      nome: "Maya",
      idade: "30",
      cidade: "Brasília",
    },
    {
      nome: "Chica",
      idade: "22",
      cidade: "Oeste das Flores",
    },
  ];

  return (
    <Container maxWidth="lg"> 
    <Box sx={{display:"flex", justifyContent:"center", flex:1}}>
    <TableContainer component={Paper} sx={{ maxWidth: "650px" }}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Idade</TableCell>
            <TableCell align="center">Cidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

{/* Map é usado como uma "otimização" do For  */}
          {alunos.map((aluno) => (
            <TableRow key={aluno.name}>        
              <TableCell align="center">{aluno.nome}</TableCell>
              <TableCell align="center">{aluno.idade}</TableCell>
              <TableCell align="center">{aluno.cidade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Container>
  );
};
export default ListaAlunos;
