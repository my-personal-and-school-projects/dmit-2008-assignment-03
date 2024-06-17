import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



export default function CreateJobForm({ jobs, setJobs }) {
  return <form >
    <Typography
      variant="h4"
      sx={{ paddingTop: 2, paddingBottom: 2}}
    >
      Post a New Job 
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Job Title"
          fullWidth
          sx={{width: '80%'}}
        />
      </Grid>
      <Grid item xs={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date Posted"
          defaultValue={dayjs(Date.now())}
          sx={{width: '80%'}}  
        />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Company Name"
          fullWidth
          sx={{width: '80%'}}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="job-type-select">Job Type</InputLabel>
          <Select
              labelId="job-type-select"
              label="Job Type"
              sx={{width: '80%'}}
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
          sx={{width: '80%'}}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          fullWidth
          sx={{width: '90%'}}
          multiline
          rows={2}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Qualifications"
          fullWidth
          sx={{width: '90%'}}
          multiline
          rows={2}
        />
      </Grid>
      <Grid item xs={12}>

        <Button variant="contained" type="submit">Submit new Job</Button>
      </Grid>
    </Grid>
  </form>
} 
