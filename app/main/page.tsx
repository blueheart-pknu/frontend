// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import styled from "styled-components";

// interface User {
//   name: string;
//   email: string;
//   role: "Admin" | "User";
//   status: "Active" | "Inactive";
//   lastLogin: string;
//   avatarUrl: string;
// }

// const mockUsers: User[] = [
//   {
//     name: "Sarah Wilson",
//     email: "sarah.wilson@example.com",
//     role: "Admin",
//     status: "Active", // 그룹으로 받기
//     lastLogin: "2 hours ago",
//     avatarUrl: "https://via.placeholder.com/40",
//   },
//   {
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     role: "User",
//     status: "Active",
//     lastLogin: "1 day ago",
//     avatarUrl: "https://via.placeholder.com/40",
//   },
// ];

// export default function Page() {
//   const [page, setPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);

//   const handlePageChange = (newPage: number) => setPage(newPage);
//   const handleItemsChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
//     setItemsPerPage(Number(e.target.value));

//   return (
//     <Container>
//       <Header>
//         <Logo>User Management</Logo>
//         <Profile>
//           <Avatar src="/png/dummy_1.png" alt="Admin" />
//           <Username>John Admin</Username>
//         </Profile>
//       </Header>
//       <SearchBar>
//         <SearchInput placeholder="Search users..." />
//         <CreateButton>+ Create New User</CreateButton>
//       </SearchBar>

//       <Table>
//         <TableHeader>
//           <Column>User</Column>
//           <Column>Role</Column>
//           <Column>Status</Column>
//           <Column>Last Login</Column>
//           <Column>Actions</Column>
//         </TableHeader>
//         {mockUsers.map((user, index) => (
//           <TableRow key={index}>
//             <UserInfo>
//               <Avatar src={user.avatarUrl} alt={user.name} />
//               <div>
//                 <UserName>{user.name}</UserName>
//                 <UserEmail>{user.email}</UserEmail>
//               </div>
//             </UserInfo>
//             <Column>{user.role}</Column>
//             <StatusBadge status={user.status}>{user.status}</StatusBadge>
//             <Column>{user.lastLogin}</Column>
//             <Actions>
//               <EditButton>✏️</EditButton>
//               <DeleteButton>🗑️</DeleteButton>
//             </Actions>
//           </TableRow>
//         ))}
//       </Table>

//       <Pagination>
//         <Select onChange={handleItemsChange} value={itemsPerPage}>
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="50">50</option>
//         </Select>
//         <span>entries</span>
//         <PageNav>
//           <PageButton
//             onClick={() => handlePageChange(page - 1)}
//             disabled={page === 1}
//           >
//             Previous
//           </PageButton>
//           {[1, 2, 3].map((num) => (
//             <PageButton
//               key={num}
//               onClick={() => handlePageChange(num)}
//               active={page === num}
//             >
//               {num}
//             </PageButton>
//           ))}
//           <PageButton onClick={() => handlePageChange(page + 1)}>
//             Next
//           </PageButton>
//         </PageNav>
//       </Pagination>
//     </Container>
//   );
// }

// const Container = styled.div`
//   padding: 20px;
//   max-width: 1000px;
//   margin: 0 auto;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-bottom: 20px;
// `;

// const Logo = styled.h1`
//   font-size: 24px;
//   color: #333;
// `;

// const Profile = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Avatar = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: 10px;
// `;

// const Username = styled.span`
//   font-size: 16px;
//   font-weight: 500;
// `;

// const SearchBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   max-width: 810px;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
// `;

// const CreateButton = styled.button`
//   background-color: black;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     background-color: #333;
//   }
// `;

// const Table = styled.div`
//   border-collapse: collapse;
//   width: 100%;
// `;

// const TableHeader = styled.div`
//   display: flex;
//   background-color: #f9f9f9;
//   padding: 10px 0;
//   font-weight: bold;
// `;

// const TableRow = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px 0;
//   border-bottom: 1px solid #ddd;
// `;

// const Column = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const UserInfo = styled.div`
//   flex: 2;
//   display: flex;
//   align-items: center;
// `;

// const UserName = styled.div`
//   font-weight: bold;
// `;

// const UserEmail = styled.div`
//   font-size: 12px;
//   color: #777;
// `;

// const StatusBadge = styled.div<{ status: string }>`
//   flex: 1;
//   text-align: center;
//   padding: 5px 10px;
//   border-radius: 10px;
//   background-color: ${({ status }) =>
//     status === "Active" ? "#d4f8d4" : "#f8d4d4"};
//   color: ${({ status }) => (status === "Active" ? "#3a7a3a" : "#7a3a3a")};
// `;

// const Actions = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
// `;

// const EditButton = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   font-size: 18px;
// `;

// const DeleteButton = styled(EditButton)`
//   color: red;
// `;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 20px;
// `;

