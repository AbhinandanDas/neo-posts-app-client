import React,{useState} from 'react'
import axios from 'axios'

function ChangePassword() {
    const [oldPassword,setOldPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")

    const updatePassword = () => {
        axios.put("http://localhost:3001/auth/changepassword", { oldPassword:oldPassword,newPassword:newPassword},
        {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((response) => {
            if(response.data.error) {
                alert(response.data.error)
            }
        })
    }

  return (
    <div>
        <h1> Change Password</h1>
        <label>
            Current Password <input type="text" onChange={(event) => {setOldPassword(event.target.value)}}/>
        </label>
        <label>
            New Password <input type="text" onChange={(event) => {setNewPassword(event.target.value)}}/>
        </label>
        <button onClick={updatePassword}> Submit </button>
    </div>
  )
}

export default ChangePassword