
import SingleUserForm from "@/components/SingleUserForm";
import { fetchSingleUser } from "@/lib/data";


const SingleUser = async ({ params }) => {
    const { id } = params;
    let userData = {};

    try {
        userData = await fetchSingleUser(id);

    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }

    return (
        <>
            <SingleUserForm userData={userData} />
        </>
    )
}

export default SingleUser










