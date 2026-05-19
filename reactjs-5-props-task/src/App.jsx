import React from "react";
import Cards from "./components/Cards";

const App = () => {
  const users = [
    {
      salary: "$32/hr",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Ali Khan",
      role: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript", "+2"],
      bio: "Passionate frontend developer who loves building modern websites.",
    },

    {
      salary: "$40/hr",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Sara Ahmed",
      role: "UI/UX Designer",
      skills: ["Figma", "UI", "UX", "+3"],
      bio: "Creative UI/UX designer focused on clean and user-friendly designs.",
    },

    {
      salary: "$28/hr",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Usman Tariq",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB", "+1"],
      bio: "Backend developer experienced in APIs and database management.",
    },

    {
      salary: "$35/hr",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Ayesha Noor",
      role: "Graphic Designer",
      skills: ["Photoshop", "Illustrator", "Branding", "+2"],
      bio: "Graphic designer with strong branding and creative design skills.",
    },

    {
      salary: "$50/hr",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Bilal Hassan",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "SQL", "+4"],
      bio: "Full stack engineer building scalable web applications.",
    },

    {
      salary: "$22/hr",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Hina Malik",
      role: "Content Writer",
      skills: ["SEO", "Blogs", "Research", "+1"],
      bio: "Content writer creating engaging and SEO-friendly articles.",
    },

    {
      salary: "$45/hr",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Zain Raza",
      role: "Mobile App Developer",
      skills: ["Flutter", "Dart", "Firebase", "+2"],
      bio: "Mobile developer passionate about smooth user experiences.",
    },

    {
      salary: "$30/hr",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Maham Ali",
      role: "Social Media Manager",
      skills: ["Marketing", "Instagram", "Ads", "+3"],
      bio: "Social media expert helping brands grow online.",
    },

    {
      salary: "$38/hr",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Hamza Sheikh",
      role: "DevOps Engineer",
      skills: ["AWS", "Docker", "Linux", "+2"],
      bio: "DevOps engineer automating deployments and cloud infrastructure.",
    },

    {
      salary: "$27/hr",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      name: "Iqra Fatima",
      role: "Data Analyst",
      skills: ["Python", "Power BI", "Excel", "+1"],
      bio: "Data analyst transforming raw data into meaningful insights.",
    },

    {
      salary: "$60/hr",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Danish Ali",
      role: "AI Engineer",
      skills: ["Machine Learning", "Python", "AI", "+4"],
      bio: "AI engineer building intelligent systems and automation tools.",
    },

    {
      salary: "$26/hr",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Laiba Khan",
      role: "HR Manager",
      skills: ["Hiring", "Communication", "Management", "+2"],
      bio: "HR manager focused on team growth and company culture.",
    },
  ];

  return (
    <div className="cards">
      {users.map((elem, idx) => {
        return (
          <div key={idx}>
            <Cards
              salary={elem.salary}
              image={elem.image}
              name={elem.name}
              role={elem.role}
              skills={elem.skills}
              bio={elem.bio}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
