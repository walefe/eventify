import { memo } from 'react';

import { Helmet } from 'react-helmet-async';

export type MetaTagsProps = Partial<{
  title: string;
  description: string;
  canonical: string;
  image: string;
}>;

const MetaTags = (props: MetaTagsProps) => {
  const {
    title,
    description = 'Eventos Digitais para sua Empresa.',
    canonical,
    image = 'https://www.propernoun.co/static/images/proper-noun-social.png',
  } = props;

  const pageTitle = title ? `${title} | Eventify` : 'Eventify';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta
        property="og:site_name"
        content="Eventify - Plataforma de Eventos"
      />
      <meta property="og:url" content={`${canonical}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="eventify" />
      <meta name="twitter:creator" content="XCode Tecnologia" />
      <meta property="og:image" content={image} />
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default memo(MetaTags);
