import "./items.js";

ItemsIndex = new EasySearch.Index({
  engine: new EasySearch.MongoDB({
    sort: function( searchObject, options ) {
     let sortBy = options.search.props.sortBy
     return {createdAt: -1}
   },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        own = options.search.props.own;
        category = options.search.props.category; // electronics, clothing,books

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
    limit: 6
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});
