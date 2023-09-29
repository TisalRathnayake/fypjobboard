import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Avatar, Box } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux'
import { updateAuserAction } from '../../redux/actions/userAction'
import { Grid } from '@mui/material';
import { useEffect } from 'react';


const UserInfoDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    const { palette } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(user);
        // formik.setValues({
        //         title: singleJob && singleJob.title,
        //         description: singleJob && singleJob.description,
        //         salary: singleJob && singleJob.salary,
        //         location: singleJob && singleJob.location,
        //         jobType: singleJob && singleJob.jobType,
        //   });
    }, [user]);

    const formik = useFormik({
        initialValues: {
            firstName: user && user.firstName,
            lastName: user && user.lastName,
            email: user && user.email,
            DOB: user && user.DOB,
            AddressLine1: user && user.AddressLine1,
            AddressLine2: user && user.AddressLine2,
            City: user && user.City,
            District: user && user.District,
            Province: user && user.Province,
            PostalCode: user && user.PostalCode,
            ContactNo: user && user.ContactNo,
            Gender: user && user.Gender,
            Race: user && user.Race,
            Religion: user && user.Religion,
            NIC: user && user.NIC,
            UniversityName: user && user.UniversityName,
            EducationalQualifications: user && user.EducationalQualifications,
            Other_Qualifications: user && user.Other_Qualifications,
            Technical_skills: user && user.Technical_skills,
            Soft_skills: user && user.Soft_skills,
            Undergrade_Major: user && user.Undergrade_Major,
            PreferredJob: user && user.PreferredJob,
        },

        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(updateAuserAction(values, user._id));
            // actions.resetForm();
        }

    })

    return (
        <> <Grid style={{backgroundColor: "white"}} onSubmit={formik.handleSubmit} component="form" className='form_style border-style' container spacing={2}>
            {/* <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "primary.white" }}> */}

                {/* <div style={{backgroundColor: "primary.white"}} onSubmit={formik.handleSubmit} component="form" className='form_style border-style' > */}
                        
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="DOB"
                            label="DOB"
                            name='DOB'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="DD/MM/YYYY"
                            value={formik.values.DOB}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.DOB && Boolean(formik.errors.DOB)}
                            helperText={formik.touched.DOB && formik.errors.DOB}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="AddressLine1"
                            label="AddressLine1"
                            name='AddressLine1'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Address Line 1"
                            value={formik.values.AddressLine1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.AddressLine1 && Boolean(formik.errors.AddressLine1)}
                            helperText={formik.touched.AddressLine1 && formik.errors.AddressLine1}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="AddressLine2"
                            label="AddressLine2"
                            name='AddressLine2'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Address Line 2"
                            value={formik.values.AddressLine2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.AddressLine2 && Boolean(formik.errors.AddressLine2)}
                            helperText={formik.touched.AddressLine2 && formik.errors.AddressLine2}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="City"
                            label="City"
                            name='City'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="City"
                            value={formik.values.City}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.City && Boolean(formik.errors.City)}
                            helperText={formik.touched.City && formik.errors.City}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="District"
                            label="District"
                            name='District'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="District"
                            value={formik.values.District}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.District && Boolean(formik.errors.District)}
                            helperText={formik.touched.District && formik.errors.District}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Province"
                            label="Province"
                            name='Province'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Province"
                            value={formik.values.Province}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Province && Boolean(formik.errors.Province)}
                            helperText={formik.touched.Province && formik.errors.Province}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="PostalCode"
                            label="PostalCode"
                            name='PostalCode'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="PostalCode"
                            value={formik.values.PostalCode}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.PostalCode && Boolean(formik.errors.PostalCode)}
                            helperText={formik.touched.PostalCode && formik.errors.PostalCode}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="ContactNo"
                            label="ContactNo"
                            name='ContactNo'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="ContactNo"
                            value={formik.values.ContactNo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.ContactNo && Boolean(formik.errors.ContactNo)}
                            helperText={formik.touched.ContactNo && formik.errors.ContactNo}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Gender"
                            label="Gender"
                            name='Gender'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Gender"
                            value={formik.values.Gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Gender && Boolean(formik.errors.Gender)}
                            helperText={formik.touched.Gender && formik.errors.Gender}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Race"
                            label="Race"
                            name='Race'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Race"
                            value={formik.values.Race}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Race && Boolean(formik.errors.Race)}
                            helperText={formik.touched.Race && formik.errors.Race}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Religion"
                            label="Religion"
                            name='Religion'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Religion"
                            value={formik.values.Religion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Religion && Boolean(formik.errors.Religion)}
                            helperText={formik.touched.Religion && formik.errors.Religion}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="NIC"
                            label="NIC"
                            name='NIC'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="NIC"
                            value={formik.values.NIC}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.NIC && Boolean(formik.errors.NIC)}
                            helperText={formik.touched.NIC && formik.errors.NIC}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="UniversityName"
                            label="UniversityName"
                            name='UniversityName'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="UniversityName"
                            value={formik.values.UniversityName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.UniversityName && Boolean(formik.errors.UniversityName)}
                            helperText={formik.touched.UniversityName && formik.errors.UniversityName}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="EducationalQualifications"
                            label="EducationalQualifications"
                            name='EducationalQualifications'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="EducationalQualifications"
                            value={formik.values.EducationalQualifications}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.EducationalQualifications && Boolean(formik.errors.EducationalQualifications)}
                            helperText={formik.touched.EducationalQualifications && formik.errors.EducationalQualifications}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Other_Qualifications"
                            label="Other_Qualifications"
                            name='Other_Qualifications'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Other_Qualifications"
                            value={formik.values.Other_Qualifications}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Other_Qualifications && Boolean(formik.errors.Other_Qualifications)}
                            helperText={formik.touched.Other_Qualifications && formik.errors.Other_Qualifications}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Technical_skills"
                            label="Technical_skills"
                            name='Technical_skills'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Technical_skills"
                            value={formik.values.Technical_skills}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Technical_skills && Boolean(formik.errors.Technical_skills)}
                            helperText={formik.touched.Technical_skills && formik.errors.Technical_skills}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Soft_skills"
                            label="Soft_skills"
                            name='Soft_skills'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Soft_skills"
                            value={formik.values.Soft_skills}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Soft_skills && Boolean(formik.errors.Soft_skills)}
                            helperText={formik.touched.Soft_skills && formik.errors.Soft_skills}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="Undergrade_Major"
                            label="Undergrade_Major"
                            name='Undergrade_Major'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="Undergrade_Major"
                            value={formik.values.Undergrade_Major}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.Undergrade_Major && Boolean(formik.errors.Undergrade_Major)}
                            helperText={formik.touched.Undergrade_Major && formik.errors.Undergrade_Major}
                        /></Grid>
                        <Grid item xs={6}><TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary',
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="PreferredJob"
                            label="PreferredJob"
                            name='PreferredJob'
                            InputLabelProps={{
                                shrink: true,
                            }}

                            placeholder="PreferredJob"
                            value={formik.values.PreferredJob}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.PreferredJob && Boolean(formik.errors.PreferredJob)}
                            helperText={formik.touched.PreferredJob && formik.errors.PreferredJob}
                        /></Grid>




                        
                        

                        <Button fullWidth variant="contained" type='submit' >Update</Button>
                {/* </div>   */}
            {/* </Box> */}
        </Grid>
        </>
    )
}

export default UserInfoDashboard

