import DataTable from "react-data-table-component";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaRegEye, FaSearch, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
  const [countries, setCounteries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(" https://restcountries.com/v2/all");
      setCounteries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Customer Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Lead ID",
      selector: (row) => row.nativeName,
    },
    {
      name: "Location",
      selector: (row) => row.capital,
    },
    {
      name: "Event Date",
      selector: (row) => <img width={50} height={50} src={row.flag} />,
    },
    {
      name: "Status",
      selector: (row) => row.capital,
    },

    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button
    //       className="btn btn-primary"
    //       onClick={() => alert(row.alpha2Code)}
    //     >
    //       Edit
    //     </button>
    //   ),
    // },
    {
      cell: (row) => <FaRegEye />,
      width: "50px",
    },
    {
      cell: (row) => <FaPencilAlt />,
      width: "50px",
    },
    {
      cell: (row) => <FaRegTrashAlt />,
      width: "50px",
    },
    {
      cell: (row) => <FaSearch />,
      width: "50px",
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredCountries(result);
  }, [search]);

  return (
    
    <DataTable
      title="Leads"
      columns={columns}
      data={filteredCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={[
        <input
          type="text"
          placeholder="Serach"
          className=" w-25 form-control mr-1 glyphicon glyphicon-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />,
        <button className="btn btn-sm btn-danger mr-1">Add New</button>,
        <button className="btn btn-sm btn-danger mr-1">Assign to Admin</button>,
      ]}
    />
  );
};

export default Home;
