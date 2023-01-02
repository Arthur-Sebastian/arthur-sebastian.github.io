import {useRef, RefObject, useEffect, useState} from "react";

function useIsVisible(ref: RefObject<HTMLElement>) {
	const observerRef = useRef<IntersectionObserver>();
	const [isVisible, setVisible] = useState(false);

	useEffect(() => {
		// create an instersection observer, run it
		observerRef.current = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
		});
		if (ref.current) {
			observerRef.current?.observe(ref.current);
		}

		return (() => {
			observerRef.current?.disconnect();
		});
	}, [ref]);

	return isVisible;
}

export {
	useIsVisible
};
