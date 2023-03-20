import Script from 'next/script'
import { useRouter } from 'next/router'

const EmbedTemplate: React.FC = () => {
  const { basePath } = useRouter()
  return (
    <>
      <div id='widgetContainer'></div>
      <Script src={`${basePath}/_next/static/widget/viteWidget.js`} />
    </>
  )
}

export default EmbedTemplate
