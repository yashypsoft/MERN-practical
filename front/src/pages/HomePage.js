import React, { Component } from 'react'
import CourseList from '../componets/CourseList'
import Footer from '../componets/Footer'
import CourseFilterForm from '../componets/forms/CourseFilterForm';
import Navbar from '../componets/Navbar'

export default class HomePage extends Component {
    render() {
        return (
            
            <div>
                <Navbar></Navbar>
                <CourseFilterForm></CourseFilterForm>
                <CourseList></CourseList>
                <Footer></Footer>
            </div>
        )
    }
}
