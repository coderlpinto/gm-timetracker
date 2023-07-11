import React from "react";

function Footer() {
  return (
    <footer class="bg-white rounded-lg">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-md text-gray-500 md:text-center dark:text-gray-400 mt-64">
          © 2023{" "}
          <a href="https://globalmed.com/" class="hover:underline">
            GlobalMed™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
