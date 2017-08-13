app.controller("tagController", function($scope, $http, $interval){

$scope.tagFavorite = [];

// Get favorites from Database
$scope.findFav = () => {
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      db.collection('favorites').find({}).toArray(function(err, result)
      {

          $scope.tagFavorite = [];

          for(x in result)
          {
            $scope.tagFavorite.push(result[x].favorite);
          }
          db.close();
      });
    });

    // return $scope.tagFavorite;
  };


$interval(function () {
      $scope.findFav();
  }, 500);


// Check to see favorite does not already exist
$scope.insertFav = (selected) => {
  if(selected != null){
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      db.collection('favorites').findOne({"favorite": selected}, function(err, result)
      {
        if(result != null) {
          console.log(result.favorite);
          db.close();
          return;
        } else {
          $scope.insertOne(selected);
        }
      });
    });
  };

  $scope.tagFavorite = [];
   $scope.findFav();
};


$scope.insertOne = (selected) => {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection('favorites').insertOne({"favorite":selected}, function(err, result) {
    if (err) throw err;
    console.log(" Records Added");
    db.close();
  });
});
};

$scope.deleteItem = (table, selected) => {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection(table).deleteOne(selected, function(err, obj) {
    if (err) throw err;
    console.log(" Record Deleted");
    db.close();
  });
});
};

$scope.favorites = ['Invoice', 'Expenses', 'Payroll', 'Quickratio', 'Documents', 'Calendar', 'Todo', 'Blank','Tested', 'test'];


  var oldFavs = $scope.tagFavorite;
 $scope.tagFavorite = [];
 angular.forEach(oldFavs, function(x) {
     if (!x.done) $scope.tagFavorite.push(x);
 });

  $scope.removeItem = function (x) {
  $scope.deleteItem('favorites', {"favorite":x});
};

  $scope.showCls = false;
  $scope.close = function(){
    $scope.showCls = true;
  };
  $scope.rClose = function(){
    $scope.showCls = false;
  };
  $scope.showFav = false;
  $scope.showOf = function(){
    $scope.showFav = true;
  };
  $scope.closeFav = function(){
    $scope.showFav = false;
  };

  $scope.templates = [{ name: 'nav.html', url: 'layout/nav.html'}, { name: 'head.html', url: 'layout/head.html'}, { name: 'tabs.html', url: 'layout/tabs.html'}];
  $scope.nav = $scope.templates[0];
  $scope.head = $scope.templates[1];
  $scope.tabs = $scope.templates[2];

$scope.countries = ['United Kingdom', 'USA', 'Germany', 'France', 'Netherland'];

$scope.customerMenu = false;
$scope.custMenu = function(){
  $scope.customerMenu = !$scope.customerMenu;
};

$scope.supplierMenu = false;
$scope.supMenu = function(){
  $scope.supplierMenu = !$scope.supplierMenu;
};

$scope.accountMenu = false;
$scope.accMenu = function(){
  $scope.accountMenu = !$scope.accountMenu;
};

$scope.humResMenu = false;
$scope.hrMenu = function(){
  $scope.humResMenu = !$scope.humResMenu;
};

$scope.settingMenu = false;
$scope.setMenu = function(){
  $scope.settingMenu = !$scope.settingMenu;
};

$scope.userMenu = false;
$scope.uMenu = function(){
  $scope.userMenu = !$scope.userMenu;
};

$scope.userName = 'Festus';

$scope.createWindow = (filename) => {

  let win = new BrowserWindow({width:750, height:550});

  win.loadURL(`file://${__dirname}/`+filename+`.html`);

win.once('ready-to-show', () => {
win.show()
});

win.on('close',function(){
  win = null
});
};

});
