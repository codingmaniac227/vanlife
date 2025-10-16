import React from 'react';
import {ButtonContext} from "../App";
import { Spinner } from 'react-spinner-toolkit'
import Button from '/components/Buttons'
import Error from '/components/Error'
import '../styles/vans.css'

const Vans = () => {
    const [ data, setData ] = React.useState([])
    const [ loading, setLoading ] = React.useState(false);
    const [ error, setError ] = React.useState(null);
    const [ refetch , setRefetch ] = React.useState(false)
    const [ filters, setFilters ] = React.useState({
        simple: false,
        luxury: false,
        rugged: false
    })

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null)

            try {
                const res = await fetch('/api/vans');
                if (!res.ok) {
                    setError(`Failed to fetch vans: ${res.status} ${res.statusText}`)
                    setLoading(false)
                    return
                }
                const d = await res.json()
                console.log(d)
                setData(d.vans)
            } catch(err) {
                console.error('Network or parsing error:', err)
                setError('Something went wrong. Please try again later')
            } finally {
                setLoading(false);
            }

        }
        console.log('Fetching vans data...')
        fetchData()
    }, [refetch])

    function handleRefetch() {
        setRefetch(prevFetch => !prevFetch)
    }

    function toggleFilter(type) {
        setFilters(prev => ({
            ...prev,
            [type]: !prev[type]
        }))
    }

    const activeFilters = Object.keys(filters).filter(key => filters[key])

    console.time("filter-vans");
    const filteredData =
        activeFilters.length > 0
            ? data.filter(van => activeFilters.includes(van.type.toLowerCase()))
            : data;
    console.timeEnd("filter-vans");




    return (
        <>
            <ButtonContext.Provider value={{data, blackLongButton: true}}>
                <section className="van-container">
                    <h1>Explore Our Van Options</h1>
                    <ul className="van-filters">
                        <li>
                            <button className={`van-filters-btn ${filters.simple ? "active" : ""}`} onClick={() => toggleFilter('simple')}>Simple</button>
                            <button className={`van-filters-btn ${filters.luxury ? "active" : ""}`} onClick={() => toggleFilter('luxury')}>Luxury</button>
                            <button className={`van-filters-btn ${filters.rugged ? "active" : ""}`} onClick={() => toggleFilter('rugged')}>Rugged</button>
                        </li>
                        <li><button className='van-clear-filters'
                                    onClick={() => setFilters({ simple: false, luxury: false, rugged: false })}>
                                Clear filters
                            </button>
                        </li>
                    </ul>

                    { loading && (
                        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: "center", flexGrow: '1' }}>
                            <Spinner shape="dotLoader" color="#ffead0" loading speed={1} size={200} transition={true} />
                        </div>
                    )}

                    { !loading && (
                        <div className="van-grid">
                            {filteredData.map(van => (
                                <div key={van.id} className="van">
                                    <img src={van.imageUrl} alt={van.name} className="van-img"/>
                                    <div className='van-contents'>
                                        <h3 className='van-name'>{van.name}</h3>
                                        <span className='van-price'>${van.price}<br/><span>/day</span></span>
                                    </div>
                                    <Button.Medium id={van.id}>{van.type}</Button.Medium>
                                </div>
                            ))}
                        </div>
                    )}

                    { error && (
                        <Error message={error}><Button.Long onClick={handleRefetch}>Reload Vans</Button.Long></Error>
                    )}
                </section>
            </ButtonContext.Provider>
        </>
    );
};

export default Vans;