import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import "../styles/EventScreenStyle.css";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { addEventUsers } from "../actions/FormActions";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  branch: Yup.string().required("Branch is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  graduationYear: Yup.number()
    .min(1900, "Year should be after 1900")
    .required("Graduation Year is required"),
  hallOfResidence: Yup.string().required("Hall of Residence is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
});

const branches = [
  "CSE",
  "IT",
  "ETC",
  "EEE",
  "EE",
  "ME",
  "PE",
  "CHE",
  "CE",
  "Int. MSc.",
  "B.Arch",
];

const yog = ["2024", "2025", "2026", "2027"];

const NewEventForm = () => {
  const dispatch = useDispatch();
  const formInsertData = useSelector((state) => state.formUpload);
  const navigate = useNavigate();
  const { error, loading, eventUsers } = formInsertData;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      hallOfResidence: "",
      branch: "",
      graduationYear: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(addEventUsers(values));

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data has been successfully submitted.",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while submitting the data.",
        });
      }
    },
  });

  return (
    <div className="NewEventForm">
      {loading === true ? (
        <ClipLoader className="loader" color="blue" />
      ) : (
        <form container maxWidth="sm" onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="branch"
                name="branch"
                required
                label="Branch"
                variant="outlined"
                select
                value={formik.values.branch}
                onChange={formik.handleChange}
                error={formik.touched.branch && Boolean(formik.errors.branch)}
                helperText={formik.touched.branch && formik.errors.branch}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#fff" } }}
              >
                {branches.map((branch) => (
                  <MenuItem key={branch} value={branch}>
                    {branch}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="graduationYear"
                name="graduationYear"
                required
                label="Year of Graduation"
                variant="outlined"
                select
                value={formik.values.graduationYear}
                onChange={formik.handleChange}
                error={
                  formik.touched.graduationYear &&
                  Boolean(formik.errors.graduationYear)
                }
                helperText={
                  formik.touched.graduationYear && formik.errors.graduationYear
                }
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#fff" } }}
              >
                {yog.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="hallOfResidence"
                name="hallOfResidence"
                label="Hall of Residence"
                variant="outlined"
                value={formik.values.hallOfResidence}
                onChange={formik.handleChange}
                error={
                  formik.touched.hallOfResidence &&
                  Boolean(formik.errors.hallOfResidence)
                }
                helperText={
                  formik.touched.hallOfResidence &&
                  formik.errors.hallOfResidence
                }
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default NewEventForm;
