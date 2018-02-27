const friendsList = [
	{
		name: 'James',
		photo: 'http://www.espn.com/nba/player/_/id/3992/james-harden',
		scores: [2,3,4,5,1,2,4,5,2,4]
	},
	{
		name: 'Chris',
		photo: 'http://www.espn.com/nba/player/_/id/2779/chris-paul',
		scores: [5,4,3,2,1,4,2,3,4,1]
	},
	{
		name: 'Clint',
		photo: 'http://www.espn.com/nba/player/_/id/3102529/clint-capela',
		scores: [1,2,3,4,1,2,3,4,5,1]
	},
	{
		name: 'Gordon',
		photo: 'http://www.foxsports.com/nba/eric-gordon-player-stats',
		scores: [5,4,3,2,1,2,3,4,5,1]
	},
	{
		name: 'Ariza',
		photo: 'http://www.espn.com/nba/player/_/id/2426/trevor-ariza',
		scores: [1,2,3,4,5,5,4,3,2,1]
	},
	{
		name: 'Anderson',
		photo: 'http://www.espn.com/nba/player/_/id/3412/ryan-anderson',
		scores: [2,3,4,5,4,3,1,3,3,3]
	}
]

const compatibility = (arr1, arr2) => {
  return arr1.map((e,i) => Math.abs(e - arr2[i]))
  .reduce((sum, val) => sum += val)
}

const findMatch = newSet => {
	const comps = friendsList.map(e => compatibility(newSet, e.scores))
	return friendsList[comps.indexOf(Math.min(...comps))]
}

const addToList = newFriend => friendsList.push(newFriend);

module.exports = {
	list: friendsList,
	findMatch,
	addToList
}