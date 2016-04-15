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
        own = options.search.props.own;
        category = options.search.props.category;

        if(own){
            selector.userId = options.search.userId;
        }
        if(category){
          console.log(category);
          selector.category = category;
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
