import React, { useState, useEffect } from 'react';



const usePost = (url, data) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const postData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }

                const json = await res.json();
                setResponse(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        postData();
    }, [url, data]);

    return { loading, error, response };
};

export default usePost;
