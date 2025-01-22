import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://1d187a93bdb3709f163a1247081cbc6c@o4508682889854976.ingest.us.sentry.io/4508682916200448",
  integrations: [],
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
