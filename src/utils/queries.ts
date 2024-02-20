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
