'use strict';

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'Goal Table',
      info : '/goalTable',
      awesomeness: 10
    }, {
      name : 'Assist Table',
      info : '/assistTable',
      awesomeness: 10
    }, {
      name : 'Discipline  Table',
      info : '/disciplineTable',
      awesomeness: 10
    }
  ]);
};

/* Get Goal Table*/
exports.goalTable = function(req, res) {
  res.json([
      {"PlayerId":16671,"PlayerName":"Aatif Chahechouhe","PlayerShortName":"A. Chahec...","Count":17,"CountryId":9,"CountryName":"Fransa","PlayedMatch":33,"TeamId":129,"TeamShortName":"SİV","TeamName":"Sivasspor"},{"PlayerId":1534,"PlayerName":"Moussa Sow","PlayerShortName":"Moussa Sow","Count":15,"CountryId":98,"CountryName":"Senegal","PlayedMatch":30,"TeamId":2,"TeamShortName":"FB","TeamName":"Fenerbahçe"},{"PlayerId":23237,"PlayerName":"Burak Yılmaz","PlayerShortName":"Burak Yılmaz","Count":15,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":31,"TeamId":1,"TeamShortName":"GS","TeamName":"Galatasaray"},{"PlayerId":12666,"PlayerName":"Oscar Scarione","PlayerShortName":"O. Scarione","Count":15,"CountryId":43,"CountryName":"Arjantin","PlayedMatch":33,"TeamId":90,"TeamShortName":"KSM","TeamName":"Kasımpaşa"},{"PlayerId":2551,"PlayerName":"Theofanis Gekas","PlayerShortName":"T. Gekas","Count":13,"CountryId":33,"CountryName":"Yunanistan","PlayedMatch":24,"TeamId":101,"TeamShortName":"KON","TeamName":"Torku Konyaspor"},{"PlayerId":35845,"PlayerName":"Bogdan Stancu","PlayerShortName":"B. Stancu","Count":13,"CountryId":22,"CountryName":"Romanya","PlayedMatch":28,"TeamId":71,"TeamShortName":"GB","TeamName":"Gençlerbirliği"},{"PlayerId":52597,"PlayerName":"Cenk Tosun","PlayerShortName":"Cenk Tosun","Count":13,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":31,"TeamId":68,"TeamShortName":"GANT","TeamName":"Gaziantepspor"},{"PlayerId":2260,"PlayerName":"Paulo Henrique","PlayerShortName":"P. Henrique","Count":13,"CountryId":45,"CountryName":"Brezilya","PlayedMatch":31,"TeamId":139,"TeamShortName":"TS","TeamName":"Trabzonspor"},{"PlayerId":77744,"PlayerName":"Deniz Yılmaz","PlayerShortName":"Deniz Yılmaz","Count":12,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":28,"TeamId":57,"TeamShortName":"ELZ","TeamName":"Elazığspor"},{"PlayerId":23532,"PlayerName":"Burhan Eşer","PlayerShortName":"Burhan Eşer","Count":12,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":32,"TeamId":129,"TeamShortName":"SİV","TeamName":"Sivasspor"}
    ]);
};


