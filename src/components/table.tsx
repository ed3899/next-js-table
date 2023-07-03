import { Table as NextTable } from "@nextui-org/react";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: "active" | "inactive";
}

interface TableProps {
  users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
  return (
    <NextTable
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <NextTable.Header>
        <NextTable.Column>NAME</NextTable.Column>
        <NextTable.Column>EMAIL</NextTable.Column>
        <NextTable.Column>GENDER</NextTable.Column>
        <NextTable.Column>STATUS</NextTable.Column>
      </NextTable.Header>
      <NextTable.Body>
        {users.map((user, index) => (
          <NextTable.Row key={index}>
            <NextTable.Cell>{user.name} </NextTable.Cell>
            <NextTable.Cell>{user.email}</NextTable.Cell>
            <NextTable.Cell>{user.gender}</NextTable.Cell>
            <NextTable.Cell>{user.status}</NextTable.Cell>
          </NextTable.Row>
        ))}
      </NextTable.Body>
    </NextTable>
  );
};

export default Table;
