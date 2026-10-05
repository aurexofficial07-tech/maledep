import { useEffect } from "react";

const DESTINATION = "https://www.instagram.com/mandeep.xdev/";

export default function App() {
  useEffect(() => {
    window.location.replace(DESTINATION);
  }, []);

  return <div className="min-h-screen bg-white" />;
}
