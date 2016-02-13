if (Meteor.isClient) {
    // template helpers should be inside client block
    Template.leaderboard.helpers({
        player: function() {
            return PlayerList.find();
        }
    });
}



if (Meteor.isServer) {

}

PlayerList = new Mongo.Collection('players');