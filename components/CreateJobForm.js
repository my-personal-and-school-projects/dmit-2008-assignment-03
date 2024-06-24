import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ErrorMessage from "./ErrorMessage";

import { useState } from "react";

//Create array to contain the error messages to passonto the ErrorMessage component props
let errorList = [];

export default function CreateJobForm({ jobs, setJobs }) {
  const [displayError, setDisplayError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [datePosted, setDatePosted] = useState(dayjs().add(1, "day"));

  /**
   * handle the form submission
   * @param {*} e
   * Handle the form submission validating all fields and creating the jobs upon success
   */
  function handleSubmit(e) {
    e.preventDefault();

    //Validate the fields
    validateFormFields();

    //Display errors
    if (errorList.length > 0) {
      setDisplayError(true); //set visibility for the ErrorMessage element
      setErrorMessages(errorList);
    } else {
      //Upon success create the new job posting and its new ID
      setDisplayError(false);
      let newJobPostingId =
        jobs.length > 0 ? Math.max(...jobs.map((job) => job.id)) + 1 : 1;

      const newJobPosting = {
        id: newJobPostingId,
        title: title,
        company: companyName,
        job_type: jobType,
        location: location,
        description: jobDescription,
        qualifications: qualifications,
        date_posted: datePosted.format("YYYY-MM-DD"),
      };

      console.log(newJobPosting);
      setJobs([newJobPosting, ...jobs]);

      //Reset the fields
      resetFormFields();
    }
  }

  /**
   * Validate all form fields and log the values for verification (TODO remove verification upon completion)
   */
  function validateFormFields() {
    errorList = [];
    if (title.trim() === "") {
      errorList.push("Title must be at least 10 characters");
    } else {
      console.log({ title });
    }
    if (companyName.trim() === "") {
      errorList.push("Company Name is required");
    } else {
      console.log({ companyName });
    }
    if (jobDescription.trim() === "") {
      errorList.push("Description is required");
    } else {
      console.log({ jobDescription });
    }
    if (location.trim() === "") {
      errorList.push("Location is required");
    } else {
      console.log({ location });
    }
    if (jobType === "") {
      errorList.push(
        "Type must be one of the following: Full-time, Part-time, Contract"
      );
    } else {
      console.log({ jobType });
    }
    if (qualifications.trim() === "") {
      errorList.push("Qualifications is required");
    } else {
      console.log({ qualifications });
    }
    if (datePosted.isBefore(dayjs().add(1, "day"))) {
      errorList.push("Date Posted must be in the future");
    } else {
      console.log(datePosted.format("YYYY-MM-DD"));
    }
  }

  /**
   * Reset all fields
   */
  function resetFormFields() {
    setTitle("");
    setCompanyName("");
    setJobDescription("");
    setLocation("");
    setJobType("");
    setQualifications("");
    setDatePosted(dayjs(Date.now()).add(1, "day"));
    setDisplayError(false);
    setErrorMessages([]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ paddingTop: 2, paddingBottom: 2 }}>
        Post a New Job
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Job Title"
            fullWidth
            sx={{ width: "80%" }}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Posted"
              defaultValue={dayjs(Date.now())}
              sx={{ width: "80%" }}
              value={datePosted}
              onChange={(newDate) => setDatePosted(newDate)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Company Name"
            fullWidth
            sx={{ width: "80%" }}
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="job-type-select">Job Type</InputLabel>
            <Select
              labelId="job-type-select"
              label="Job Type"
              sx={{ width: "80%" }}
              value={jobType}
              onChange={(e) => {
                setJobType(e.target.value);
              }}
            >
              <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
              <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
              <MenuItem value={"Contract"}>Contract</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Location"
            fullWidth
            sx={{ width: "80%" }}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            fullWidth
            sx={{ width: "90%" }}
            multiline
            rows={2}
            value={jobDescription}
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Qualifications"
            fullWidth
            sx={{ width: "90%" }}
            multiline
            rows={2}
            value={qualifications}
            onChange={(e) => {
              setQualifications(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Submit new Job
          </Button>
        </Grid>
        {/* Add ErrorMessage component to display the errors */}
        {displayError && (
          <Grid item xs={12}>
            <ErrorMessage show={displayError} errorMessages={errorMessages} />
          </Grid>
        )}
      </Grid>
    </form>
  );
}
