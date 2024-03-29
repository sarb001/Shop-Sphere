const checkitem = (cartitem,productid) => {
    console.log('cartitem =',cartitem);
    console.log(' productid =',productid);
    return cartitem?.some((item) => item?.id === productid);
}

export default checkitem