document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('ranking-table');
    const data = [
        { position: 1, titlePL: 'Legenda Zeldy: Oddech Dzikiego', releaseDate: '2017-03-03', rating: 10 },
        { position: 2, titlePL: 'Wiedźmin 3: Dziki Gon', releaseDate: '2015-05-19', rating: 9.8 },
        { position: 3, titlePL: 'Red Dead Redemption 2', releaseDate: '2018-10-26', rating: 9.7 },
        { position: 4, titlePL: 'Cyberpunk 2077', releaseDate: '2020-12-10', rating: 9.5 },
        { position: 5, titlePL: 'GTA V', releaseDate: '2013-09-17', rating: 9.4 },
        { position: 6, titlePL: 'Minecraft', releaseDate: '2011-11-18', rating: 9.3 },
        { position: 7, titlePL: 'Fortnite', releaseDate: '2017-07-21', rating: 9.2 },
        { position: 8, titlePL: 'Overwatch', releaseDate: '2016-05-24', rating: 9.1 },
        { position: 9, titlePL: 'Half-Life 2', releaseDate: '2004-11-16', rating: 9.0 },
        { position: 10, titlePL: 'BioShock', releaseDate: '2007-08-21', rating: 8.9 },
        { position: 11, titlePL: 'The Elder Scrolls V: Skyrim', releaseDate: '2011-11-11', rating: 8.8 },
        { position: 12, titlePL: 'Portal 2', releaseDate: '2011-04-19', rating: 8.7 },
        { position: 13, titlePL: 'Dark Souls III', releaseDate: '2016-04-12', rating: 8.6 },
        { position: 14, titlePL: 'Sekiro: Shadows Die Twice', releaseDate: '2019-03-22', rating: 8.5 },
        { position: 15, titlePL: 'God of War', releaseDate: '2018-04-20', rating: 8.4 },
        { position: 16, titlePL: 'Horizon Zero Dawn', releaseDate: '2017-02-28', rating: 8.3 },
        { position: 17, titlePL: 'Assassin’s Creed Odyssey', releaseDate: '2018-10-05', rating: 8.2 },
        { position: 18, titlePL: 'Death Stranding', releaseDate: '2019-11-08', rating: 8.1 },
        { position: 19, titlePL: 'Spider-Man', releaseDate: '2018-09-07', rating: 8.0 },
        { position: 20, titlePL: 'The Last of Us Part II', releaseDate: '2020-06-19', rating: 7.9 },
        { position: 21, titlePL: 'Star Wars Jedi: Fallen Order', releaseDate: '2019-11-15', rating: 7.8 },
        { position: 22, titlePL: 'Monster Hunter: World', releaseDate: '2018-01-26', rating: 7.7 },
        { position: 23, titlePL: 'DOOM Eternal', releaseDate: '2020-03-20', rating: 7.6 },
        { position: 24, titlePL: 'NieR: Automata', releaseDate: '2017-02-23', rating: 7.5 },
        { position: 25, titlePL: 'Persona 5', releaseDate: '2016-09-15', rating: 7.4 },
        { position: 26, titlePL: 'Final Fantasy XV', releaseDate: '2016-11-29', rating: 7.3 },
        { position: 27, titlePL: 'Resident Evil 2', releaseDate: '2019-01-25', rating: 7.2 },
        { position: 28, titlePL: 'Resident Evil 3', releaseDate: '2020-04-03', rating: 7.1 },
        { position: 29, titlePL: 'Control', releaseDate: '2019-08-27', rating: 7.0 },
        { position: 30, titlePL: 'Metro Exodus', releaseDate: '2019-02-15', rating: 6.9 },
        { position: 31, titlePL: 'Halo Infinite', releaseDate: '2021-12-08', rating: 6.8 },
        { position: 32, titlePL: 'Destiny 2', releaseDate: '2017-09-06', rating: 6.7 },
        { position: 33, titlePL: 'Gears 5', releaseDate: '2019-09-10', rating: 6.6 },
        { position: 34, titlePL: 'The Division 2', releaseDate: '2019-03-15', rating: 6.5 },
        { position: 35, titlePL: 'Battlefield V', releaseDate: '2018-11-20', rating: 6.4 },
        { position: 36, titlePL: 'FIFA 21', releaseDate: '2020-10-09', rating: 6.3 },
        { position: 37, titlePL: 'NBA 2K21', releaseDate: '2020-09-04', rating: 6.2 },
        { position: 38, titlePL: 'Madden NFL 21', releaseDate: '2020-08-28', rating: 6.1 },
        { position: 39, titlePL: 'Call of Duty: Modern Warfare', releaseDate: '2019-10-25', rating: 6.0 },
        { position: 40, titlePL: 'Call of Duty: Black Ops Cold War', releaseDate: '2020-11-13', rating: 5.9 },
        { position: 41, titlePL: 'Apex Legends', releaseDate: '2019-02-04', rating: 5.8 },
        { position: 42, titlePL: 'Valorant', releaseDate: '2020-06-02', rating: 5.7 },
        { position: 43, titlePL: 'Rainbow Six Siege', releaseDate: '2015-12-01', rating: 5.6 },
        { position: 44, titlePL: 'Among Us', releaseDate: '2018-06-15', rating: 5.5 },
        { position: 45, titlePL: 'Fall Guys', releaseDate: '2020-08-04', rating: 5.4 },
        { position: 46, titlePL: 'PUBG', releaseDate: '2017-12-20', rating: 5.3 },
        { position: 47, titlePL: 'Hades', releaseDate: '2020-09-17', rating: 5.2 },
        { position: 48, titlePL: 'Ghost of Tsushima', releaseDate: '2020-07-17', rating: 5.1 },
        { position: 49, titlePL: 'Resident Evil Village', releaseDate: '2021-05-07', rating: 5.0 },
        { position: 50, titlePL: 'Demon’s Souls', releaseDate: '2020-11-12', rating: 4.9 },
    ];

    let html = `
        <tr>
            <th>Pozycja</th>
            <th>Gra</th>
            <th>Data premiery</th>
            <th>Ocena</th>
        </tr>
    `;

    data.forEach(row => {
        html += `
            <tr>
                <td>${row.position}</td>
                <td>${row.titlePL}</td>
                <td>${row.releaseDate}</td>
                <td>${row.rating}</td>
            </tr>
        `;
    });

    table.innerHTML = html;
});
