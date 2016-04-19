Items = new Meteor.Collection('items');

Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images",{transformWrite: imageMinify})],
  filter: {
    maxSize: 10485760, // in bytes
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png','jpg']
    },
    onInvalid: function (message) {
      if (Meteor.isClient) {
        alert(message);
      } else {
        console.log(message);
      }
    },

  }
});


Items.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

Images.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  download: function(){
    return true;
  },
  fetch: null
});

var imageMinify = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).resize('500', '500').stream().pipe(writeStream);
};


Items.attachSchema(new SimpleSchema({
    name: {
      type: String,
       max: 100
    },
    price: {
      type: Number,
      decimal: true
    },
    body: {
      type: String,
      max: 500
    },
    category: {
           type: String,
           allowedValues: ['books', 'electronics', 'clothing','other'],
               autoform: {
                 options: [
                   {label: "books", value: "books"},
                   {label: "electronics", value: "electronics"},
                   {label: "clothing", value: "clothing"},
                   {label: "other", value: "other"}
                 ]
               }
    },
    images: {
      type: [String],
      optional:true,
    },
    "images.$": {
            autoform: {
              afFieldInput: {
                  type: "fileUpload",
                  collection: "Images",

                }
              }
      },
    link:{
      type: String,
      autoValue: function(){
         if (this.isInsert && (!this.isSet || this.value.length === 0))
        return Meteor.user().services.facebook.link
      }
    },
    userId: {
      type: String,
      autoValue: function(){
         if (this.isInsert && (!this.isSet || this.value.length === 0))
        return Meteor.userId()
      }
    },
    username:{
      type: String,
      autoValue: function(){
         if (this.isInsert && (!this.isSet || this.value.length === 0))
        return Meteor.user().username || Meteor.user().profile.name
      }
    },
    createdAt: {
      type: Date,
      autoValue: function(){
         if (this.isInsert && (!this.isSet || this.value.length === 0))
        return new Date()
      }
    },
    tags: {
      type: [String],
      optional: true,
    },
    commentsCount: {
      type: Number,
      optional: true,
      defaultValue: 0
    }
}));
