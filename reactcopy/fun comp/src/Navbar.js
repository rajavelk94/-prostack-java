import React from 'react'
function Navbar(){                                    //function method
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <a className='navbar-brand'href="#">examples navbar</a>
        </nav>
    )

}
 export default Navbar


/* import React from 'react'
                                                             //class method
class Navbar extends React.Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">Props Examples</a>
        </nav>
    }
}

export default Navbar
 */