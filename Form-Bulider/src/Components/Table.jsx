// import React, { useEffect, useState } from "react";


// import "../Styles/table.css"; // You’ll define styles here
// import { Eye, Edit } from "lucide-react"; 
// import axios from "axios";

// const Table = () => {
//   const [data, setData] = useState([]);

//   //useEffect(() => {
//    // const storedData = JSON.parse(localStorage.getItem("formDataList")) || [];
//    // setData(storedData);
//  // }, []);

//  useEffect(() => {
  
//   axios.get('https://fakestoreapi.com/products')
//     .then((response) => {
//       setData(response.data); // This will update the table
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//     });
// }, []);


//   return (
//     <div className="table-container">
//       <table className="lead-table">
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Lead ID</th>
//             <th>Lead Name</th>
//             <th>Email</th>
//             <th>Source</th>
//             <th>Size</th>
//             <th>Status</th>
//             <th>Interest</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length === 0 ? (
//             <tr>
//               <td colSpan="9">No leads available</td>
//             </tr>
//           ) : (
//             data.map((item, index) => (
//               <tr key={index}>
//                 <td>{String(index + 1).padStart(2, "0")}</td>
//                 <td className="lead-id">L2939{index + 1}</td>
//                 <td>{item.lastName || "Unknown"}</td>
//                 <td>{item.email1}</td>
//                 <td>{item.industry || "LinkedIn"}</td>
//                 <td>{item.revenue || "Large"}</td>
//                 <td>
//                   <span className={`status-badge ${item.status?.toLowerCase()}`}>
//                     {item.status || "Completed"}
//                   </span>
//                 </td>
//                 <td>{item.title || "Product Demo"}</td>
//                 <td className="action-icons">
//                   <Eye size={18} style={{ cursor: "pointer" }} />
//                   <Edit size={18} style={{ cursor: "pointer", marginLeft: "10px" }} />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;



// 

import React, { useEffect, useState } from "react";
import "../Styles/table.css";
import { Eye, Edit } from "lucide-react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="table-container">
      <table className="lead-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length === 0 ? (
            <tr>
              <td colSpan="5">Loading leads...</td>
            </tr>
          ) : (
            currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
