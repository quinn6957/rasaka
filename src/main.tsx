
import { createRoot } from "react-dom/client";
import "./index.css";

//createRoot(document.getElementById("root")!).render(<App />);
// make routes to PrivacyPolicy and TermsOfUse work
// e.g. /privacy and /terms
import AppRouter from "./AppRouter.tsx";
createRoot(document.getElementById("root")!).render(<AppRouter />);