import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authenticaion=true}) {

    const selector = useSelector()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authenticaion && authStatus !== authenticaion){
            navigate("/login")
        }else if(!authenticaion && authStatus !== authenticaion){
            navigate("/")
        }
        setLoading(false)
    }, [authStatus, navigate, authenticaion])

  return loading ? <h1>Loading...</h1> : <>{children}</>
}
