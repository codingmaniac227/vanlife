import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import '../styles/vanslisting.css';
import Button from "../components/Buttons";
import { Spinner } from 'react-spinner-toolkit'
import Error from "../components/Error";
import {ButtonContext} from "../App";


const VansListing = () => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ refetch, setRefetch ] = useState(false);

    const params = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(`/api/vans/${params.id}`)
                if (!res.ok) {
                    setError(`Error fetching ${params.id}: ${res.status} ${res.statusText}`);
                    setLoading(false);
                    return
                }
                const data = await res.json();

                console.log(data.vans)
                setData(data.vans);
            } catch (err) {
                console.error('Network or parsing error:', err)
                setError(`Failed to fetch van. Please try again later.`);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[params, refetch])

    function handleRefetch() {
        setRefetch(prevFetch => !prevFetch)
    }

    let auth = false;

    if (error && !loading) {
        return (
            <>
                <ButtonContext.Provider value={{ data: [data], blackLongButton: true }}>
                    {error && !loading && (
                        <Error message={error}>
                            <Button.Long onClick={handleRefetch}>Reload Van</Button.Long>
                        </Error>
                    )}
                </ButtonContext.Provider>
            </>
        )
    }

    return (
        <>
            <ButtonContext.Provider value={{ data: [data], orangeLongButton: true }}>
                { loading && (
                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: "center", flexGrow: '1' }}>
                        <Spinner shape="dotLoader" color="#ffead0" loading speed={1} size={200} transition={true} />
                    </div>
                )}
                { !loading && !error && (
                    <section className="vans-listing-container">
                        <Link to='/vans' className='back-link'>
                            ← Back to all vans
                        </Link>

                        <div key={data.id} className="van-listing">
                            <img src={data.imageUrl} alt={data.name} className="van-listing-img" />
                            <Button.Medium id={data.id}>{data.type}</Button.Medium>
                            <div>
                                <h3>{data.name}</h3>
                                <span>
                                    ${data.price}<span>/day</span>
                                </span>
                                <p>{data.description}</p>
                                {auth && (
                                    <Button.Long>Rent this van</Button.Long>
                                )}
                                {!auth && (
                                    <Button.Long><Link to='/login'>Rent This Van</Link></Button.Long>
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </ButtonContext.Provider>
        </>
    );
};

export default VansListing;
