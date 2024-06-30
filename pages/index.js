import { useState } from "react";

import Container from "@mui/material/Container";

import NavBar from "@/components/NavBar";
import CreateJobForm from "@/components/CreateJobForm";
import RecentlyCreatedJobList from "@/components/RecentlyCreatedJobList";

const existingJobs = [
  {
    id: 1,
    title: "Database Administrator",
    date_posted: "2024-04-19",
    company: "DataTech Enterprises",
    job_type: "Full-time",
    location: "Seattle, WA",
    description:
      "We're seeking a skilled Database Administrator to manage and optimize our organization's databases for performance and reliability.",
    qualifications: "Strong problem-solving and troubleshooting skills",
  },
  {
    id: 2,
    title: "AI Product Manager",
    date_posted: "2024-04-18",
    company: "AI Innovations Ltd.",
    job_type: "Full-time",
    location: "San Francisco, CA",
    description:
      "We're looking for an experienced AI Product Manager to drive the development and commercialization of our AI-based products.",
    qualifications: "Excellent communication and leadership skills",
  },
];

export default function Home() {
  //Initialize the state with the existing job postings
  const [jobs, setJobs] = useState(existingJobs);

  //Create the new job
  const createNewJob = (newJob) => {
    //Generate the ID for the new job
    let newJobId =
      jobs.length > 0 ? Math.max(...jobs.map((job) => job.id)) + 1 : 1;

    //Create the new job with ID
    const newJobPosting = {
      id: newJobId,
      ...newJob,
    };
    console.log(newJobPosting);
    setJobs((existingJobs) => [newJobPosting, ...existingJobs]);
  };

  return (
    <main>
      <NavBar />
      <Container>
        <CreateJobForm setJobs={createNewJob} />
        <RecentlyCreatedJobList jobs={jobs} />
      </Container>
    </main>
  );
}
