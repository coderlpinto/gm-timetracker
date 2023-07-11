import { Link } from "react-router-dom";
import companyLogo from '../images/globalmedlogo.webp';

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt="GlobalMed logo"
          className="h-24 w-34"
          src={companyLogo}
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-lg text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-large text-green-600 hover:text-green-800"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
