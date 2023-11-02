import { Typography, Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import StatComponent from '../../component/StatComponent'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector } from 'react-redux'
import moment from 'moment'

const UserDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    let getJobForEmail = (email) => {
        const JOBS = {
            'tisal112@outlook.com': {
                "available": true,
                "_id": "64feeb08100431363881d0d8",
                "title": "Quality Assurance Engineer",
                "description": "Creates tests that identify issues with software before a product launch. These tests entail other tasks such as developing and running new tests and reporting their results to stakeholders, who will collaborate to fix program bugs or problems.",
                "salary": "55000",
                "location": "Galle",
                "IM1":"Learn about the software development lifecycle (SDLC), Learn about different types of software testing & Learn about software testing tools",
                "jobType": {
                    "_id": "64fec2eb100431363881d006",
                    "jobTypeName": "QA"
                },
                "user": {
                    "_id": "64f5f3cb40a71542d4cf4a8c",
                    "firstName": "Tisal"
                },
                "createdAt": "2023-09-11T10:25:12.729Z",
                "updatedAt": "2023-09-11T10:25:12.729Z",
                "__v": 0
            },
            'nimal@gmail.com': {
                "available": true,
                "_id": "64f731fd389c3f0fe406454a",
                "title": "Frontend Developer",
                "description": "A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
                "salary": "85000",
                "location": "Colombo",
                "IM1":"Build a strong portfolio, Contribute to open-source projects & Network with other developers",
                "jobType": {
                    "_id": "64f731e5389c3f0fe4064535",
                    "jobTypeName": "Developer"
                },
                "user": {
                    "_id": "64f5f3cb40a71542d4cf4a8c",
                    "firstName": "Tisal"
                },
                "createdAt": "2023-09-05T13:49:49.697Z",
                "updatedAt": "2023-09-05T13:49:49.697Z",
                "__v": 0
            },
            'bushra@gmail.com': {
                "available": true,
                "_id": "64feb27c100431363881cf29",
                "title": "Business Analyst",
                "description": "Evaluating business processes, anticipating requirements, uncovering areas for improvement, and developing and implementing solutions. Leading ongoing reviews of business processes and developing optimization strategies. Staying up-to-date on the latest process and IT advancements to automate and modernize systems.",
                "salary": "60000",
                "location": "Colombo",
                "IM1":"Learn about business analysis frameworks and methodologies, Gain experience with business analysis tools & Network with other business analysts",
                "jobType": {
                    "_id": "64feb21d100431363881cf10",
                    "jobTypeName": "BA"
                },
                "user": {
                    "_id": "64f5f3cb40a71542d4cf4a8c",
                    "firstName": "Tisal"
                },
                "createdAt": "2023-09-11T06:23:56.763Z",
                "updatedAt": "2023-09-11T06:23:56.763Z",
                "__v": 0
            }
        }
    
        return JOBS[email];
    }
    return (
        <>
            <Box >

                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value={user && moment(user.createdAt).format('YYYY / MM / DD')}
                        icon={<CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Member since"
                        money=''
                    />
                    <StatComponent
                        value={user && user.jobsHistory.length}
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Number of jobs submitted"
                        money=''
                    />
                    {<StatComponent
                        value={user && getJobForEmail(user.email)?.IM1}
                        description="Insights to Improve"
                        money=''
                    /> }


                </Stack>
            </Box>

        </>
    )
}

export default UserDashboard