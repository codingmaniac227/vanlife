import React from 'react';
import {useParams} from "react-router-dom";

const AdminVans = () => {
    const [ data, setData ] = React.useState([])
    const [ loading, setLoading ] = React.useState(false)
    const [ error, setError ] = React.useState(null)
    const [ refetch, setRefetch ] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const res = await fetch(`http://localhost:5000/api/admin/vans`)
                if (!res.ok) {
                    setError(`Failed to fetch vans: ${res.status} ${res.statusText}`)
                    setLoading(false)
                }
            } catch (err) {
                console.error(`Failed to fetch vans: ${err}`)
                setError(`Something went wrong. Please try again later`)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [data])

    return (
        <div>
            AdminVans
        </div>
    );
};

export default AdminVans;