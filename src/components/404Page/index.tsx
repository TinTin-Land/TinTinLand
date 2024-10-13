import React from "react";
import Link from "next/link";
import Head from "../head";
import Header from "../header";

const Page404 = () => {
  return (
    <>
      <Head title="404 - Page Not Found" />
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go back to homepage
        </Link>
      </main>
    </>
  );
};

export default Page404;
