// We have implemented a function wrap(value) that takes a value of arbitrary type 
// and wraps it in a new JavaScript Object or 
// Python Dict setting the 'value' key on the new Object 
// or Dict to the passed-in value.
// So, for example, if we execute the following code:

// wrapper_obj = wrap("my_wrapped_string"); 
//  # wrapper_obj should be  {"value":"my_wrapped_string"}
//
// We would then expect the following statement to be true:
//
// wrapper_obj["value"] == "my_wrapped_string"
//
// Unfortunately, the code is not working as designed. 
// Please fix the code so that it behaves as specified.

function wrap(value) {
  let objLit = { 'value': value };
  return objLit;
}
