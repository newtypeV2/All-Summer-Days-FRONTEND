import React from 'react';


const CampaignList = (props) => {

    const displayAllCampaign = () => props.campaigns.map(campaign => <ol key={campaign.id} onClick={()=>props.clickHandler(campaign)}>{campaign.title}</ol>)
    return(
        <div className="campaignlist">
            <ul>
                <ol>Campaign List</ol>
                {displayAllCampaign()}
            </ul>   
        </div>
    )
}

export default CampaignList