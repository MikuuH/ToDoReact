import { useState } from "react";

export default function Header() {
    const [now, setNow] = useState(new Date());
    setInterval(()=> setNow(new Date()), 1000)
        return (
            <>
                <header>
                    <div>
                        <h1>TIME</h1>
                    </div>
                    <span>
                        {now.toLocaleTimeString()}
                    </span>
                </header>
            </>
        )
}



