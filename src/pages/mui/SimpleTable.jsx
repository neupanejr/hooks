import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { sn: 1, title: 'Example Title 1', description: 'Description 1', feedback: 'Good', ratings: 4 },
  { sn: 2, title: 'Example Title 2', description: 'Description 2', feedback: 'Excellent', ratings: 5 },
];

const SimpleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SN</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Feedback</TableCell>
            <TableCell>Ratings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.sn}>
              <TableCell>{row.sn}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.feedback}</TableCell>
              <TableCell>{row.ratings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
