if (Meteor.isClient) {
    // template helpers should be inside client block
    Template.leaderboard.helpers({
        player: function() {
            return PlayerList.find({}, {sort: {score: -1, name: 1} });
        },
        selectedClass: function() {
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if (playerId === selectedPlayer) {
                return 'selected';
            }
        },
        showSelectedPlayer: function() {
            var selectedPlayer = Session.get('selectedPlayer');
            return PlayerList.findOne(selectedPlayer);
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
        },
        'click .decrement': function() {
            var selectedPlayer = Session.get('selectedPlayer');
            PlayerList.update(selectedPlayer, {$inc: {score: -5} });
        },
        'click .remove': function() {
            var selectedPlayer = Session.get('selectedPlayer');
            PlayerList.remove(selectedPlayer);
        }
    });

    Template.addPlayerForm.events({
        'submit form': function(e) {
            e.preventDefault(); // no page refresh
            var playerName = e.target.playerName.value;
            console.log(playerName);
            PlayerList.insert({name: playerName, score: 0});
        }
    });
}



if (Meteor.isServer) {

}

PlayerList = new Mongo.Collection('players');