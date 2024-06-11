"use client";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { ClockCounterClockwise, MagnifyingGlass } from "@phosphor-icons/react";
import moment from "moment";

const CustHistoryTable = ({ historyData }) => {
    // useState
    const [pending, setPending] = useState(true);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        if (historyData && historyData.length > 0) {
            setPending(false);
        }
    }, [historyData]);

    // filteredItems function
    const filteredItems = historyData.filter(item => {
        const searchText = filterText.toLowerCase();
        return (
            (item.order_id && item.order_id.toLowerCase().includes(searchText)) ||
            (item.customer_name && item.customer_name.toLowerCase().includes(searchText)) ||
            (item.food_name && item.food_name.toLowerCase().includes(searchText)) ||
            (item.seller_name && item.seller_name.toLowerCase().includes(searchText)) ||
            (item.status && item.status.toLowerCase().includes(searchText))
        );
    });

    // Rupiah formatter
    const formatRupiah = value => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(value);
    };

    // Date formatter using Moment.js
    const formatDate = dateString => {
        return moment(dateString).format("DD MMMM YYYY, HH:mm");
    };

    // Capitalize first letter of each word
    const capitalizeWords = str => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };

    // Conditional styling for status
    const getStatusStyle = status => {
        switch (status.toLowerCase()) {
            case "selesai":
                return "text-green-500 font-bold";
            case "dibatalkan":
                return "text-red-500 font-bold";
            case "diproses":
                return "text-yellow-500 font-bold";
            default:
                return "text-gray-500 font-bold";
        }
    };

    const columns = [
        {
            name: "ID",
            selector: row => row.order_id,
            sortable: true,
            cell: row => (
                <div title={row.order_id}>
                    {row.order_id.length > 8 ? `${row.order_id.slice(0, 8)}...` : row.order_id}
                </div>
            )
        },
        {
            name: "Tanggal",
            selector: row => row.createdAt,
            sortable: true,
            cell: row => (
                <div title={formatDate(row.createdAt)}>
                    {moment(row.createdAt).format("DD/MM/YYYY")}
                </div>
            )
        },
        {
            name: "Nama Item",
            selector: row => row.food_name,
            sortable: true,
            cell: row => (
                <div title={row.food_name}>
                    {row.food_name.length > 15 ? `${row.food_name.slice(0, 15)}...` : row.food_name}
                </div>
            )
        },
        {
            name: "Penjual",
            selector: row => row.seller_name,
            sortable: true,
        },
        {
            name: "Qty",
            selector: row => row.amount,
            sortable: true,
        },
        {
            name: "Total",
            selector: row => formatRupiah(row.price),
            sortable: true,
        },
        {
            name: "Status",
            selector: row => row.status,
            sortable: true,
            cell: row => (
                <span className={getStatusStyle(row.status)}>
                    {capitalizeWords(row.status)}
                </span>
            )
        },
    ];

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
        <section className="px-8 py-4">
            {/* Table */}
            <div className="flex flex-col w-full min-h-[400px] bg-neutral-50 rounded-lg px-4 py-2">
                <div className="flex flex-row flex-wrap items-center justify-between gap-8 pt-2">
                    <div className="flex flex-row flex-wrap gap-2 items-center ps-2 text-primaryGreen">
                        <ClockCounterClockwise weight="bold" size={24} />
                        <h1 className="font-bold text-lg">Riwayat Pesananku</h1>
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
            </div>
        </section>
        </>
    );
}

export default CustHistoryTable;
