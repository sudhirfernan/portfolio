export default function Projects() {
  const projects = [
    {
      title: "Smart Restaurant Booking System",
      description:
        "A full-stack restaurant reservation system with table booking, meal pre-ordering, Stripe payments, and a customer rewards system.",
      tech: ["React", "Node.js", "Firebase", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "TaskFlow RESTful API",
      description:
        "A secure task management REST API with authentication, role-based authorization, PostgreSQL, and TypeORM.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "JWT"],
      github: "#",
      demo: "#",
    },
    {
      title: "Bookstore RESTful API",
      description:
        "RESTful API for managing books, authors, customers, shopping carts, and orders using Java JAX-RS.",
      tech: ["Java", "JAX-RS", "JSON", "Tomcat"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing my projects, skills, and contact information.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            My Projects
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Some of the projects I've worked on.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-6 leading-7">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}