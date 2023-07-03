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
        <Table.Column>Gender</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Tony Reichert</Table.Cell>
          <Table.Cell>CEO</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Zoey Lang</Table.Cell>
          <Table.Cell>Technical Lead</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Jane Fisher</Table.Cell>
          <Table.Cell>Senior Developer</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Howard</Table.Cell>
          <Table.Cell>Community Manager</Table.Cell>
          <Table.Cell>Vacation</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
};

export default TablePage;