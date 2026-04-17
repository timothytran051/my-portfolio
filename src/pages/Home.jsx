function Home() {
	return (
		<main>
			<section className="hero">
				<h1>Hi, I’m Timothy Tran</h1>
				<p>Software Engineering student focused on backend, cloud, and full-stack development</p>
			</section>

			<section id="about" className="section">
				<h2>About Me</h2>
				<p>
					I’m a Software Engineering student at California State University San Marcos.
					I enjoy building practical applications using Python, FastAPI, React, databases,
					and cloud tools. My interests include backend systems, APIs, and scalable web apps.
				</p>
			</section>

			<section id="projects" className="section">
				<h2>Projects</h2>
				<div className="projects-grid">
					<ProjectCard
						title="AI Calendar Assistant"
						desc="A FastAPI-based assistant that uses Microsoft Graph and MongoDB to manage calendar events with CRUD functionality."
					/>
					<ProjectCard
						title="Cloud Task Management System"
						desc="A task management backend using FastAPI and PostgreSQL with authentication, CRUD operations, and cloud deployment concepts."
					/>
					<ProjectCard
						title="Portfolio Website"
						desc="A React portfolio website with routing, responsive design, and a dedicated blog page deployed on GitHub Pages."
					/>
				</div>
			</section>

			<section id="contact" className="section">
				<h2>Contact</h2>
				<p>Email: timothytran051@gmail.com</p>
				<p>GitHub: github.com/timothytran051</p>
			</section>
		</main>
	);
}

function ProjectCard({ title, desc }) {
	return (
		<div className="project-card">
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
}

export default Home;