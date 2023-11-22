const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}


// Add methods to prototype

ScranAdvisor.prototype.countRestraunts = function (){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findByName = function(name){
    return this.restaurants.find(restaurants => restaurants.name === name)
}

ScranAdvisor.prototype.findAllRestraunts = function(name){
    return this.restaurants.map(restaurant => restaurant.name )
    
}
ScranAdvisor.prototype.findAllRestrauntsInGlasgow = function(town){
    return this.restaurants.filter(restaurant => restaurant.location.town === town)
    
}

module.exports = ScranAdvisor;