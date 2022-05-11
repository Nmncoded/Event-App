import { connect } from "react-redux";
import { updateAllUsers } from "../redux/action";

function MainUi(props) {
	const { allUsers, dispatch, userInfo } = props;

	const handleEventRegister = () => {
		let data = !allUsers ? [userInfo] : allUsers.concat(userInfo)
		dispatch(updateAllUsers(data))
	}

	return (
		<section className="container" >
			<button onClick={handleEventRegister} className="Main-ui" >Register for Event</button>
		</section>
	)
}

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(MainUi);