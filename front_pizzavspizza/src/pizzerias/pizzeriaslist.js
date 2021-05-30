import React, { Component } from "react";
import PizzaDetail from "./pizzeriadetail";
import axios from 'axios';


class PizzaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzeriasData: [],
            pizzeria: "",
            showComponent: false,
        };
        this.getPizzaDetail=this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails=this.showPizzeriaDetails.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:8000')
            .then((response) => {
                this.setState({ pizzeriasData: response.data });
            })
        .catch(function (error){
            console.log(error);
        })
    }
    getPizzaDetail(item){
        axios.get('http://localhost:8000'.concat(item.absolute_url))
        .then((response) => {
            this.setState({ pizzeria: response.data })
        })
            .catch(function (error){
                console.log(error)
            })

    }
    showPizzeriaDetails(item){
        this.getPizzaDetail(item);
        this.setState({ showComponent: true });
    }
    render() {
        return(
            <div>
                {this.state.pizzeriasData.map( item => {
                    return (
                        <h3 key={item.id} onClick={() => this.showPizzeriaDetails(item)}>
                            {item.pizzeria_name},  {item.city}
                        </h3>
                    );
                })}
                {this.state.showComponent ? (
                    <PizzaDetail pizzeriaDetail={this.state.pizzeria} />
                ): null}
            </div>
        );
    }
}
export default PizzaList;
