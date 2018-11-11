import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import './App.css';


class SideMenu extends Component{



    render(){
        return (<div className='sideBar'>
                    <ul className='sideList'>
                        <li className='sideli'> <Link to='/'>Homepage</Link></li>
                        <li className='sideli'> <Link to='/categories/masks'>Masks</Link></li>
                        <li className='sideli'> <Link to='/categories/statues'>Statues</Link></li>
                        <li className='sideli'> <Link to='/categories/vases'>Vases</Link></li>
                        <li className='sideli'> <Link to='/categories/fossils'>Fossils</Link></li>
                        
                    </ul>
        </div>
        )
    }
    //catergories/.
}



export default SideMenu