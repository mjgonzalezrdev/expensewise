import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from '../components/Home';
import Expenses from "../components/Expenses";
import Participants from "../components/Participants";
import Groups from "../components/Groups";
import Sidebar from "../components/Sidebar";

const ExpenseWiseSwitcher = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/expenses" component={ Expenses }/>
            <Route path="/groups" component={ Groups }/>
            <Route path="/participants" component={ Participants }/>
        </Switch>
    )
}

const ExpenseWiseRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Sidebar />
                <ExpenseWiseSwitcher/>    
            </div>        
        </BrowserRouter>
    )
}

export default ExpenseWiseRouter

