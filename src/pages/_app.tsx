import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import "../css/font-awesome.css"
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <div>
      <AnyComponent {...pageProps} />
      <Analytics />
    </div>
  )
}
export default  appWithTranslation(MyApp)

