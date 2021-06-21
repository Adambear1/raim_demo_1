export function ClickListener(props) {
    console.log("Remote Component Sees: ", { props });
    const {event, products, currency} = props;
  
    if(/addToCart|productDetailView|removeFromCart|productListImpressions/.test(event) !== true){
      throw `Datalayer implementation error: Passed "${event}" - Looking for addToCart, productDetailView, productListImpressions or removeFromCart`
  }
  if(products && products.length === 1){
      const product = products[0];
      if(!product.name){
          throw `Datalayer implementation error: Passed "${product.name}" - Product name must have a valid string.` 
      }
      if(!product.id){
          throw `Datalayer implementation error: Passed "${product.id}" - Product id must have a valid string.` 
      }
      if(!product.price){
          throw `Datalayer implementation error: Passed "${product.price}" - Product price must have a valid float.` 
      }
      if(!product.category){
          throw `Datalayer implementation error: Passed "${product.category}" - Product id must have a valid string.`
      }
      if(!product.quantity || product.quantity < 1){
          throw `Datalayer implementation error: Product quantity must be greater than 1.` 
      }
  }
  
  
  
  let data = {
  event,
  currency,
  ecommerce: {}
  }
  
  
  switch(event){
  case 'addToCart':
      data.ecommerce["add"] = {products}
      break;
  case 'productListImpressions':
      data.ecommerce["impressions"] = {products}
      break;
  case 'productDetailView':
      data.ecommerce["detail"] = {products}
      break;
  case 'removeFromCart':
      data.ecommerce["remove"] = {products}
      break;
  default:
      data = {
          failedData: {
              event,
              currency,
              ecommerce: {
                  event: {products}
          }
      }
  }
  }
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
  }