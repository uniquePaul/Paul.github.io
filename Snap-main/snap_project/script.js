const btFacebook = document.getElementById("bt_facebook");
btFacebook.addEventListener("click", tapOnFaceBook);

const btYelp = document.getElementById("bt_yelp");
btYelp.addEventListener("click", tapOnYelp);

const btInstagram = document.getElementById("bt_instagram");
btInstagram.addEventListener("click", tapOnInstagram);

function tapOnFaceBook(){
    window.open("https://www.facebook.com/YangChowRestaurant", '_blank');
}

function tapOnYelp(){
    window.open("https://www.yelp.com/biz/yang-chow-los-angeles", '_blank');
}

function tapOnInstagram(){
    window.open("https://www.instagram.com/yangchow2.0", '_blank');
}