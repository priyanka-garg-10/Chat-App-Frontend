import { useFetchData } from '6pp';
import { Avatar, Skeleton } from "@mui/material";
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import Table from '../../components/shared/Table';
import { useErrors } from '../../hooks/hook';
import { transformImage } from '../../lib/features';

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    width: 150,
    renderCell: (params) => (
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "username",
    headerName: "Username",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "friends",
    headerName: "Friends",
    headerClassName: "table-header",
    width: 150,
  },
  {
    field: "groups",
    headerName: "Gropus",
    headerClassName: "table-header",
    width: 200,
  },
];

const UseManagement = () => {
  const { loading, data, error } = useFetchData(
    `http://localhost:3000/api/v1/admin/users`,
    "dashboard-users"
  );

  useErrors([
    {
      isError: error,
      error: error
    },
  ]);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data) {
      setRows(
        data.users.map((i) => ({
          ...i,
          id: i._id,
          avatar: transformImage(i.avatar, 50),
        }))
      );
    }
  }, [data])

  return <AdminLayout>
    {
      loading ? (<Skeleton height={"100vh"} />) : (
        <Table heading={"All Users"} columns={columns} rows={rows} />
      )
    }
  </AdminLayout>
}

export default UseManagement;