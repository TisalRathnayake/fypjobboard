import axios from 'axios';
import { toast } from 'react-toastify'
import {
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS,
    UPDATE_JOB_FAIL,
    UPDATE_JOB_REQUEST,
    UPDATE_JOB_RESET,
    UPDATE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
} from "../constants/jobconstant"


export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single job action
export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}

// register job action
export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST })

    try {
        const { data } = await axios.post("/api/job/create", job)
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        })
        toast.success("Job created successfully");


    } catch (error) {
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);

    }
}

// Update job action
export const updateAjobAction = (job, id) => async (dispatch) => {
    dispatch({ type: UPDATE_JOB_REQUEST })

    try {
        const { data } = await axios.put(`/api/job/update/${id}`, job)
        dispatch({
            type: UPDATE_JOB_SUCCESS,
            payload: data
        })
        toast.success("Job updated successfully");

        try {
            const { data } = await axios.get(`/api/job/${id}`);
            dispatch({
                type: JOB_LOAD_SINGLE_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: JOB_LOAD_SINGLE_FAIL,
                payload: error.response.data.error
            });
        }


    } catch (error) {
        dispatch({
            type: UPDATE_JOB_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);

    }
}

// Delete Job
export const jobDeleteSingleAction = (id) => async (dispatch) => {
    dispatch({ type: DELETE_JOB_REQUEST });
    try {
        const { data } = await axios.delete(`/api/job/${id}`);
        dispatch({
            type: DELETE_JOB_SUCCESS,
        });
        toast.success("Job Deleted successfully");
    } catch (error) {
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: error.response.data.error
        });
    }
}


export let getJobForEmail = (email) => {
    const JOBS = {
        'tisal112@outlook.com': {
            "available": true,
            "_id": "64feeb08100431363881d0d8",
            "title": "Quality Assurance Engineer",
            "description": "Creates tests that identify issues with software before a product launch. These tests entail other tasks such as developing and running new tests and reporting their results to stakeholders, who will collaborate to fix program bugs or problems.",
            "salary": "55000",
            "location": "Galle",
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