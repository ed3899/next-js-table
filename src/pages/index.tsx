import React, { useState, useEffect } from "react";
import Table from "../components/table";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: "active" | "inactive";
}

const filterUsersByStatus = (users: User[], status: User["status"]): User[] => {
  return users.filter((user) => user.status === status);
};

export function Page() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://gorest.co.in/public/v2/users");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      const activeUsers = filterUsersByStatus(result, "active");
      setData(activeUsers);
    };

    fetchData().catch((e) => {
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return <div>{data.length > 0 ? <Table users={data} /> : "Loading..."}</div>;
}

export default Page;
