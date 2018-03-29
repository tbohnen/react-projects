import React from 'react';
import Item from './item'
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { allItems: [], buttons: [], int: ["this works", "this doesnt work"] };
        this.singleItem = {}
    }
    eventHandler(e) {
        var words = e.target.value;
        this.singleItem.item = words;
    }
    eventHandlerT(e) {
        var words = e.target.value;
        this.singleItem.product = words.split(",");
        this.singleItem.status = "false";
    }
    handleButton() {
        this.state.allItems.push(this.singleItem)
        this.singleItem = {};
        this.display();
        var data = localStorage.getItem("allData");
        console.log("data", data)
    }
    display() {
        this.setState({
            buttons: this.state.allItems.map(element => {
                return <Item item={element.item} product={element.product} status={element.status} />
            })
        })
    }
    render() {
        // if (data) {

        // console.log({ hits: JSON.parse(cachedHits) })
        // this.setState({ allItems: data })
        // }
        return (
            <div>
                <h1>This is the main page</h1>
                <div>
                    <input type="text" placeholder="final Product e.g Cake" onChange={this.eventHandler.bind(this)} />
                    <input type="text" placeholder="Ingredients e.g milk,eggs" onChange={this.eventHandlerT.bind(this)} /><br />

                    <button onClick={this.handleButton.bind(this)}>Add</button><br />
                </div>
                <div>
                    {this.state.buttons}
                </div>
            </div >
        )
    }
}