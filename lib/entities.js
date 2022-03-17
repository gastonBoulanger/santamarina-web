export const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}`;

export const LINK_FIELDS = `
name
text
link
icon
image {
  title
  description
  url
}`;

export const SALE_ITEM_FIELDS = `
name
title
description
price
discount
`
export const SUBMENU_FIELDS = `
name
title
linksCollection (limit: 10){
  items{
    ${LINK_FIELDS}
  }
}
saleItemsCollection (limit: 10){
  items{
    ${SALE_ITEM_FIELDS}
  }
}
`

export const MENU_FIELDS = `
name
menuItemsCollection (limit: 10){
  items{
    ${SUBMENU_FIELDS}
  }
}
buttonsCollection (limit: 10){
  items {
    ${LINK_FIELDS}
  }
}
`