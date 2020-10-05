import React from 'react';
import Menu from "./MenuComponent";
import {DISHES} from '../shared/dishes';
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {
        const HomePage = ()=>{
            return(
                <Home />
            );
        }
        return(

            <div className="App">
                <Header />
                <Switch>
                    <Route path={"/home"} component={HomePage}/>
                    <Route exact path={"/menu"} component={()=><Menu dishes = {this.state.dishes}/>} />
                    <Redirect to={"/home"}/>
                </Switch>
                <Footer />
            </div>

        )
    }


}

export default Main;
