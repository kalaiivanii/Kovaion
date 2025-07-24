import React from "react";
import "./table.css";
const Table = () => {
  const data = [
    {
      ID: "L-123",
      Lead: "John Watkins",
      Email: "john@tech.corp",
      Status: "Negotiation",
      Value: "$1,250",
      Actions: "Review",
    },
    {
      ID: "L-124",
      Lead: "Michael Scott",
      Email: "michael@tech.corp",
      Status: "Pre-sale",
      Value: "$2,750",
      Actions: "Review",
    },
  ];
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr className="head">
            <th>ID</th>
            <th>Lead</th>
            <th>Email</th>
            <th>Status</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr>
              <td>{i.ID}</td>
              <td>{i.Lead}</td>
              <td>{i.Email}</td>
              <td>
                <span
                  className={`status-badge ${i.Status.toLowerCase().replace(
                    /\s/g,
                    "-"
                  )}`}
                >
                  {i.Status}
                </span>
              </td>
              <td>{i.Value}</td>
              <td>{i.Actions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
