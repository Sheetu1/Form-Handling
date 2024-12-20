import { useState } from "react";




function App() {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [check,setCheck] = useState(false);
  const [data, setData] = useState([])

  function Handler(e) {
    setData([...data, { name, company, phone, checked:check }])
    e.preventDefault();
    console.log(name);
    console.log(company);
    console.log(phone);
    setName('')
    setCompany('')
    setPhone('')
    setCheck(false);
  }

  console.log(data);

  return (
    <div className="h-screen w-full flex gap-5">
      <form onSubmit={Handler} className=" w-[50%] 
       bg-white h-screen border p-8 ">
        <h1 className="font-bold pl-52  ">Add Contact</h1>
        <div><span>Name</span><br /> <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border" type="text" placeholder="Enter name" /> </div>
        <div><span>Company</span><br /> <input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 border " type="text" placeholder="Enter Company" /> </div>
        <div><span>Phone</span><br /> <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border " type="password" placeholder="Enter Phone number" /> </div>
        <div><input checked={check} onChange={()=>setCheck(!check)} type="checkbox" /> <span>Favorite</span></div>
        <button className="w-full bg-blue-400 text-white rounded-1xl p-2">Add Contact</button>
      </form>
      <div className="w-[50%] h-screen  flex  flex-col items-center gap-5 p-5">
        <h1 className="font-bold pb-2">Contact list</h1>
        {data.map((item) => (
          <div className=" w-full bg-zinc-200 rounded-xl p-5 card">
            <h1 className="font-bold">{item.name}</h1>
            <h3>Company:{item.company}</h3>
            <p>Contact:{item.phone}</p>
            {item.checked ? <p className="inline-block mt-2 px-4 py-1 text-xs bg-yellow-400 rounded-full text-white font-semibold">Favourite</p> : ""}
          </div>
        ))}


      </div>



    </div>



  )
}
export default App;
