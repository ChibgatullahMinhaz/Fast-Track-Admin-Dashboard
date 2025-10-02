import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  dateJoined: string;
};

const dummyUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+8801712345678", role: "User", status: "Active", dateJoined: "2023-08-01" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+8801712345679", role: "User", status: "Inactive", dateJoined: "2023-07-15" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "+8801712345680", role: "User", status: "Active", dateJoined: "2023-06-20" },
];

const UserManagements: React.FC = () => {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-200">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Date Joined</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className=" bg-gray-800 hover:bg-gray-600 border-gray-700  cursor-pointer"
              >
                <td
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                  onClick={() => setSelectedUser(user)}
                >
                  {user.name}
                </td>
                <td onClick={() => setSelectedUser(user)} className="px-6 py-4">{user.email}</td>
                <td onClick={() => setSelectedUser(user)} className="px-6 py-4">{user.phone}</td>
                <td onClick={() => setSelectedUser(user)} className="px-6 py-4">{user.role}</td>
                <td onClick={() => setSelectedUser(user)} className="px-6 py-4">{user.status}</td>
                <td onClick={() => setSelectedUser(user)} className="px-6 py-4">{user.dateJoined}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for user details */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white  p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedUser.name} Details</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
            <p><strong>Date Joined:</strong> {selectedUser.dateJoined}</p>
            <button
              onClick={() => setSelectedUser(null)}
              className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserManagements;
