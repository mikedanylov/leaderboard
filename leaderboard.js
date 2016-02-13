if (Meteor.isClient) {
    // template helpers should be inside client block
    Template.leaderboard.helpers({
        player: function() {
            return PlayerList.find();
        }
    });

    Template.leaderboard.events({
        'click .player': function() {
            var playerId = this._id;
            Session.set('selectedPlayer', playerId);
        }
    });
}



if (Meteor.isServer) {

}

PlayerList = new Mongo.Collection('players');