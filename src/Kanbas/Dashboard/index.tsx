import { Link } from "react-router-dom";
import { courses } from "../Database";
import {
    FaEllipsisV,
    FaRegArrowAltCircleRight,
    FaRegArrowAltCircleUp,
    FaRegEdit,
    FaRegEye,
    FaRegFlag
} from "react-icons/fa";
import "./index.css";
import BlackHeader from "../BlackHeader";
import {FaRegPenToSquare} from "react-icons/fa6";

function Dashboard() {
    return (
        <>
            <div className="d-none d-sm-block sticky-top wd-dashboard wd-dashboard-component"> 
                <h1>Dashboard</h1> 
                <hr/>
            </div>

            <div className="d-block d-sm-none wd-dashboard-component">
                <p className="wd-three-dot-menu"><FaEllipsisV /></p>
                <hr />
            </div>
            
            <div className="wd-dashboard-component">
                <h2>Published Courses ({courses.length})</h2> 
                <hr />
            </div>

            <div className="row wd-dashboard-component">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col wd-course-card-col" style={{ width: 250 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top wd-card-image" style={{ height: 200 }} alt="course card"/>
                                <div className="card-body">
                                    <Link className="card-title wd-card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                            <p className="wd-nowrap" style={{marginBottom: "2px", color: "pink"}}>{course.name}</p>
                                    </Link>
                                    <p className="card-text wd-nowrap" style={{marginBottom: "2px" , color: "blue"}}>{course.number}</p>
                                    <p className="card-text wd-nowrap" style={{marginBottom: "2px", fontSize: "smaller" , color: "red"}}>{course.semester}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn" style={{fontSize: "25px", border: "0", padding: "0"}}><FaRegArrowAltCircleRight /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );    
}
export default Dashboard