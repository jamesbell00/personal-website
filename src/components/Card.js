import React from "react";

export default function Card(props) {

    let formattedDesc = props.description.split('\n').map(i => {
        
        return (
            <p>
                <li>{i}</li>
            </p>
        )
    })
    return (
        <div className="card">
            {props.logo && <img src={require(`../images/${props.logo}`)} alt="logo"/>}
            <div className="card--info">
                <div className="card--header">
                    <h1>{props.title}</h1>

                    <div className="card--links">
                    {props.url && 
                        <a className='seemore' href={props.url} target={"_blank"} rel="noreferrer">see more</a>}
                    {props.youtube && 
                        <a href={props.youtube} target={"_blank"} rel="noreferrer">
                            <i typeof="youtube" className="fa fa-2x fa-youtube fa-fw" />
                        </a>}
                    {props.github &&
                        <a href={props.github} target={"_blank"} rel="noreferrer">
                           <i typeof="git" className="fa fa-2x fa-github fa-fw" /> 
                        </a>}
                    </div>
                </div>
                {props.startDate ? <h2>{props.startDate} - {props.endDate}</h2> : <h2>{props.date}</h2>}
                {props.city && 
                    <h3>{props.city}, {props.country}</h3>}
                {props.stack && 
                    <h3>Stack: {props.stack}</h3>}
                {formattedDesc}
            </div>
        </div>
    )
}