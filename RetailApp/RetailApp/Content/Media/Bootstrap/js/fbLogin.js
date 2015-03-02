var token;
var likes;
var numOfPages = 0;
var found = 1;

window.fbAsyncInit = function () {
    FB.init({ appId: '444934948997589', status: true, cookie: true, xfbml: true, version: 2.1 });

};
(function () {
    var e = document.createElement('script'); e.async = true;
    e.src = document.location.protocol +
      '//connect.facebook.net/en_US/all.js';
    document.getElementById('fb-root').appendChild(e);
}());

function fetchUserDetail() {
    FB.api('/me/likes', function (response) {
        likes = response.data;
        
        var category = [];
        category.push(new PopulateArray("Other", "0"));
        category.push(new PopulateArray("Entrepreneur", "0"));
        category.push(new PopulateArray("Government organization", "0"));
        category.push(new PopulateArray("Website", "0"));
        category.push(new PopulateArray("Local business", "0"));
        category.push(new PopulateArray("Company", "0"));
        category.push(new PopulateArray("Community", "0"));
        category.push(new PopulateArray("Consulting/business services", "0"));
        category.push(new PopulateArray("Tv show", "0"));
        category.push(new PopulateArray("Local/travel website", "0"));
        category.push(new PopulateArray("University", "0"));
        category.push(new PopulateArray("Entertainment website", "0"));
        category.push(new PopulateArray("Just for fun", "0"));
        category.push(new PopulateArray("Musician/band", "0"));
        category.push(new PopulateArray("Tv channel", "0"));
        category.push(new PopulateArray("Comedian", "0"));
        category.push(new PopulateArray("Athlete", "0"));
        category.push(new PopulateArray("Sports team", "0"));
        category.push(new PopulateArray("Media/news/publishing", "0"));
        category.push(new PopulateArray("Movie", "0"));
        category.push(new PopulateArray("Product/service", "0"));
        category.push(new PopulateArray("Comedian", "0"));

        var uno = 1;
        for (x in likes) {
         
            found = 1;
            for (index = 0; index < category.length; index++) {
                if (likes[x].category === category[index].categoryName) {
                    category[index].likeNumber = category[index].likeNumber + uno;
                    found = 0;
                }

            }
            if (Boolean(found)) {
                category.push(new PopulateArray(likes[x].category, "0"));
            }
        }
        alert(x+1);
        //Loop the whole array looking for the max number of likes and category to display
        var maxLikes = 0;
        for (y in category) {
            if (maxLikes < category[y].likeNumber) {
                maxLikes = category[y].likeNumber;
                cat = category[y].categoryName;
            }
        }

        alert("You're a very " + cat + " Person...  :)");

    }, { access_token: token });
}

function PopulateArray(categoryName, likeNumber) {
    this.categoryName = categoryName;
    this.likeNumber = likeNumber;
};

/*(function fireSpinner(d) {
    
    d.getElementById('spinner').style.display = 'block';
    d.getElementById('loading2').style.display = 'block';
});*/


function checkFacebookLogin() {
    //fireSpinner(d);
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            fetchUserDetail();
        }
        else {
            initiateFBLogin();
        }
    });
}

function initiateFBLogin() {
    FB.login(function (response) {
        token = FB.getAuthResponse()['accessToken'];
        fetchUserDetail();
    }, { scope: "public_profile,email,user_likes" });
}