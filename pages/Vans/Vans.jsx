import React from 'react';
import {ButtonContext} from "../../App";
import { Spinner } from 'react-spinner-toolkit'
import Button from '/components/Buttons'
import Error from '/components/Error'
import '../../styles/vans.css'
import {Link} from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Vans = () => {
    const [ data, setData ] = React.useState([])
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState(null);
    const [ refetch , setRefetch ] = React.useState(false)
    const [ searchParams, setSearchParams] = useSearchParams()

    const type = searchParams.getAll('type')
    const typesKey = React.useMemo(
        () => type.slice().sort().join('|'),
        [type]
    );

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null)

            let base = 'http://localhost:5000/api/vans'
            const params = new URLSearchParams()
            type.forEach(type => params.append('type', type))

            const url = type.length ? `${base}?${params.toString()}` : base

            try {
                const res = await fetch(url);
                if (!res.ok) {
                    setError(`Failed to fetch vans: ${res.status} ${res.statusText}`)
                    setLoading(false)
                    return
                }

                const data = await res.json()
                console.log(data.vans)
                setData(data.vans)
            } catch(err) {
                console.error('Network or parsing error:', err)
                setError('Something went wrong. Please try again later')
            } finally {
                setLoading(false);
            }

        }
        console.log('Fetching vans data...')
        fetchData()
    }, [refetch, typesKey])

    function handleRefetch() {
        setRefetch(prevFetch => !prevFetch)
    }

    const handleAddType = (addType) => {
        const newParams = new URLSearchParams(searchParams)

        const currentTypes = newParams.getAll('type')

        if (currentTypes.includes(addType)) {
            const filteredTypes = currentTypes.filter((type) => type !== addType)
            newParams.delete('type')
            filteredTypes.forEach((type) => newParams.append('type', type))
        } else {
            newParams.append('type', addType)
        }

        setSearchParams(newParams)
    };

    return (
        <>
            <ButtonContext.Provider value={{data, blackLongButton: true}}>
                {!error && (

                <section className="van-container">
                    <h1>Explore Our Van Options</h1>
                    <ul className="van-filters">
                        <li>
                            <button className='van-filters-btn' onClick={() => handleAddType('simple')}>Simple</button>
                            <button className='van-filters-btn' onClick={() => handleAddType('luxury')}>Luxury</button>
                            <button className='van-filters-btn' onClick={() => handleAddType('rugged')}>Rugged</button>
                        </li>
                        {typesKey && (
                            <li><button className='van-clear-filters' onClick={() => setSearchParams({})}>
                                    Clear filters
                                </button>
                            </li>
                        )}
                    </ul>

                    { loading && (
                        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: "center", flexGrow: '1' }}>
                            <Spinner shape="dotLoader" color="#ffead0" loading speed={1} size={200} transition={true} />
                        </div>
                    )}

                    { !loading && (
                        <div className="van-grid">
                            {data.map(van => (
                                <Link key={van.id} className='van-link' to={`/vans/${van.id}`} state={{ search: location.search }}>
                                    <div className="van">
                                        <img src={van.imageurl} alt={van.name} className="van-img"/>
                                        <div className='van-contents'>
                                            <h3 className='van-name'>{van.name}</h3>
                                            <span className='van-price'>${van.price}<br/><span>/day</span></span>
                                        </div>
                                        <Button.Medium id={van.id}>{van.type}</Button.Medium>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>
                )}
                {error && (
                    <Error message={error}>
                        <Button.Long onClick={handleRefetch}>Reload Vans</Button.Long>
                    </Error>
                )}
            </ButtonContext.Provider>
        </>
    );
};

export default Vans;