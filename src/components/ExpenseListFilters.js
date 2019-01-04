import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


 export class ExpenseListFilters extends Component {
    constructor (props) {
        super(props);
        this.state = {
            calendarFocused: null
        }
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState({calendarFocused})
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        switch(e.target.value) {
            case 'amount':
            this.props.sortByAmount();
            break;
            case 'date':
            this.props.sortByDate();
            break;
        }
    }

    render () {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={this.onTextChange}/>
                <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}>
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

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (value) => dispatch(setTextFilter(value)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
})

export default connect(mapStateToProps, mapDispatchToProps)( ExpenseListFilters);