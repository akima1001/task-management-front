import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const Theme = extendTheme({
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
        p: 0,
        m: 0
      },
      a: {
        color: 'inherit',
        textDecoration: 'none'
      },
      body: {
        maxWidth: '100vw',
        overflowX: 'hidden'
      }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
