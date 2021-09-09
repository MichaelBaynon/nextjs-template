import PageLayout from '../components/PageLayout'
import '../style/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}
