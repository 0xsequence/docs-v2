import React from 'react';

const TableColumn = ({ title }: any) => {
  return <th>{title}</th>;
};

const TableRow = ({ children, index }: any) => {
  const backgroundColor = index % 2 === 0 ? '#3c393f' : '#1e1d1f';
  return (
    <tr style={{ backgroundColor }}>
      {children}
    </tr>
  );
};

const TableCell = ({ content, imgSrc }: any) => {
    return (
      <td>
        <div className="cell-content">
        {imgSrc && <img src={imgSrc} alt="" className="cell-image network-logo" />}
        <span className="cell-text">{content}</span>
      </div>
      </td>
    );
  };

const Table = ({ rows, columns }: any) => {
  return (
    <table>
      <thead>
        <tr>
        {columns.map((column: any) => {
            return <TableColumn title={column} />
        })}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData: any, index: any) => (
          <TableRow key={index} index={index}>
            <TableCell content={rowData.network} imgSrc={rowData.networkImage} />
            <TableCell content={rowData.chainHandle} />
            <TableCell content={rowData.indexerEndpoint} />
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
