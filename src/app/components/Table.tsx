"use client";

interface TableProps<T> {
  columns: string[];
  rows: T[];
}

const columnMappings: { [key: string]: string } = {
  "Organization Name": "name",
  "Members": "members",
  "Challenges": "challenges",
  "Steps": "steps",
  "Start Date": "startDate",
  "Status": "status"
};

const Table = <T extends Record<string, any>>({ columns, rows }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white p-5">
      <table className="min-w-full">
        {/* Table Header */}
        <thead>
          <tr className="text-left text-gray-400 text-xs">
            {columns.map((column) => (
              <th
                key={column}
                className="py-2 px-4 font-semibold border-b border-gray-200"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-100 transition-colors"
            >
              {columns.map((column) => {
                const key = columnMappings[column] || column;
                const value = row[key] ?? "";

                // Styling Status Column
                const isStatusColumn = column === "Status";
                const statusStyle =
                  value === "Active"
                    ? "text-blue-500 font-semibold"
                    : "text-red-400 font-semibold";

                return (
                  <td
                    key={column}
                    className={`py-3 px-4 border-b border-gray-200 ${
                      isStatusColumn ? statusStyle : "text-gray-500"
                    }`}
                  >
                    {typeof value === "number" ? value.toLocaleString() : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
