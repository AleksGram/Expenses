import moment from 'moment';

export default [{
    id: '1',
    description: 'Car',
    note: 'new',
    amount: 5000,
    createdAt: 0
},
{
    id: '2',
    description: 'Wash',
    note: '',
    amount: 50,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Gym',
    note: 'membership',
    amount: 100,
    createdAt: moment(0).add(4, 'days').valueOf()
}]
