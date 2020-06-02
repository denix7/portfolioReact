import React, { useState, useEffect } from "react";
import Repo from "../components/repo";

export default() => {

    const [repos, setRepos] = useState([]);

    useEffect(()=> {

        async function fetchRepos() {
            const res = await fetch("https://api.github.com/users/denix7/repos");
            let myRepos = await res.json();

            setRepos(myRepos);
        }
        
        fetchRepos();
        
    }, []);

    return (
    <div className="max-w-4xl mx-auto">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Hecha un vistazo a mi repositorio</h2>
            <p>Github</p>
        </header>

        <ul className="repos-list">
            {
                repos.map((repo) => {
                    // return <li>{repo.name}</li>
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
    </div>
)}