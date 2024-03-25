import { useLoaderData } from "react-router-dom";


const Showdetails = () => {


    const user = useLoaderData()
    return (
        <div>
            <h1>JOb Location:{user.company.name}</h1>
            <h3>Latitute:{user.address.geo.lat}</h3>
            <h3>Longitude:{user.address.geo.lng}</h3>
            
        </div>
    );
};

export default Showdetails;