import React from "react";

const UserTable: React.FC = () => {
    const users = [
        { username: "admin", password: "admin1234", role: "admin" },
        { username: "user", password: "user1234", role: "user" },
    ];

    return (
        <div className="max-w-md mx-auto">
            <table className="min-w-full bg-white border-collapse">
                <thead>
                <tr className="bg-green-button-home">
                    <th className="text-black py-2 px-4 border border-gray-300">Username</th>
                    <th className="text-black py-2 px-4 border border-gray-300">Password</th>
                    <th className="text-black py-2 px-4 border border-gray-300">Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} className="">
                        <td className="text-black py-2 px-4 border border-gray-300">{user.username}</td>
                        <td className="text-black py-2 px-4 border border-gray-300">{user.password}</td>
                        <td className="text-black py-2 px-4 border border-gray-300">{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;