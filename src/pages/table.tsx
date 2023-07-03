import { Table } from '@nextui-org/react';

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: "active" | "inactive";
}

const filterUsersByStatus = (users: User[], status: User["status"]): User[] => {
  return users.filter((user) => user.status === status);
}

export async function getStaticProps() {
  const url = "https://gorest.co.in/public/v2/users";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const activeUsers = filterUsersByStatus(data, "active");

    return {
      props: {
        users: activeUsers,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        error: true,
      },
    };
  }
}

interface TableProps {
  users: User[];
  error?: boolean;
}

const TablePage: React.FC<TableProps> = ({ users, error }) => {

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>EMAIL</Table.Column>
        <Table.Column>GENDER</Table.Column>
        <Table.Column>STATUS</Table.Column>
      </Table.Header>
      <Table.Body>
      {users.map((user, index) => (
    <Table.Row key={index}>
      <Table.Cell>{user.name} </Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.gender}</Table.Cell>
      <Table.Cell>{user.status}</Table.Cell>
    </Table.Row>
  ))}
      </Table.Body>
    </Table>
  )
};

export default TablePage;