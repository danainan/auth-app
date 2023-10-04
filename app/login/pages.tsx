"use client"
import axios from 'axios'
import React, {useState} from 'react'

function LoginPages() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit =async (e:any) => {
        e.preventDefault();

        if (email && password) {
            try {
                let res = await axios.post("http://localhost:8000/api/login",{
                    email,
                    password
                })

                localStorage.setItem('token',res.data.token)
               
               
            }
            catch (err:any){
                console.log(err)
            }
        }else {
            console.log("All fields are required")
        }
    }


    return (
        <>
            <div className="relative flex flex-col justify-center overflow-hidden pt-10">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-blue-700">Panda</h1>
                    <form className="space-y-4 form-group" onSubmit={handleSubmit}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full input input-bordered input-primary form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full input input-bordered input-primary form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type='submit' className="btn btn-block btn-success" >LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPages