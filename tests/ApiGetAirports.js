describe('API test', function () {
    it('Returns all airports in the Airport Gap database', async function ({ supertest }) {
        await supertest
            .request("https://airportgap.dev-tester.com/api")
            .get("/airports")
            .expect(200)
            .expect('Content-Type', /json/)
            .then(function (response) {
                expect(response.body.data.length).to.be.equal(30);
            });
    });

    it('Returns the airport specified by the ID', async function ({ supertest }) {
        await supertest
            .request("https://airportgap.dev-tester.com/api")
            .get("/airports/KIX")
            .expect(200)
            .expect('Content-Type', /json/)
            .then(function (response) {
                expect(response.body.data.id).to.be.equal('KIX');
            });
    });
});