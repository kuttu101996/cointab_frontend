import React from "react";

const DownloadExcelButton = ({ userId, posts }) => {
  const downloadCSV = () => {
    if (!posts || posts.length === 0) {
      console.warn("No posts to download");
      return;
    }

    const csvContent = [
      "Title,Body",
      ...posts.map((post) => `"${post.title}","${post.body}"`),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `user_${userId}_posts.csv`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={downloadCSV}
      className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      Download In Excel
    </button>
  );
};

export default DownloadExcelButton;
