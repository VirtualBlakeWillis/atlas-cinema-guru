import axios from 'axios';
import './navigation.css';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../general/Button';
import Activity from '../Activity';
const mockActivities = [
    {
        user: 'testUser',
        movie: 'My Favorite Movie',
        time: "March 12, 2024"
    },
    {
        user: 'testUser',
        movie: 'star wars Movie',
        time: "March 11, 2024"
    },
    {
        user: 'testUser',
        movie: 'My least Movie',
        time: "March 10, 2024"
    },
];

export default function SideBar({small, setSmall}) {
    const [selected, setSelected] = useState('home');
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    // const navigate = useNavigate();
    const [active, setActive] = useState(0);

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
        <nav className={"sidebar " + (small ? "small" : "")}>
            <ul>
                <li onClick={() => setActive(1)}>
                    <div className=" fa-solid fa-folder"></div>
                    <p>Home</p>
                    { active === 1 ? <div className="fa-solid fa-arrow-right"></div> : null
                    }
                    {/* <div className={"fa-solid fa-arrow-right" + (!active === 1 ? ' hidden' : "")}></div> */}
                </li>
                <li onClick={() => {setActive(2)}}>
                    <div className=" fa-solid fa-star"></div>
                    <p>Favorites</p>
                    {
                        active === 2 ? <div className="fa-solid fa-arrow-right"></div> : null
                    }
                    {/* <div className={"hidden fa-solid fa-arrow-right" + (!active === 2 ? ' hidden' : "")}></div> */}

                </li>
                <li onClick={() => setActive(3)}>
                    <div className=" fa-solid fa-clock"></div>
                    <p>Watch Later</p>
                    {
                        active === 3 ? <div className="fa-solid fa-arrow-right"></div> : null
                    }
                    {/* <div className={"hidden fa-solid fa-arrow-right" + (!active === 3 ? ' hidden' : "")}></div> */}
                </li>
            </ul>
            <div className="sidebar-activities">
                <p>Latest Activities</p>
                <ul>
                    {/* {activities.map(activity => { */}
                    {mockActivities.map(activity => {
                        return (
                            <Activity
                                name={activity.user}
                                movie={activity.movie}
                                time={activity.time}
                            />
                        )
                        /* */
                    })
                    }
                </ul>
            </div>
        </nav>

    );
}

