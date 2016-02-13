if (Meteor.isClient) {
    // template helpers should be inside client block
    Template.leaderboard.helpers({
        player: function() {
            return PlayerList.find();
        },
        selectedClass: function() {
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if (playerId === selectedPlayer) {
                return 'selected';
            }
        }
    });

    Template.leaderboard.events({
        'click .player': function() {
            var playerId = this._id;
            Session.set('selectedPlayer', playerId);
        },
        'click .increment': function() {
            var selectedPlayer = Session.get('selectedPlayer');
            PlayerList.update(selectedPlayer, {$inc: {score: 5} });
        }
    });
}



if (Meteor.isServer) {

}

PlayerList = new Mongo.Collection('players');