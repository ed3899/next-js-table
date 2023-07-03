import React, { useState, useEffect } from "react";
import Table, { User } from "../components/table";

const filterUsersByStatus = (users: User[], status: User["status"]): User[] => {
  return users.filter((user) => user.status === status);
};

export function Page() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://gorest.co.in/public/v2/users");
        const result = await response.json();
        const activeUsers = filterUsersByStatus(result, "active");
        setUsers(activeUsers);
      } catch (error) {
        console.error("An error occurred while fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  return <div>{users.length > 0 ? <Table users={users} /> : "Loading..."}</div>;
}

export default Page;
