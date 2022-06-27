import React from "react";
import PropTypes from 'prop-types'
import {icon} from "../../Services/Services";
import moment from "moment";



const FeedItem=(props)=>{
    const data=props.children
    return(
        <>
            <div className={"feedItem"}>
                <div className={"feed-grid"}>
                    <div className={"feed-grid-item"}>
                        <div className={"icon"}>
                            <img
                                src={icon}
                                alt={"Chuck Norris"}
                            />
                            {data[3] && <p>Categories:
                                {(data[3] || []).map((cat,index) =>
                                    <span key={index}>{cat}</span>
                                )}</p>}
                        </div>
                    </div>
                    <div className={"feed-grid-item"}>
                        <p className={"quote"}><q><em>{data[0]}</em></q></p>
                    </div>
                    <div className={"feedItemFooter"}>
                        <p>Created on:<span> {moment(data[1]).format("DD/MM/YYYY")}</span></p>
                        <p>Updated on:<span>{moment(data[2]).format("DD/MM/YYYY")}</span> </p>
                    </div>
                </div>
            </div>
        </>
    )
}
FeedItem.propTypes={
    children: PropTypes.object
}
export default FeedItem;