import React from 'react'

const TableData = ({ users }) => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
            email: "liamjames@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Software engineer",
            salary: "$100K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Product designer",
            salary: "$90K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Front-end developer",
            salary: "$80K"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Laravel engineer",
            salary: "$120K"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Open source manager",
            salary: "$75K"
        },
    ]
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">

                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Username</th>
                                <th className="py-3 px-6">Email</th>
                                <th className="py-3 px-6">Position</th>
                                {/* <th className="py-3 px-6">Salary</th> */}
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {
                                users?.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                            <img src={item.img} className="w-10 h-10 rounded-full" />
                                            <div>
                                                <span className="block text-gray-700 text-sm font-medium">{item.username}</span>
                                                <span className="block text-gray-700 text-xs">{item.email}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.mobile}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td> */}

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TableData