// eslint-disable-next-line prefer-destructuring
const GA_TRACKING_ID = process.env.GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    // eslint-disable-next-line camelcase
    page_location: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    // eslint-disable-next-line camelcase
    event_category: category,
    // eslint-disable-next-line camelcase
    event_label: label,
    value
  })
}
