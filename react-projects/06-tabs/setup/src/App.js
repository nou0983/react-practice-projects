import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);

      if (!(res.status >= 200 && res.status < 300)) {
        throw new Error();
      }

      const jobs = await res.json();
      setJobs(jobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>{" "}
      </section>
    );
  }

  // You need to make sure you place the following code after if (isLoading) statement
  // to avoid an error as initially jobs is an empty array until fetching data
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button
                key={job.id}
                className={`job-btn ${value === i && 'active-btn' }`}
                onClick={() => {
                  setValue(i);
                }}
              >
                {job.title}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, i) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
