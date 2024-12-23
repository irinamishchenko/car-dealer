"use client";
import Link from "next/link";

const ErrorMessage = () => {
  const errorText =
    "Ooops. something went wrong. Try to select another model or year";
  const errorButtonText = "Go to Home page";

  return (
    <div className="w-1/2 m-auto flex flex-col items-center gap-8">
      <p>{errorText}</p>
      <Link href="/">
        <button
          type="button"
          className="text-white bg-slate-400 hover:bg-slate-700 disabled:opacity-25 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {errorButtonText}
        </button>
      </Link>
    </div>
  );
};

export default ErrorMessage;
