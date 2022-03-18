import {Helmet} from "react-helmet-async"

import { PageLayout } from "../../Layoutes/PageLayout"
import dashBoardArrow from "../../Assets/Images/dashboardArrow.png"

import "./Dashboard.css"

export const Dashboard = props => {
    return (
        <>
            <Helmet>
                <title>Table | Dashboard</title>
            </Helmet>
            <PageLayout>
                <div className="dashboard">
                    <h1>Welcome to Users Table!!</h1>
                    <h4><img className="dashArrow" src={dashBoardArrow} alt=""></img>Create your own table of users</h4>
                    <h4><img className="dashArrow" src={dashBoardArrow} alt=""></img>Edit your table when you want</h4>
                    <h4><img className="dashArrow" src={dashBoardArrow} alt=""></img>Save your work</h4>
                    <h4><img className="dashArrow" src={dashBoardArrow} alt=""></img>Select photos for users</h4>
                </div>
            </PageLayout>
        </>
        
    )
}