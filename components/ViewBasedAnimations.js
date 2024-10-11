import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ViewBasedAnimations = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<>
			<div style={{ height: "150vh" }} />
			<motion.div
				style={{ height: "100vh", backgroundColor: "black" }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
			/>
			<div
				ref={ref}
				style={{
					height: "100vh",
					backgroundColor: isInView ? "red" : "blue",
					color: isInView ? "blue" : "red",
					transition: "1s background",
				}}
			/>
		</>
	);
};

export default ViewBasedAnimations;
