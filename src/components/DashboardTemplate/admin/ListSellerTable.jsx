"use client";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import {  MagnifyingGlass, Package } from "@phosphor-icons/react";

const ListSellerTable = ({ data }) => {

    const [pending, setPending] = useState(true);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        if (data && data.length > 0) {
            setPending(false);
        }
    }, [data]);

    // filteredItems function
    const filteredItems = data.filter(item => {
        const searchText = filterText.toLowerCase();
        return (
            (item.name && item.name.toLowerCase().includes(searchText)) ||
            (item.address && item.address.toLowerCase().includes(searchText)) ||
            (item.user_id && item.food_name.toLowerCase().includes(searchText)) ||
            (item.id_cust && item.seller_name.toLowerCase().includes(searchText)) ||
            (item.email && item.status.toLowerCase().includes(searchText)) ||
            (item.nomorWA && item.nomorWA.toLowerCase().includes(searchText)) ||
            (item.username && item.username.toLowerCase().includes(searchText))
        );
    });

    const columns = [
        {
            name: "UID",
            selector: row => row.user_id,
            sortable: true,
        },
        {
            name: "Seller ID",
            selector: row => row.id_seller,
        },
        {
            name: "Username",
            selector: row => row.username,
            sortable: true,
        },
        {
            name: "Nama Toko",
            selector: row => row.name,
            sortable: true,

        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true,
        },
        {
            name: "No. WA",
            selector: row => row.nomorWA,
            sortable: true,
        }, 
        {
            name: "Alamat",
            selector: row => row.address,
            sortable: true,
        }
    ]

    const customStyles = {
        headCells: {
            style: {
                fontSize: "16px",
                fontWeight: "bold",
                backgroundColor: "#f4f4f4",
            }
        },
        cells: {
            style: {
                fontSize: "12px",
                backgroundColor: "#FAFAFA"
            }
        },
        pagination: {
            style: {
                fontSize: "12px",
                backgroundColor: "#FAFAFA",
            }
        }
    }

    return (
        <>
            <div className="flex flex-row flex-wrap items-center justify-between gap-8 pt-2">
                <div className="flex flex-row flex-wrap gap-2 items-center ps-2 text-primaryGreen">
                    <h1 className="font-bold text-lg">Akun Seller</h1>
                </div>
                <div className="flex flex-row flex-wrap px-2 rounded-lg items-center border border-gray-200 bg-neutral-50">
                    <MagnifyingGlass className="text-gray-400" size={24} />
                    <input
                        type="text"
                        placeholder="Kunci Pencarian..."
                        className="p-2 bg-transparent focus:outline-none text-gray-400 max-w-[200px]"
                        onChange={(e) => setFilterText(e.target.value)}
                        value={filterText}
                    />
                </div>
            </div>

            <DataTable
                className="mt-4"
                columns={columns}
                data={filteredItems}
                noHeader
                pagination
                progressPending={pending}
                progressComponent={<div className="table_loader"></div>}
                persistTableHead
                noDataComponent="Tidak ada data yang ditemukan"
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
                customStyles={customStyles}
            />  
        </>
    );
}

export default ListSellerTable;