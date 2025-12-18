import { useState, useEffect } from "react";

function useEffect1() {
    const [user, setUser] = useState(null);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => setUser(data));
    })

    return (
        <div>
            <h1>User Data:</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>    
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>       
            )}
        </div>
    );  


}
export default useEffect1;