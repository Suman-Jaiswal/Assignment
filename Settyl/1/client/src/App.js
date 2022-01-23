import { createUser, deleteUser, fetchUsers, updateUser } from './api';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap'
function App() {

    const [users, setUsers] = useState([])
    const [createData, setCreateData] = useState({})
    const [updateData, setUpdateData] = useState({})
    const [open, setOpen] = useState(false)
    const [currentId, setId] = useState('')
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetchUsers().then(Res => setUsers(Res.data))
    }, []);

    useEffect(() => {
        setCurrentUser(users.filter(u => u._id === currentId)[0])
    }, [currentId, users]);


    const handleChangeCreated = (e) => {
        setCreateData({
            ...createData,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeUpdated = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault()
        createUser(createData).then(res => setUsers([...users, res.data]))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        updateUser(currentId, updateData).then(res => {
            const raw = [...users]
            const index = raw.findIndex(o => o._id === res.data._id)
            raw[index].firstName = res.data.firstName
            raw[index].secondName = res.data.secondName
            raw[index].email = res.data.email
            setUsers(raw)
        })
    }

    const handleDelete = (id) => {
       deleteUser(id).then((res, err) => {
          res.status === 200 ? setUsers(users.filter(u => u._id !== id)) : console.log(err)
       })
    }

    // console.log(currentUser)



    return (
        <div className="container text-center">
            <h1>API</h1>
            <div className="w-50 m-auto">
                <form action="" method="post" onSubmit={handleCreate} >
                    <input type="text" placeholder='First Name' name='firstName' onChange={handleChangeCreated} />
                    <input type="text" placeholder='Second Name' name='secondName' onChange={handleChangeCreated} />
                    <input type="email" placeholder='Email Name' name='email' onChange={handleChangeCreated} />
                    <button className='btn btn-success ms-2' type='submit'>Create</button>
                </form>
            </div>
            <br />
            <div className="row fw-bold">
                <div className="col">First Name</div>
                <div className="col">Second Name</div>
                <div className="col">Email</div>
                <div className="col">Action</div>
            </div>
            <hr />
            {
                users.map((u, i) => <div key={i} className="row">
                    <div className="col">{u.firstName}</div>
                    <div className="col">{u.secondName}</div>
                    <div className="col">{u.email}</div>
                    <div className="col">
                        <button className='btn btn-primary' onClick={() => {
                            setOpen(true)
                            setId(u._id)
                        }}  >Edit</button>
                        <button className='btn btn-danger ms-3' onClick={() => handleDelete(u._id)} >Delete</button>
                    </div>
                    <hr className='my-2' />
                </div>
                )
            }
            {
                currentUser ? <Modal show={open} onHide={() => setOpen(false)}>
                    <Modal.Header>Update</Modal.Header>
                    <Modal.Body>
                        <form action="" method="post" onSubmit={handleUpdate} >
                            <input type="text" defaultValue={currentUser.firstName} placeholder='First Name' name='firstName' onChange={handleChangeUpdated} />
                            <input type="text" defaultValue={currentUser.secondName} placeholder='Second Name' name='secondName' onChange={handleChangeUpdated} />
                            <input type="email" defaultValue={currentUser.email} placeholder='Email Name' name='email' onChange={handleChangeUpdated} />
                            <button type='submit' onClick={() => setOpen(false)} >Update</button>
                        </form>
                    </Modal.Body>
                </Modal>
                    : null
            }


        </div>
    );
}

export default App;
