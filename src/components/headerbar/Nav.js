import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogOut from "../../assets/img/icons/LogOut";
import { auth, db, logout } from "../../firebase/firebase";
import AlreadyAcc from "../btns/AlreadyAcc";
import LogoBtn from "../btns/LogoBtn";
import NavBtn from "../btns/NavBtn";
import NoAcc from "../btns/NoAcc";
import SignOut from "../btns/SignOut";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);
  const urlparam = useLocation();
  console.log();
  const urlparampath = urlparam.pathname;
  if (urlparampath === "/") {
    return (
      <nav className="flex items-center w-full px-3 h-14 bg-gray-50">
        <ul className="flex items-center w-full gap-2 m-auto max-w-7xl">
          <li className="mr-auto">
            <Link to="/">
              <LogoBtn />
            </Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/signin">
                  <NavBtn val="Sign in" />
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <NavBtn spcstyling="bg-gray-600 text-white" val="Sign up" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div>{name}</div>
                  </div>
                </Link>
              </li>
              <div className="h-8 w-[1px] bg-gray-600"></div>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={logout}
              >
                <span>Log out</span>
                <div className="w-3">
                  <LogOut />
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
  if (urlparampath === "/signin" || urlparampath === "/reset") {
    return (
      <nav className="flex items-center w-full px-3 h-14 bg-gray-50">
        <ul className="flex items-center w-full gap-2 m-auto max-w-7xl">
          <li className="mr-auto">
            <Link to="/">
              <LogoBtn />
            </Link>
          </li>
          {!user ? (
            <NoAcc />
          ) : (
            <>
              <li>
                <Link to="/dashboard">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div>{name}</div>
                  </div>
                </Link>
              </li>
              <div className="h-8 w-[1px] bg-gray-600"></div>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={logout}
              >
                <span>Log out</span>
                <div className="w-3">
                  <LogOut />
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
  if (urlparampath === "/signup") {
    return (
      <nav className="flex items-center w-full px-3 h-14 bg-gray-50">
        <ul className="flex items-center w-full gap-2 m-auto max-w-7xl">
          <li className="mr-auto">
            <Link to="/">
              <LogoBtn />
            </Link>
          </li>
          {!user ? (
            <AlreadyAcc />
          ) : (
           <SignOut />
          )}
        </ul>
      </nav>
    );
  }
  if (urlparampath === "/dashboard" || urlparampath === "/dashboard/createprojectform") {
    return (
      <nav className="flex items-center w-full px-3 h-14 bg-gray-50">
        <ul className="flex items-center w-full gap-2 m-auto max-w-7xl">
          <li className="mr-auto">
            <Link to="/">
              <LogoBtn />
            </Link>
          </li>
          {!user ? (
            <AlreadyAcc />
          ) : (
            <>
              <li>
                <Link to="/dashboard">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div>{name}</div>
                  </div>
                </Link>
              </li>
              <div className="h-8 w-[1px] bg-gray-600"></div>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={logout}
              >
                <span>Log out</span>
                <div className="w-3">
                  <LogOut />
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
};

export default Nav;
