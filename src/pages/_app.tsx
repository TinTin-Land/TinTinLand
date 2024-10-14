import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next'
import "../css/font-awesome.css"
import { Analytics } from '@vercel/analytics/react';
import { useTranslation } from 'next-i18next';
import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  const { i18n } = useTranslation();
  
  return (
    <div key={i18n.language}>
      <ErrorBoundary>
        <AnyComponent {...pageProps} />
        <Analytics />
      </ErrorBoundary>
    </div>
  )
}

export default appWithTranslation(MyApp)
