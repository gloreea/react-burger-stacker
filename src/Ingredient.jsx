import { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return(
            <>
                <p onClick={this.props.handleAddIngredient}
                    style={{
                        backgroundColor: this.props.item.color
                    }}
                >{this.props.item.name}</p>
            </>
        )
    }
}
