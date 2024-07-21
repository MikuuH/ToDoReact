import { useState } from "react";

export default function Footer() {
    const [cout, setCout] = useState(0);
    setInterval(() => setCout(prev => prev + 1), 1000);
        return (
                <>
                {cout}
                </>
            )
}
