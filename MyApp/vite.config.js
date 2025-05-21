import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()]
})
<system.webServer>
   <staticContent>
      <remove fileExtension=".mjs" /> 
      <mimeMap fileExtension=".mjs" mimeType="text/javascript" />
   </staticContent>
</system.webServer>
