import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{"margin": 0, "padding": 0}}>
        {children}
      </body>
    </html>
  )
}
