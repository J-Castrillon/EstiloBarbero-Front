// import { useState } from "react";
// import { Global } from "../helpers/global";

// export const useAjax = (url) => {
//   const [articleResults, setArticleResults] = useState([]);

//   const getAll = async () => {
//     try {
//       return await fetch(`${Global.url}/${url}`, { method: "GET" })
//         .then((response) => {
//           if (!response.ok) throw new Error(response.status);
//           return response.json();
//         })
//         .then((data) => {
//           setArticleResults(data.query);
//           return data.query;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   getAll();

//   return {
//     articleResults,
//   };
// };
