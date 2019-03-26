import React from 'react';
//import PropTypes from 'prop-types';
import classNames from './selectdate.module.css';
import moment from 'moment';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;





export default class SelectDate extends React.PureComponent {

    render() {

        return (
            <div className={classNames.datepicker}>
                <RangePicker
                    disabledDate={this.disabledDate}
                    disabledTime={this.disabledRangeTime}
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: [moment('08:00:00', 'HH:mm:ss'), moment('17:59:59', 'HH:mm:ss')],
                    }}
                    format="YYYY-MM-DD HH:mm:ss"
                    onChange={this.onChange}
                />
            </div>

        );
    }

    range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
    disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().startOf('date');
    }

    disabledRangeTime = (_, type) => {
        if (type === 'start') {
            return {
                disabledHours: () => this.range(0, 60).splice(4, 20),
                disabledMinutes: () => this.range(30, 60),
                disabledSeconds: () => [55, 56],
            };
        }
        return {
            disabledHours: () => this.range(0, 60).splice(20, 4),
            disabledMinutes: () => this.range(0, 31),
            disabledSeconds: () => [55, 56],
        };
    }

    onChange = (dates) => {

        this.props.chosenDate(dates)
        /*  console.log('From: ', dates[0], ', to: ', dates[1]);
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);*/
    }

}