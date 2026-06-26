export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Me
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Passionate Web Developer & Computer Science Undergraduate
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
              alt="Profile"
              className="rounded-2xl shadow-lg w-80 h-96 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Hello, I'm Sudhir 👋
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              I'm a Computer Science undergraduate with a strong interest in
              full-stack web development and software engineering. I enjoy
              building responsive, user-friendly web applications using modern
              technologies.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              My experience includes working with React, Node.js, Firebase,
              NestJS, PostgreSQL, Java, and RESTful APIs. I enjoy solving
              real-world problems through technology and continuously learning
              new frameworks and tools.
            </p>

            <p className="text-gray-600 leading-8">
              Currently, I'm focused on expanding my knowledge in cloud
              computing, artificial intelligence, and scalable application
              development while building projects that strengthen my practical
              experience.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "NestJS",
                  "Firebase",
                  "PostgreSQL",
                  "Java",
                  "Tailwind CSS",
                  "Git",
                  "REST API",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Download CV
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}