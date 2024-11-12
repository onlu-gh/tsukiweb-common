import {FC} from "react"

const SvgFilters: FC = () => (
	<svg x="0px" y="0px" colorInterpolationFilters="sRGB" style={{display:"none"}}>
		<defs>
			<filter id="pixelate" x="0%" y="0%" width="100%" height="100%">
				<feGaussianBlur stdDeviation="0.5" in="SourceGraphic" result="smoothed"/>
				<feImage width="0.2cqw" height="0.2cqw"
						 href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC"
						 result="displacement-map"/>
				<feTile in="displacement-map" result="pixelate-map"/>
				<feDisplacementMap in="smoothed" in2="pixelate-map" xChannelSelector="R" yChannelSelector="G"
								   scale="13"
								   result="pre-final"/>
				<feComposite operator="in" in2="SourceGraphic"/>
			</filter>
		</defs>
	</svg>
)

export default SvgFilters;