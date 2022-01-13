import React from 'react'
import {Link} from "react-router-dom"

function Home() {
    return (
        <div>
            <h2>my home</h2>
            <Link to="/bsi">bac si</Link>
            <br />
            <Link to="/chuyenkhoa">chuyen khoa</Link>
            <br />
            <Link to="/hdkh">huong dan khach hang</Link>
        </div>
    )
}

export default Home
