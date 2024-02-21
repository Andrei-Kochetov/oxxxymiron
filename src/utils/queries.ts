export const queryTourItems = `query tourItemCollectionQuery {
  tourItemCollection {
    items {
      sys {
        id
      }
      date
      location
      clubName
    }
  }
}`;

export const queryTrackItems = `query trackItemCollectionQuery {
  trackItemCollection {
    items {
          sys {
      id
    }
    track{
      url
    }
    image{
      url
    }
    trackName
    releaseDate
    }
  }
}`;

export const queryNewsItems = `query newsItemCollectionQuery {
  newsItemCollection {
    items {
      sys {
        id
      }
    image {
      url
    }
    title
    }
  }
}`;
