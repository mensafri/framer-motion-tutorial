import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollAnimations = () => {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress);

	const background = useTransform(
		scrollYProgress,
		[0, 0.25, 0.5, 0.75, 1],
		["red", "orange", "yellow", "green", "blue"],
	);

	return (
		<div>
			<motion.div
				style={{
					backgroundColor: background,
					transformOrigin: "left",
					position: "sticky",
					top: 0,
					left: 0,
					width: "100%",
					height: "20px",
					scaleX: scaleX,
				}}
			/>
			<div style={{ maxWidth: "700px", margin: "auto", padding: "1.2rem" }}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum voluptatibus, quisquam. Doloremque, voluptatibus.
					Voluptatum, quisquam. Nostrum voluptatibus, quisquam. Doloremque,
					voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus, quisquam.
					Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum voluptatibus,
					quisquam. Doloremque, voluptatibus. Voluptatum, quisquam. Nostrum
					voluptatibus, quisquam. Doloremque, voluptatibus. Voluptatum,
					quisquam. Nostrum
				</p>
			</div>
		</div>
	);
};

export default ScrollAnimations;
