// import { CircularProgress } from "@mui/material";
// import React from "react";
// import { Redirect, Route } from "react-router";
// import useAuth from "../../../hooks/useAuth";

// const AdminRoute = ({ children, ...rest }) => {
//   const { user, isLoading, role } = useAuth();

//   if (isLoading) {
//     return <CircularProgress />;
//   }
//   return (
//     <div>
//       <Route
//         {...rest}
//         render={({ location }) =>
//           user?.email && role?.role !== "block" ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/home",
//                 state: { from: location },
//               }}
//             />
//           )
//         }
//       />
//     </div>
//   );
// };

// export default AdminRoute;
