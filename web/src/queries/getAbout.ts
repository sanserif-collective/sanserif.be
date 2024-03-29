import { gql } from 'graphql-request';
import { strapi } from 'strapi';
import type { About } from 'types/routes/about';

export const getAbout = () =>
  strapi.request<About.Response>(gql`
    query About {
      about {
        data {
          attributes {
            header {
              title
              subtitle
              text
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
            services {
              title
            }
            team {
              title
              subtitle
            }
            next {
              link {
                name
                route
              }
              caption
            }
            meta {
              title
              description
              thumbnail {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
      services {
        data {
          attributes {
            name
            subservices {
              name
            }
          }
        }
      }
      members {
        data {
          attributes {
            name
            role
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
