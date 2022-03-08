// @ts-nocheck

import { useEffect, useMemo, useState } from "react";
import {
  Column,
  useFilters,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import { Container, Pagination } from "./style";

interface UniversityData {
  Name: string;
  Initial: string;
  Region: string;
  State: string;
  RegionType: string;
  Type: string;
}

export const UniversitiesTable = () => {
  const [data, setData] = useState<UniversityData[]>([]);

  useEffect(() => {
    fetch("https://api.meuguru.net/global/university")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const columns = useMemo<Column[]>(
    () => [
      {
        Header: "Nome da Universidade",
        accessor: "Name",
        Cell: (s) => <p className={"uniName"}>{s.value}</p>,
      },
      {
        Header: "Sigla",
        accessor: "Initial",
        Cell: (s) => (
          <p className={"uniInitial"}>{s.value == "" ? "-" : s.value}</p>
        ),
      },
      {
        Header: "Região",
        accessor: "Region",
        Cell: (s) => <p className={"uniRegion"}>{s.value}</p>,
      },
      {
        Header: "Estado",
        accessor: "State",
        Cell: (s) => <p className={"uniState"}>{s.value}</p>,
      },
      {
        Header: "Localização",
        accessor: "RegionType",
        Cell: (s) => <p className={"uniRT"}>{s.value}</p>,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Tipo",
        accessor: "Type",
        Cell: (s) => <p className={"uniType"}>{s.value}</p>,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
    ],
    []
  );

  //Filters
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Procurar por...`}
      />
    );
  }

  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    const options = useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);

    return (
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">Qualquer</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex },
    visibleColumns,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [{ id: "Name", desc: false }],
        pageSize: 5,
      },
      defaultColumn,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <>
      <Container>
        <table cellSpacing="0" {...getTableProps()}>
          <thead>
            {data.length > 0 &&
              headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      <p {...column.getSortByToggleProps()}>
                        {column.render("Header")}{" "}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? "▲"
                              : "▼"
                            : "●"}
                        </span>
                      </p>
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {data.length > 0 &&
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            &lt;
          </button>
          <div>
            <em>
              Página {pageIndex + 1} de {pageOptions.length}
            </em>
          </div>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            &gt;
          </button>
        </Pagination>
      </Container>
    </>
  );
};
