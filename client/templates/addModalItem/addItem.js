var postHooks = {
  onSubmit: function(){
    console.log('submt');
  },
  beginSubmit: function() {
    $(".insertPost").addClass("m-progress");
  },
  endSubmit: function() {
    $(".insertPost").removeClass("m-progress");
  },
   onSuccess: function(insert, result) {
    console.log("successs");
     $('#postModal').modal('toggle');
  }
}

AutoForm.addHooks('insertPostForm', postHooks);
