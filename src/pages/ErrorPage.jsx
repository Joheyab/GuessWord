import { NavLink, useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className=" flex flex-col justify-center text-center items-center min-h-screen">
      <h1 className=" font-bold text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className=" opacity-40">{error.statusText || error.message}</i>
      </p>
      <li className=" list-none text-white mt-4">
        <NavLink to="/" className="py-2 px-3 bg-black w-32 cursor-pointer rounded-md">
        Back Home!
        </NavLink>
      </li>
    </div>
  );
}