/* Get Assist Table*/
exports.assistTable = function(req, res) {
  res.json([
      {"PlayerId":1366,"PlayerName":"Cicinho","PlayerShortName":"Cicinho","Count":14,"CountryId":45,"CountryName":"Brezilya","PlayedMatch":30,"TeamId":129,"TeamShortName":"SİV","TeamName":"Sivasspor"},{"PlayerId":1190,"PlayerName":"Tabare Viudez","PlayerShortName":"T. Viudez","Count":10,"CountryId":72,"CountryName":"Uruguay","PlayedMatch":29,"TeamId":90,"TeamShortName":"KSM","TeamName":"Kasımpaşa"},{"PlayerId":9032,"PlayerName":"Caner Erkin","PlayerShortName":"Caner Erkin","Count":10,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":30,"TeamId":2,"TeamShortName":"FB","TeamName":"Fenerbahçe"},{"PlayerId":2551,"PlayerName":"Theofanis Gekas","PlayerShortName":"T. Gekas","Count":8,"CountryId":33,"CountryName":"Yunanistan","PlayedMatch":24,"TeamId":101,"TeamShortName":"KON","TeamName":"Torku Konyaspor"},{"PlayerId":23600,"PlayerName":"Güray Vural","PlayerShortName":"Güray Vural","Count":8,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":33,"TeamId":11,"TeamShortName":"AKH","TeamName":"Akhisar Bld.Spor"},{"PlayerId":4983,"PlayerName":"Olcay Şahan","PlayerShortName":"Olcay Şahan","Count":8,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":33,"TeamId":3,"TeamShortName":"BJK","TeamName":"Beşiktaş"},{"PlayerId":789,"PlayerName":"Aleksandr Hleb","PlayerShortName":"A. Hleb","Count":7,"CountryId":51,"CountryName":"Belarus","PlayedMatch":16,"TeamId":101,"TeamShortName":"KON","TeamName":"Torku Konyaspor"},{"PlayerId":35903,"PlayerName":"Adrian Mierzejewski","PlayerShortName":"A. Mierze...","Count":7,"CountryId":42,"CountryName":"Polonya","PlayedMatch":26,"TeamId":139,"TeamShortName":"TS","TeamName":"Trabzonspor"},{"PlayerId":2260,"PlayerName":"Paulo Henrique","PlayerShortName":"P. Henrique","Count":7,"CountryId":45,"CountryName":"Brezilya","PlayedMatch":31,"TeamId":139,"TeamShortName":"TS","TeamName":"Trabzonspor"},{"PlayerId":23463,"PlayerName":"Tita","PlayerShortName":"Tita","Count":7,"CountryId":45,"CountryName":"Brezilya","PlayedMatch":31,"TeamId":21,"TeamShortName":"ANT","TeamName":"M.P. Antalyaspor"}
    ]);
};


/* Get Dicipline Table */
exports.disciplineTable = function(req, res) {
  res.json([
      {"YellowCard":11,"RedCard":2,"DisciplinePoint":17,"PlayerId":71126,"PlayerName":"Şamil Cinaz","PlayerShortName":"Şamil Cinaz","Count":0,"CountryId":8,"CountryName":"Almanya","PlayedMatch":27,"TeamId":42,"TeamShortName":"BUR","TeamName":"Bursaspor"},{"YellowCard":11,"RedCard":2,"DisciplinePoint":17,"PlayerId":23526,"PlayerName":"Ante Kulusic","PlayerShortName":"Ante Kulusic","Count":0,"CountryId":40,"CountryName":"Hırvatistan","PlayedMatch":24,"TeamId":71,"TeamShortName":"GB","TeamName":"Gençlerbirliği"},{"YellowCard":8,"RedCard":3,"DisciplinePoint":17,"PlayerId":2479,"PlayerName":"Manuel Da Costa","PlayerShortName":"M. Da Costa","Count":0,"CountryId":15,"CountryName":"Portekiz","PlayedMatch":24,"TeamId":129,"TeamShortName":"SİV","TeamName":"Sivasspor"},{"YellowCard":12,"RedCard":1,"DisciplinePoint":15,"PlayerId":23224,"PlayerName":"Doğa Kaya","PlayerShortName":"Doğa Kaya","Count":0,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":24,"TeamId":71,"TeamShortName":"GB","TeamName":"Gençlerbirliği"},{"YellowCard":9,"RedCard":2,"DisciplinePoint":15,"PlayerId":23524,"PlayerName":"Aykut Demir","PlayerShortName":"Aykut Demir","Count":0,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":29,"TeamId":139,"TeamShortName":"TS","TeamName":"Trabzonspor"},{"YellowCard":11,"RedCard":1,"DisciplinePoint":14,"PlayerId":23647,"PlayerName":"Ali Çamdalı","PlayerShortName":"Ali Çamdalı","Count":0,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":30,"TeamId":101,"TeamShortName":"KON","TeamName":"Torku Konyaspor"},{"YellowCard":5,"RedCard":3,"DisciplinePoint":14,"PlayerId":3897,"PlayerName":"Björn Vleminckx","PlayerShortName":"B. Vleminckx","Count":0,"CountryId":16,"CountryName":"Belçika","PlayedMatch":21,"TeamId":92,"TeamShortName":"ERC","TeamName":"Kayseri Erciyesspor"},{"YellowCard":5,"RedCard":3,"DisciplinePoint":14,"PlayerId":12475,"PlayerName":"Gilles Binya","PlayerShortName":"Gilles Binya","Count":0,"CountryId":32,"CountryName":"Kamerun","PlayedMatch":24,"TeamId":68,"TeamShortName":"GANT","TeamName":"Gaziantepspor"},{"YellowCard":10,"RedCard":1,"DisciplinePoint":13,"PlayerId":23087,"PlayerName":"Abdullah Durak","PlayerShortName":"A. Durak","Count":0,"CountryId":1,"CountryName":"Türkiye","PlayedMatch":31,"TeamId":93,"TeamShortName":"KYS","TeamName":"Kayserispor"},{"YellowCard":7,"RedCard":2,"DisciplinePoint":13,"PlayerId":1253,"PlayerName":"Felipe Melo","PlayerShortName":"Felipe Melo","Count":0,"CountryId":45,"CountryName":"Brezilya","PlayedMatch":29,"TeamId":1,"TeamShortName":"GS","TeamName":"Galatasaray"}
    ]);
};

