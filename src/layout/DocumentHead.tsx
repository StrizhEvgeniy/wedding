import {FC} from "react";

import { Helmet } from 'react-helmet'

export const DocumentHead: FC = () => (
  <Helmet>
    <meta name='robots' content='noindex'/>
    {/*<link rel='icon' type='image/svg+xml' href={transitLogo} />*/}
    <link rel='preconnect' href='https://fonts.googleapis.com'/>
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin=''/>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Gabriela&display=swap"
      rel="stylesheet"/>
  </Helmet>
)