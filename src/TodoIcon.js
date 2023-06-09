import { MdCheckCircleOutline as Check } from "react-icons/md";
import { MdHighlightOff as Delete } from "react-icons/md";
import './TodoIcon.css';

const iconTypes = {
	"check" : (color) => <Check className="Icon-svg" fill={color} />,
	"delete" : (color) => <Delete className="Icon-svg" fill={color} />
}

function TodoIcon({ type, color, onClick }) {
	return (
		<span
			className={`Icon-container Icon-container-${type}`}
			onClick={onClick}
		>
		
		{iconTypes[type](color)}

		</span>
	)
}

export { TodoIcon };