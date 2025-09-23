import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import projectsData from "../../projectsData";
import ProjectNav from "../../components/ProjectNav";
import ProjectPageHeader from "../../components/ProjectPageHeader";

const Moment: React.FC = () => {
	// //brings to top of page
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const momentProject = projectsData.find(
		(project) => project.title === "Moment Energy",
	);

	if (!momentProject) {
		return <div>No project found</div>;
	}
	return (
		<>
			<section className="bg-custom-background-gray font-space">
				<ProjectPageHeader project={momentProject} />

				<section className="grid grid-cols-12 px-4 md:py-20 lg:px-20">
					<div className="col-span-full row-start-1 my-20 md:col-span-5 md:mt-10 md:flex md:flex-col md:justify-center">
						<h3 className="mb-5 text-2xl">Overview</h3>
						<p>
							At Moment, I worked on a <strong>cloud portal frontend and backend API</strong>.
							<br></br>
							<br></br>
							This experience broadened my expertise in frontend and backend development, giving my a hands-on experience with an impactful product. This cloud portal will be used for the monitoring and dashboarding of Moment's energy storage systems, with users ranging from engineers to customers.
						</p>
					</div>
				</section>

				<section className="grid grid-cols-12 px-4 md:py-20 lg:px-20">
					<div className="col-span-full row-start-1 my-20 md:col-span-5 md:mt-10 md:flex md:flex-col md:justify-center">
						<h3 className="mb-5 text-2xl">General Contributions</h3>
						<p className="mb-6">
							On the <strong>frontend</strong>, I contributed to building and improving
							data visualization components and user workflows in our React and MUI-based
							dashboard. My work included implementing charts that displayed live telemetry
							data in a clear and interactive way, integrating them with state management
							and backend APIs so they updated in real time. I also developed multi-step
							forms and other interface elements that supported tasks like provisioning and
							file uploads, making these workflows smoother and more reliable for end users.
							In addition to larger features, I handled day-to-day bug fixes and usability
							improvements that enhanced the overall experience of the portal.
						</p>
						<h3 className="mb-5 text-2xl">Key Highlights</h3>
						<p className="mb-6">
							A major focus of my work was migrating and optimizing our live data
							endpoints. I helped transition legacy APIs to a more efficient Node.js
							service, improving the time complexity of data retrieval and offloading
							heavy aggregations to AWS Athena. This reduced backend load while enabling
							faster, more scalable access to high-frequency telemetry for the frontend
							dashboards.
						</p>
						<p>
							I also worked on cloud-level fault detection. My approach involved
							monitoring live data streams over MQTT topics and applying{" "}
							<strong>Exponential Moving Average (EMA)</strong> calculations to flag
							anomalies. To make this responsive at scale, I combined service-level
							caching with database lookups for quick state tracking. Fault data was
							ingested into S3 as Parquet files and made queryable through Athena,
							allowing alerts to be retrieved efficiently by the frontend through a
							polling API. This end-to-end pipeline provided engineers with timely,
							noise-reduced alerts that improved system reliability and monitoring.
						</p>
					</div>
				</section>
				<section className="px-4 lg:px-20 ">
					<h3 className="mb-5 text-2xl">Reflection</h3>
					<p className="mb-20 md:w-3/4 lg:w-1/2">
						My co-op at Moment Energy has been an incredibly rewarding experience that allowed me to grow both technically and professionally. Working on a product with real-world environmental impact gave deeper meaning to the tasks I took on, and I was able to contribute to features that supported the internal tools used to manage and monitor energy systems.
						<br>
						</br>
						<br>
						</br>
						Beyond technical growth, this experience helped me develop a stronger sense of ownership over my work. I was trusted to handle key parts of the development process, from implementation and testing to review. I also gained insight into how small changes can impact the overall user experience and learned the importance of writing clean, maintainable code in a collaborative environment. Overall, this co-op gives me a solid foundation for future roles and reaffirmed my interest in building tools that make a tangible difference.
					</p>
				</section>

				<ProjectNav projectsData={projectsData} />
			</section>
		</>
	);
};

export default Moment;
