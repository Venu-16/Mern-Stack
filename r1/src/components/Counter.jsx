import { useState } from 'react'

function counterApp() {
    const [count, setCount] = useState(0)
    return (
        
            <button onClick={() => setCount((count) => count + 1)}>
                Increment {count}
            </button>
        
    )
}

export default counterApp;