import React, { useState, useEffect } from 'react';
import Posts from './posts';
import SingleMedium from './singleMedium';

export default() => {
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        let myPosts;
        const data = sessionStorage.getItem('posts');
        
        if(data)
        {
            setPosts(JSON.parse(data));
        }

        async function getMediumPosts()
        {
            const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40StevenKryger');
            myPosts = await res.json();

            sessionStorage.setItem('posts', JSON.stringify(myPosts.items));
            setPosts(myPosts.items);
        }

        getMediumPosts();

    }, [])

    return(
        <div className="max-w-4xl mx-auto text-center overflow-x-scroll">
            <Posts
                data={posts}
                title="Publicaciones en Medium"
                card={SingleMedium}
            />
        </div>
    )
    
}