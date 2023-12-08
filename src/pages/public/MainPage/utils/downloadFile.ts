import pdftest from "../../../../assets/pdftest.pdf";

const downloadFile = async (url: string, filename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const blobUrl = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export default downloadFile;

export async function handleDownload(type: "resume" | "cv"): Promise<void> {
  if (type === "resume") await downloadFile(pdftest, "resume_earth");

  if (type === "cv") await downloadFile(pdftest, "cv_earth");
}
