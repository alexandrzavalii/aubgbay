import "./items.js";

ItemsIndex = new EasySearch.Index({
  engine: new EasySearch.MongoDB({
    sort: function( searchObject, options ) {
     let sortBy = options.search.props.sortBy

     if( sortBy == 'Popular' ) {
       console.log("POPULAR");
       return Object.keys( sortBy ).length ? sortBy : { createdAt: -1 }
     } else {
       return { createdAt: -1 }
     }
   },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        categoryFilter = options.search.props.categoryFilter;

      if (_.isArray(categoryFilter) && !_.isEmpty(categoryFilter)) {
        console.log(categoryFilter);
        if(categoryFilter.indexOf('Mine') != -1){
            selector.userId = options.search.userId;
        }

      }
      return selector;
    }
  }),
  collection: Items,
  fields: ['name', 'body', 'username','userId'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
