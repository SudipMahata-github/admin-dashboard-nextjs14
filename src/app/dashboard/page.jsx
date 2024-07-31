import TableData from '@/components/TableData'
import { fetchAllUsers } from '@/lib/data'


const Dashboard = async () => {
    const users = await fetchAllUsers()
    return (
        <div>
            <h3 className=' className="text-gray-800 text-xl font-bold sm:text-2xl ml-8'>Dashboard</h3>
            <div className="border w-[30%] mt-4 flex  gap-8 p-4 ml-8 shadow-md rounded-md justify-center">
                <p className='text-xl'>Total Users -</p>
                <div className='text-xl'>{users.length}</div>
            </div>
            <TableData users={users} />

        </div>
    )
}

export default Dashboard