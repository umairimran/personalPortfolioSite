import Link from "next/link";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

// Define the Footer component.
const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME}</b> | All rights reserved
      </small>
    </footer>
  );
};

// Export the Footer component.
export default Footer;