// const Select = styled.select`
//   padding: 5px;
//   border-radius: 4px;
//   border: 1px solid #ddd;
// `;

// const PageNav = styled.div`
//   display: flex;
//   gap: 5px;
// `;

// // const PageButton = styled.button<{ active?: boolean }>`
// //   padding: 5px 10px;
// //   border: 1px solid #ddd;
// //   border-radius: 4px;
// //   cursor: pointer;
// //   background-color: ${({ active }) => (active ? "#3b82f6" : "white")};
// //   color: ${({ active }) => (active ? "white" : "#333")};

// //   &:disabled {
// //     cursor: not-allowed;
// //     opacity: 0.5;
// //   }
// // `;

// const PageButton = styled.button.withConfig({
//   shouldForwardProp: (prop) => prop !== "active",
// })<{ active?: boolean }>`
//   background-color: ${({ active }) => (active ? "#3b82f6" : "#000")};
//   color: #fff;
//   border: none;
//   padding: 0.7rem;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 15px;
//   font-weight: bold;
//   margin-top: 1rem;

//   &:hover {
//     background-color: ${({ active }) => (active ? "#2563eb" : "#333")};
//   }
// `;

// // const ImageS = styled.img`
// //   width: 40px;
// //   height: 40px;
// //   border-radius: 50%;
// //   margin-right: 10px;
// // `;

"use client";

import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

interface User {
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
  lastLogin: string;
  avatarUrl: string;
}

const mockUsers: User[] = [
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
    avatarUrl: "https://via.placeholder.com/40",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "User",
    status: "Active",
    lastLogin: "1 day ago",
    avatarUrl: "https://via.placeholder.com/40",
  },
];

export default function Page() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (newPage: number) => setPage(newPage);
  const handleItemsChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemsPerPage(Number(e.target.value));

  return (
    <Container>
      <Header>
        <Logo>User Management</Logo>
        <Profile>
          <Avatar src="/png/dummy_1.png" alt="Admin" />
          <Username>John Admin</Username>
        </Profile>
      </Header>
      <SearchBar>
        <SearchInput placeholder="Search users..." />
        <CreateButton>+ Create New User</CreateButton>
      </SearchBar>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>User</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Group</TableHeaderCell>
            <TableHeaderCell>Last Login</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user, index) => (
            <TableRow key={index}>
              <UserInfoCell>
                <Avatar src={user.avatarUrl} alt={user.name} />
                <div>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </div>
              </UserInfoCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <StatusBadge status={user.status}>{user.status}</StatusBadge>
              </TableCell>
              <TableCell>{user.lastLogin}</TableCell>
              <ActionsCell>
                <EditButton>✏️</EditButton>
                <DeleteButton>🗑️</DeleteButton>
              </ActionsCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination>
        <Select onChange={handleItemsChange} value={itemsPerPage}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </Select>
        <span>entries</span>
        <PageNav>
          <PageButton
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </PageButton>
          {[1, 2, 3].map((num) => (
            <PageButton
              key={num}
              onClick={() => handlePageChange(num)}
              active={page === num}
            >
              {num}
            </PageButton>
          ))}
          <PageButton onClick={() => handlePageChange(page + 1)}>
            Next
          </PageButton>
        </PageNav>
      </Pagination>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

/* =====================
   Header
====================== */
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

/* =====================
   SearchBar
====================== */
const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 810px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CreateButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

/* =====================
   Table
====================== */
const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.div`
  display: table-header-group;
  background-color: #f9f9f9;
  font-weight: bold;
`;

const TableBody = styled.div`
  display: table-row-group;
`;

const TableRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #ddd;
`;

const TableHeaderCell = styled.div`
  display: table-cell;
  padding: 15px 0;
  text-align: center;
  vertical-align: middle;
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 10px 0;
  text-align: center;
  vertical-align: middle;
`;

const UserInfoCell = styled(TableCell)`
  /* User 칸만 조금 넓게 */
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ status }) =>
    status === "Active" ? "#d4f8d4" : "#f8d4d4"};
  color: ${({ status }) => (status === "Active" ? "#3a7a3a" : "#7a3a3a")};
`;

const ActionsCell = styled(TableCell)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

/* 유저명/이메일 표시 */
const UserName = styled.div`
  font-weight: bold;
`;
const UserEmail = styled.div`
  font-size: 12px;
  color: #777;
`;

/* =====================
   Actions
====================== */
const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const DeleteButton = styled(EditButton)`
  color: red;
`;

/* =====================
   Pagination
====================== */
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const PageNav = styled.div`
  display: flex;
  gap: 5px;
`;

const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? "#3b82f6" : "#000")};
  color: #fff;
  border: none;
  padding: 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ active }) => (active ? "#2563eb" : "#333")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
