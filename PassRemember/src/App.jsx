import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
// import { get } from "mongoose";

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: ""
  })
  const [passwordArray, setPasswordArray] = useState([]);
  const [tablePasswordVisible, setTablePasswordVisible] = useState({});

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/");
    console.log("Fetch request sent", req);
      let passwords = await req.json();
    setPasswordArray(passwords);
    console.log("Passwords fetched from server:", passwords);
  }

  useEffect(() => {
    getPasswords();
  
  }, []);

  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  }

  const handleSave = async () => {
    if (form.site.length < 1 || form.username.length < 1 || form.password.length < 1) {
      toast.error('Please fill all the fields!', {
        position: "top-center",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }
    if(form.id) {
      console.log("Saving password:", form,form.id);
        await fetch("http://localhost:3000/", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'  // Add this header!
      },
      body: JSON.stringify({id:form.id})
    })
  }
    setPasswordArray([...passwordArray, {...form,id:uuidv4()}])
    // await fetch("http://localhost:3000/", {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'  // Add this header!
    //   },
    //   body: JSON.stringify({id:form.id})
    // })
    await fetch("http://localhost:3000/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  // Add this header!
      },
      body: JSON.stringify({...form,id:uuidv4()})
    })
    console.log("Password saved to server:", {...form,id:uuidv4()});
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]));
    toast.success('Saved Successfully!', {
      position: "top-center",
      autoClose: 3000,
      theme: "dark"
    });
    setForm({
      site: "",
      username: "",
      password: ""
    })
  }

  const deletePassword = async (id) => {
    console.log("Delete function called",id);
    const itemToDelete = passwordArray.find(item => item.id === id);
      const userConfirmed = window.confirm(
    `Are you sure you want to delete the password for "${itemToDelete?.site}"?\n\nThis action cannot be undone.`
  );
   if (userConfirmed) {
    const updatedArray = passwordArray.filter(item => item.id !== id);
    setPasswordArray(updatedArray);
    await fetch("http://localhost:3000/", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'  // Add this header!
      },
      body: JSON.stringify({id})
    })
    console.log("Password deleted from server:", itemToDelete);
    
    toast.success('Password deleted successfully!', {
      position: "top-center",
      autoClose: 3000,
      theme: "dark"
    });
  }
  }
  const editPassword = (id) => {
    console.log("Item to edit",id)
    const itemToEdit = passwordArray.find(item => item.id === id);
    console.log(itemToEdit)
     const userConfirmed = window.confirm(
    `Are you sure you want to edit the password for "${itemToEdit?.site}"?\n\nIf YES please make changes in the fields and click save`
  );
  if (userConfirmed) {  
    setForm({ ...passwordArray.filter(i=>i.id === id)[0], id:id });
    setPasswordArray(passwordArray.filter(item => item.id !== id));
  }
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showTablePassword = (index) => {
    setTablePasswordVisible(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  } 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-950 to-gray-900 flex flex-col items-center py-8 px-2">
      <ToastContainer />
      <h1 className="mb-8 text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
        🔐 Password Vault
      </h1>
      <div className="w-full max-w-xl">
        <div className="bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-2xl rounded-2xl p-8 mb-10 border border-gray-800">
          <h2 className="text-xl font-bold text-indigo-200 mb-6">Add New Password</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-base font-medium text-indigo-100 mb-2">Site URL</label>
              <input
                value={form.site}
                onChange={handleChange}
                type="text"
                name="site"
                placeholder="https://example.com"
                className="w-full rounded-lg bg-gray-800 text-white py-2 px-4 border border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-indigo-100 mb-2">Name / Email</label>
              <input
                value={form.username}
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Name/Email"
                className="w-full rounded-lg bg-gray-800 text-white py-2 px-4 border border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-indigo-100 mb-2">Password</label>
              <div className="relative">
                <input
                  value={form.password}
                  onChange={handleChange}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-lg bg-gray-800 text-white py-2 px-4 border border-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <span className="absolute right-4 top-2 cursor-pointer" onClick={showPassword}>
                  {!passwordVisible ?
                    <lord-icon
                      src="https://cdn.lordicon.com/dicvhxpz.json"
                      trigger="hover"
                      colors="primary:#a5b4fc,secondary:#6366f1"
                      style={{ width: '28px', height: '28px' }}>
                    </lord-icon>
                    :
                    <lord-icon
                      src="https://cdn.lordicon.com/dicvhxpz.json"
                      trigger="hover"
                      state="hover-cross"
                      colors="primary:#a5b4fc,secondary:#6366f1"
                      style={{ width: '28px', height: '28px' }}>
                    </lord-icon>
                  }
                </span>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="w-full py-3 mt-2 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-900 hover:from-indigo-700 hover:to-purple-950 text-white rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
            >
              <span>Save Password</span>
              <lord-icon
                src="https://cdn.lordicon.com/gzqofmcx.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width: '32px', height: '32px' }}>
              </lord-icon>
            </button>
          </div>
        </div>

        <div className="bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-800">
          <h2 className="text-xl font-bold text-indigo-200 mb-6">Your Passwords</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-base text-left text-indigo-100">
              <thead className="bg-indigo-900/60">
                <tr>
                  <th className="px-6 py-3 font-semibold">Site</th>
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Password</th>
                  <th className="px-6 py-3 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-6 text-center text-indigo-300">
                      No passwords saved yet.
                    </td>
                  </tr>
                )}
                {passwordArray.map((item, index) => (
                  <tr key={index} className={`transition ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"} hover:bg-indigo-950`}>
                    <td className="px-6 py-4 font-medium text-indigo-100 whitespace-nowrap underline">
                      <a href={item.site} target="_blank" rel="noopener noreferrer"> {item.site.length > 10 ? `${item.site.substring(0, 10)}...`
                      : item.username
                    }</a>
                    </td>
                    <td className="px-6 py-4">  
                      {item.username.length > 10 ? `${item.username.substring(0, 10)}...`
                      : item.username
                    }</td>
                    <td className="px-6 py-4">
                      {tablePasswordVisible[index] ? (
                        <span className="font-mono tracking-wide">{item.password}</span>
                      ) : (
                        <span className="font-mono text-xl">••••••••</span>
                      )}
                    </td>
                    <td className="px-6 py-4 flex gap-3 justify-center items-center">
                      <button
                        className="focus:outline-none cursor-pointer"
                        onClick={() => showTablePassword(index)}
                        title={tablePasswordVisible[index] ? "Hide Password" : "Show Password"}
                      >
                        {!tablePasswordVisible[index] ? (
                          <lord-icon
                            src="https://cdn.lordicon.com/dicvhxpz.json"
                            trigger="hover"
                            colors="primary:#a5b4fc,secondary:#6366f1"
                            style={{ width: '28px', height: '28px' }}>
                          </lord-icon>
                        ) : (
                          <lord-icon
                            src="https://cdn.lordicon.com/dicvhxpz.json"
                            trigger="hover"
                            state="hover-cross"
                            colors="primary:#a5b4fc,secondary:#6366f1"
                            style={{ width: '28px', height: '28px' }}>
                          </lord-icon>
                        )}
                      </button>
                      {/* Additional icons for future features (edit/delete) */}
                      <button className="focus:outline-none opacity-60 cursor-pointer" title="Edit" onClick={() => editPassword(item.id)}>
                        <lord-icon
                          src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover"
                          state="hover-line"
                          colors="primary:#a5b4fc,secondary:#6366f1"
                          style={{ width: '28px', height: '28px' }}>
                        </lord-icon>
                      </button>
                      <button className="focus:outline-none opacity-60 cursor-pointer" title="Delete" onClick={() => deletePassword(item.id)} >
                        <lord-icon
                          src="https://cdn.lordicon.com/jzinekkv.json"
                          trigger="hover"
                          colors="primary:#a5b4fc,secondary:#6366f1"
                          style={{ width: '28px', height: '28px' }}>
                        </lord-icon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="mt-10 text-indigo-100 text-xs opacity-60">
        © {new Date().getFullYear()} | Password Vault UI Demo
      </footer>
    </div>
  );
}

export default App;