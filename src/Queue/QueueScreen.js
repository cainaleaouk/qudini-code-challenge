import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomers } from './actions';
import Customer from './components/Customer';
import Controls from './components/Controls';

class QueueScreen extends Component {
    componentDidMount() {
        this.props.getCustomers();
    }

    render() {
        return (
           <div>
               <Controls />
               {
                   this.props.customers.map((customer, i) => <Customer key={i} {...customer} />)
               }
           </div>
        );
    }
}

const mapStateToProps = ({ queue }) => {

    const { customers, filterInputValue } = queue;

    const nextCustomers = filterInputValue === '' 
        ? customers
        : customers.filter(c => c.name.toLowerCase().includes(filterInputValue.toLowerCase()));

    return {
        customers: nextCustomers,
    };
}

const mapDispatchToProps = { 
    getCustomers,
}

export default connect(mapStateToProps, mapDispatchToProps)(QueueScreen);

