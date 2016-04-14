import "./items.js";

ItemsIndex = new EasySearch.Index({
  engine: new EasySearch.MongoDB({
    sort: function( searchObject, options ) {
     let sortBy = options.search.props.sortBy


     if(!sortBy){
        return { createdAt: -1 }
     }else{
           if( sortBy.indexOf('Popular') != -1 ) {
             console.log("POPULAR");
             return { commentsCount: -1 }
           }
           if( sortBy.indexOf('Recent') != -1 ) {
             console.log("RECENT");
             return { createdAt: 1, commentsCount: -1}
           }
           if( sortBy.indexOf('Cheap') != -1 ) {
             console.log("PRICE");
             return { price: 1 }
           }
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
        if(categoryFilter.indexOf('Recent') != -1){
          console.log(selector);
            selector.createdAt = -1;
        }
      }
      return selector;
    }
  }),
  collection: Items,
  fields: ['name', 'body', 'username','userId', 'createdAt', 'price'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
