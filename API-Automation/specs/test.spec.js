const pactum = require('pactum');

const spec = pactum.spec();

let id

async function getId (resp, leagueName) {
    let arr = await resp.body.competitions.filter( comp =>  comp.name == "League One")
    return arr[0].id
}

it('should be ok', async () => {
    let resp = await pactum.spec()
        .get('https://api.football-data.org/v2/competitions')
        .withHeaders('X-Auth-Token', '1deb7f2333e04514b3b7d5631dd45ca4')
        .expectStatus(200)
        .toss();

    id = await getId(resp, "League One")
});

it('should be ok', async () => {
    let resp = await pactum.spec()
        .get('https://api.football-data.org/v4/competitions/2013/matches')
        .withHeaders('X-Auth-Token', '1deb7f2333e04514b3b7d5631dd45ca4')
        .expectStatus(200)
        .toss();

    let totalMatches = resp.body.matches.length
    let homeTeams = [], awayTeams = []
    await resp.body.matches.forEach(async (obj) => {
        await homeTeams.push(obj.homeTeam.name)
        await awayTeams.push(obj.awayTeam.name)
    });
    console.log("homeTeams = :" +homeTeams)
    console.log("awayTeams = :" +awayTeams)
});
