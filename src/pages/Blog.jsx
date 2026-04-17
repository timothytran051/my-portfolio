function Blog() {
	return (
		<main className="section">
			<h2>My Blog</h2>
			<p>Welcome to my spring break blog.</p>

			<article className="blog-post">
				<h3>Spring Break 2026</h3>

				<img
					src="/my-portfolio/images/PickleballCourt1.jpg"
					alt="Pickleball court"
					className="blog-image"
				/>

				<p>
                    I didn't really get to do much this spring break, so I will talk about my last one. I went to Florida to see my friends who live there, stayed over at his house for the entire time.
                    My other friend came down from South Carolina as well, and the only thing we did was play pickleball and fish for two weeks straight.
				</p>

				<img
					src="/my-portfolio/images/Skyway_West_(North)_Fishing_Pier_SP-12.jpg"
					alt="Fishing pier"
					className="blog-image"
				/>

				<p>
					Getting to see them was a great change of pace, since I haven't seen them in a long time. 
                    I also landed my internship while I was at his house, so that was a nice surprise.
				</p>

				<p>
					It was my first time traveling and flying, and I was alone the entire time but it was still pretty easy to navigate around.
                    I would love to visit again sometime, maybe when I have a reliable income and start my corporate life.
                    I would also love to visit other places like Japan or Korea, that has always been in my bucket list.
				</p>
			</article>
		</main>
	);
}

export default Blog;