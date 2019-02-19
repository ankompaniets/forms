import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';

const Head = (props) => (
  <NextHead>
  	<title>{props.title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />    
    <meta name="description" content={props.description || defaultDescription} />    
    <link rel="icon" href="/static/favicon.ico" />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string
}

export default Head;