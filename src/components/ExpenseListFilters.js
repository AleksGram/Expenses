import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


 class ExpenseListFilters extends Component {
    constructor (props) {
        super(props);
        this.state = {
            calendarFocused: null
        }
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState({calendarFocused})
    }

    render () {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    switch(e.target.value) {
                        case 'amount':
                        this.props.dispatch(sortByAmount());
                        break;
                        case 'date':
                        this.props.dispatch(sortByDate());
                        break;
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)( ExpenseListFilters);