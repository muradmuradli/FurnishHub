import PageHero from "@/components/PageHero";
import React from "react";

const About = () => {
	return (
		<div>
			<PageHero title="About" />
			<div>
				<img src="/assets/hero-bcg.jpeg" alt="about" />
				<article>
					<div>
						<h2>Our Story</h2>
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
						itaque dolores! Quis quas minus laboriosam sed accusamus veniam sit
						ab consectetur rerum, ea sint quod quo inventore eos tenetur
						incidunt optio laudantium. Nam dignissimos voluptates ratione, quod
						iure consequatur facere.
					</p>
				</article>
			</div>
		</div>
	);
};

export default About;
