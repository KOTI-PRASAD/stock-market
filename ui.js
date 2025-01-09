// StockTable.js - Display portfolio stocks in a Material-UI table
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

function StockTable({ stocks }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map(stock => (
            <TableRow key={stock.id}>
              <TableCell>{stock.name}</TableCell>
              <TableCell>{stock.buyPrice}</TableCell>
              <TableCell>{stock.quantity}</TableCell>
              <TableCell>
                {/* Add edit and delete buttons */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
