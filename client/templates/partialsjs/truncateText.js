Template.registerHelper("truncateText", function(text, length){
  var newText = text.substring(0, length);

  newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" ")))

  if(text.length > length)
  newText = newText+'...';
  return new Spacebars.SafeString(newText);
});
