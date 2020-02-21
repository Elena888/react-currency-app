import React, {useState, useEffect} from 'react';

const Currency = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://currencyapi.net/api/v1/rates?key=c29b164fc15c0f50a7321675aec94f2effab';
        fetch(proxyUrl + targetUrl)
            .then(blob => blob.json())
            .then(data => {
                setData(data);
                setLoading(false);
                return data;
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }, []);

    const date = timestamp => {
        const date = new Date(timestamp * 1000);
        const formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
        return formattedDate
    };

    return (
        <div className="container">
            <h1>Currency</h1>
            <h3>Exchange Rate = 1 USD</h3>

            {loading ? (
                "Loading..."
            ) : (
                <>
                <h4>Date: <span>{date(data.timestamp)}</span></h4>
                <div className="currencyList">
                    {Object.keys(data.rates).map(function(key) {
                        return (
                            <div key={key} className="currencyList__item">
                                <div className="currencyList__name">
                                    {key}
                                </div>
                                <div className="currencyList__value">
                                    {data.rates[key].toFixed(4)}
                                </div>
                            </div>
                        )
                    })}
                </div>
                </>
            )}
        </div>
    )
};

export default Currency;
