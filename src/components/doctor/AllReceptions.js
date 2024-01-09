import ApiService, { Apiurls } from "../../WebService/ApiService"
import { useSelector, useDispatch } from 'react-redux'
import { listRecpReducer } from "../../reduxData/ReceptionSlice"
import { useEffect, useState } from "react"
export default function AllReceptions() {
    const user = useSelector(state => state.authInfo.value)
    const recpList = useSelector(state => state.recpInfo.value)
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")

    const list = async () => {
        try {
            const response = await ApiService.GetApiCall(Apiurls.RECEPTION_LIST, user.token)
            console.log(response)
            if (response.data.status) {
                dispatch(listRecpReducer(response.data.data))
            } else {
                setMsg(response.data.msg)
            }
        }
        catch (error) {
            setMsg("Network ERROR..!")
        }
    }

    useEffect(() => {
        list()
    }, [])

    return <>
        <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container">

                <div className="section-title">
                    <h2>My Clinics..!</h2>
                    <p>{msg}</p>
                </div>
                <div>
                    <table className=" table table-responsive table-hover">
                        <thead>
                            <th>S.no</th>
                            <th>Clinic Name</th>
                            <th>Receptionist</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Status</th>
                        </thead>

                        <tbody>
                            {recpList.map((ob, index) => <tr><td>{index + 1}</td>
                                <td>{ob.raddress}</td>
                                <td>{ob.name}</td>
                                <td>{ob.phoneNumber}</td>
                                <td>{ob.email}</td>
                                <td>{ob.password}</td>
                                <td>{ob.activeStatus ? "Active" : "DeActive"}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>


            </div >
        </section >
    </>
}