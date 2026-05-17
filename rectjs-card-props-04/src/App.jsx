import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$45/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$60/hr",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Support Associate",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: "$35/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$70/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      payPerHour: "$40/hr",
      location: "Faisalabad, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "6 days ago",
      post: "iOS App Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      payPerHour: "$75/hr",
      location: "Rawalpindi, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      datePosted: "4 weeks ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$38/hr",
      location: "Multan, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: "$55/hr",
      location: "Peshawar, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      payPerHour: "$50/hr",
      location: "Hyderabad, Pakistan",
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "10 weeks ago",
      post: "Mobile App Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      payPerHour: "$65/hr",
      location: "Quetta, Pakistan",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          (
          <Card
            company={elem.companyName}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            data={elem.datePosted}
            location={elem.location}
            pay={elem.pay}
            logo={elem.brandLogo}
          />
        );
        </div>
      })}
    </div>
  );
};

export default App;
