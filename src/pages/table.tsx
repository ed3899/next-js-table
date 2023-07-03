import InteractiveTable from "../components/interactiveTable"

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

const Table: React.FC<TableProps> = ({ users, error }) => {

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      Hello
    </div>
);
};

export default Table;