import React, {Component} from 'react'
const campaignUrl = `http://${window.location.hostname}:5000/campaigns`
class DmContainer extends Component{
    
    componentDidMount(){
        fetch(`${campaignUrl}/${this.props.camp.id}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
   
    render(){
        return (
            <div>

            </div>
        )
    }
}

export default DmContainer