import Image from 'next/image'

async function fetchApi() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export default async function ServersiteRendering() {
    const users = await fetchApi();
    console.log(users);
    return (
        <div className="p-10">
            <h1 className="text-2xl font-medium">Server Side Rendering</h1>
            {users && users.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th className="px-5 py-2">#</th>
                            <th className="px-5 py-2 text-nowrap">First Name</th>
                            <th className="px-5 py-2 text-nowrap">Last Name</th>
                            <th className="px-5 py-2 text-nowrap">Email</th>
                            <th className="px-5 py-2 text-nowrap">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="px-5 py-2 text-xs">{index + 1}</td>
                                <td className="px-5 py-2 text-xs">{user.firstName || ""}</td>
                                <td className="px-5 py-2 text-xs">{user.lastName || ""}</td>
                                <td className="px-5 py-2 text-xs">{user.email || ""}</td>
                                <td>
                                    <Image
                                        src={user.image || ""}
                                        width={100}
                                        height={100}
                                        alt="Picture of the author"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}
