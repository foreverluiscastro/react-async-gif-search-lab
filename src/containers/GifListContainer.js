import React, { Component } from 'react'
import GifList from '../components/GifList'

const API = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=q9ETR9Qz4IiOswlHs6VEAFe7nG4Wgeyf&rating=g'

export default class GifListContainer extends Component {
    state = {
        gifs: "",
        threeGifs: []
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                gifs: data
            })
        })
    }

    getThreeGifs = () => {
        const three = this.state.gifs.splice(0, 3)
        console.log(three)
        this.setState({
            threeGifs: three
        })
    }




    render() {
        return (
            <div>
                <GifList gifs={this.getThreeGifs}/>
            </div>
        )
    }
}
