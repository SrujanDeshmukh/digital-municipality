import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CitizenForm from './CitizenForm'

const API = import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL + '/citizens' : '/api/citizens'

export default function CitizenList(){
  const [citizens, setCitizens] = useState([])
  const [editing, setEditing] = useState(null)

  useEffect(()=> { fetchAll() }, [])

  const fetchAll = async () => {
    const res = await axios.get(API)
    setCitizens(res.data)
  }

  const handleDelete = async id => {
    await axios.delete(`${API}/${id}`)
    fetchAll()
  }

  const handleSave = async (citizen) => {
    if(citizen.id) {
      await axios.put(`${API}/${citizen.id}`, citizen)
    } else {
      await axios.post(API, citizen)
    }
    setEditing(null)
    fetchAll()
  }

  return (
    <div>
      <button onClick={() => setEditing({})}>New Citizen</button>
      {editing && <CitizenForm onSave={handleSave} onCancel={()=>setEditing(null)} citizen={editing} />}
      <ul>
        {citizens.map(c => (
          <li key={c.id}>
            <b>{c.name}</b> — {c.email} — {c.address}
            <button onClick={()=>setEditing(c)}>Edit</button>
            <button onClick={()=>handleDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
