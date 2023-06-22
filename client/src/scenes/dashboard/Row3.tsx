import { DataGrid } from "@mui/x-data-grid";

import { useGetListingsQuery, useGetUsersQuery } from "@/state/api";
import DashboardBox from "@/components/DashboardBox";
import BoxHeader from "@/components/BoxHeader";
import { Box, useTheme } from "@mui/material";
import { useMemo } from "react";

type Props = {
  isDarkTheme: boolean;
};

const Row3 = (props: Props) => {
  const { data } = useGetListingsQuery();
  const { data: usersData } = useGetUsersQuery();
  const { palette } = useTheme();

  const listings = useMemo(() => {
    return (
      data &&
      data.map(({ _id, title, category, price, createdAt }) => {
        return {
          id: _id,
          title: title,
          category: category,
          price: price,
          createdAt: createdAt.toString().substring(0, 10),
        };
      })
    );
  }, [data]);

  const users = useMemo(() => {
    return (
      usersData &&
      usersData.map(({ _id, name, email, createdAt }) => {
        return {
          id: _id,
          name: name,
          email: email,
          createdAt: createdAt.toString().substring(0, 10),
        };
      })
    );
  }, [usersData]);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Name", width: 150 },
    { field: "category", headerName: "Category", width: 50 },
    { field: "price", headerName: "Price", type: "number", width: 100 },
    { field: "createdAt", headerName: "createdAt", type: "Date", width: 120 },
  ];
  const usersColumns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 50 },
    { field: "createdAt", headerName: "createdAt", type: "Date", width: 120 },
  ];
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="Listings"
          sideText={"Total: " + data?.length.toString()}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="95%"
          sx={{
            "& .MuiDataGrid-root": {
              color: props.isDarkTheme
                ? palette.grey[900]
                : palette.grey[500],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            rows={listings || []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Users"
          sideText={"Total: " + usersData?.length.toString()}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="95%"
          sx={{
            "& .MuiDataGrid-root": {
              color: props.isDarkTheme
              ? palette.grey[900]
              : palette.grey[500],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            rows={users || []}
            columns={usersColumns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
