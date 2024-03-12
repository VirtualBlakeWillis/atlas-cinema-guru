import axios from 'axios';
import './navigation.css';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../general/Button';

export default function SideBar() {
    const [selected, setSelected] = useState('home');
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    // const navigate = useNavigate();

    // function setPage(pageName) {
    //     setSelected(pageName);
    //     if (selected === 'Home') {
    //         navigate('/home');
    //     } else if (selected === 'Favorites') {
    //         navigate('/favorites');
    //     } else if (selected === 'Watch Later') {
    //         navigate('/watchlater');
    //     }
    // }

     useEffect( () => {
        // async function fetchData() {
        const token = localStorage.getItem('accessToken');
        // axios.get(
        //     'http://localhost:8000/api/activity'
        //     , {
        //         headers: {
        //             'Authorization': `Bearer ${token}`
        //           }
        //         })
        //     .then(res => {
        //         setActivities(res.data);
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // }
    });
    
    return (
        <nav className="sidebar">
            <ul>
                <li onClick={() => {}}>
                    <div className=" fa-solid fa-folder"></div>
                    Home
                </li>
                <li onClick={() => {}}>
                    <div className=" fa-solid fa-star"></div>
                    Favorites
                </li>
                <li onClick={() => {}}>
                    <div className=" fa-solid fa-clock"></div>
                    Watch Later
                </li>
            </ul>
            <div className="sidebar-activities">
                <p>Latest Activities</p>
                <ul>
                    {activities.map(activity => {
                        /* */
                    })
                    }
                </ul>
            </div>
        </nav>

    );
}

