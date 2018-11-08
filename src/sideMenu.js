import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class SideMenu extends Component{



    render(){
        return (<div>
                    <ul className='sideList'>
                        <li> <Link to='/'>Homepage</Link></li>
                        <li> <Link to='/masks'>Masks</Link></li>
                        <li> <Link to='/statues'>Statues</Link></li>
                        <li> <Link to='/vases'>Vases</Link></li>
                        <li> <Link to='/fossils'>Fossils</Link></li>
                        
                    </ul>
        </div>
        )
    }
    //catergories/.
}



export default SideMenu