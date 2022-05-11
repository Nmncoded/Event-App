import { Link,useHistory } from "react-router-dom";
import { MdHomeFilled, MdSettingsInputAntenna } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TiCompass } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import { logout } from "../firebase/user";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/action";

function Header() {
	let history = useHistory();
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logoutUser());
		logout();
		history.push("/");
	}

	return (
		<header className="main-header">
			<div className="container">
				<section className="header flex-between-center">
					<div className="logo flex-center-center">
						<Link to="/" exact>
							Event-App
						</Link>
					</div>
					<div className="searchbar-icons flex-between-center">
						<div className="searchbar flex-between-center">
							<BiSearch className="icon" />
							<input type="text" name="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Search" />
						</div>
						<div className="nav flex-between-center">
							<div>
								<Link to="/">
									<MdHomeFilled className="margin-right" />
								</Link>
							</div>
							<div>
								<RiMessengerLine className="margin-right" />
							</div>
							<div>
								<Link to='/add-image-description' >
								<BiMessageSquareAdd className="margin-right" />
								</Link>
							</div>
							<div>
								<TiCompass className="margin-right" />
							</div>
							<div>
								<FiHeart className="margin-right" />
							</div>
							<button className="logout-btn" onClick={logoutHandler}>Log out</button>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
}

export default Header;
