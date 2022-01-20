import React, { Component } from 'react'
import {
    FormControl,
    FormLabel,Select
} from '@chakra-ui/react';
import { chapter, classes, langauges, subjects, topic } from '../../config/const';
export default class CourseFilterForm extends Component {
    render() {
        return (
            <FormControl>
                <div>
                    <FormLabel htmlFor='language'>Language</FormLabel>
                    <Select id='language' placeholder='Select Language'>
                        {langauges.map((lang) => {
                            return (<option value={lang}>{lang}</option>);
                        })}
                    </Select>
                </div>
                <div>
                    <FormLabel htmlFor='subject'>Subject</FormLabel>
                    <Select id='subject' placeholder='Select Subject'>
                        {subjects.map((sub) => {
                            return (<option value={sub}>{sub}</option>);
                        })}
                    </Select>
                </div>
                <div>
                    <FormLabel htmlFor='class'>Class</FormLabel>
                    <Select id='class' placeholder='Select Class'>
                        {classes.map((c) => {
                            return (<option value={c}>{c}</option>);
                        })}
                    </Select>
                </div>
                <div>
                    <FormLabel htmlFor='chapter'>Chapter</FormLabel>
                    <Select id='chapter' placeholder='Select Chapter'>
                        {chapter.map((c) => {
                            return (<option value={c}>{c}</option>);
                        })}
                    </Select>
                </div>
                <div>
                    <FormLabel htmlFor='topic'>Topic</FormLabel>
                    <Select id='topic' placeholder='Select Topic'>
                        {topic.map((c) => {
                            return (<option value={c}>{c}</option>);
                        })}
                    </Select>
                </div>

            </FormControl>
        )
    }
}
